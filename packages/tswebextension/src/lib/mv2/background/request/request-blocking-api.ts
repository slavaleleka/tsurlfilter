import browser, { type WebRequest } from 'webextension-polyfill';
import {
    RequestType,
    NetworkRuleOption,
    NetworkRule,
} from '@adguard/tsurlfilter';

import { defaultFilteringLog, FilteringEventType } from '../../../common/filtering-log';
import {
    tabsApi,
    engineApi,
    redirectsService,
    documentBlockingService,
} from '../api';
import { ContentType } from '../../../common/request-type';

/**
 * Base params about request.
 */
type RequestParams = {
    tabId: number,
    eventId: string,
    referrerUrl: string,
    requestUrl: string,
    requestType: RequestType,
    contentType: ContentType,
};

/**
 * Params for {@link RequestBlockingApi.getBlockingResponse}.
 */
export type GetBlockingResponseParams = RequestParams & {
    rule: NetworkRule | null,
    popupRule: NetworkRule | null,
};

/**
 * Api for processing request filtering.
 *
 * Method {@link getBlockingResponse} processes rule applying for request and computes response
 * for {@link WebRequestApi.onBeforeRequest} listener.
 *
 * Method {@link shouldCollapseElement} checks, if initializer for request should be collapsed by content-script.
 *
 * This class also provides method {@link isRequestBlockedByRule} for checking, if rule is blocking rule.
 */
export class RequestBlockingApi {
    /**
     * In some cases request blocking breaks images and frames on page.
     * We match rule from content-script and decide if DOM element should be hidden via css.
     *
     * @param tabId Tab id.
     * @param url Request url.
     * @param referrerUrl Request initializer frame url.
     * @param requestType Type of request.
     *
     * @returns True, if element should be collapsed, else returns false.
     */
    public static shouldCollapseElement(
        tabId: number,
        url: string,
        referrerUrl: string,
        requestType: RequestType,
    ): boolean {
        const result = engineApi.matchRequest({
            requestUrl: url,
            frameUrl: referrerUrl,
            requestType,
            frameRule: tabsApi.getTabFrameRule(tabId),
        });

        if (!result) {
            return false;
        }

        return RequestBlockingApi.isRequestBlockedByRule(result.getBasicResult());
    }

    /**
     * Checks if request rule is blocked.
     *
     * @param requestRule Request network rule or null.
     * @returns True, if rule is request blocking, else returns false.
     */
    public static isRequestBlockedByRule(requestRule: NetworkRule | null): boolean {
        return !!requestRule
            && !requestRule.isAllowlist()
            && !requestRule.isOptionEnabled(NetworkRuleOption.Replace)
            && !requestRule.isOptionEnabled(NetworkRuleOption.Redirect);
    }

    /**
     * Closes the tab which considered as a popup.
     *
     * @param data Needed data for logging closing of tab.
     * @param appliedRule Network rule which was applied to request. This field
     * is needed because data contains two rules: one for the request and
     * one for the popup. And we should log only the rule which was applied
     * to the request.
     *
     * @returns Response for {@link WebRequestApi.onBeforeRequest} listener.
     */
    private static closeTab(
        data: RequestParams,
        appliedRule: NetworkRule | null,
    ): WebRequest.BlockingResponse {
        RequestBlockingApi.logRuleApplying(data, appliedRule);
        browser.tabs.remove(data.tabId);

        return { cancel: true };
    }

    /**
     * Processes rule applying for request and compute response for {@link WebRequestApi.onBeforeRequest} listener.
     *
     * @param data Data for request processing.
     *
     * @returns Response for {@link WebRequestApi.onBeforeRequest} listener.
     */
    public static getBlockingResponse(data: GetBlockingResponseParams): WebRequest.BlockingResponse | void {
        const {
            rule,
            popupRule,
            requestType,
            tabId,
            eventId,
            requestUrl,
            referrerUrl,
        } = data;

        if (!rule) {
            return undefined;
        }

        // popup rule will be handled in the condition with requesttype === document below
        if (popupRule?.getText() === rule.getText() && requestType !== RequestType.Document) {
            return undefined;
        }

        if (rule.isAllowlist()) {
            RequestBlockingApi.logRuleApplying(data, rule);
            return undefined;
        }

        if (rule.isOptionEnabled(NetworkRuleOption.Redirect)) {
            const redirectUrl = redirectsService.createRedirectUrl(rule.getAdvancedModifierValue(), requestUrl);
            if (redirectUrl) {
                RequestBlockingApi.logRuleApplying(data, rule);
                // redirects should be considered as blocked for the tab blocked request count
                // which is displayed on the extension badge
                // https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2443
                tabsApi.incrementTabBlockedRequestCount(tabId);
                return { redirectUrl };
            }
        }

        // Basic rules for blocking requests are applied only to sub-requests
        // so `||example.com^` will not block the main page
        // https://adguard.com/kb/general/ad-filtering/create-own-filters/#basic-rules
        // For document requests we need to show blocking page or close tab.
        if (requestType === RequestType.Document) {
            // Blocking rule can be with $popup modifier - in this case we need
            // to close the tab as soon as possible.
            // https://adguard.com/kb/general/ad-filtering/create-own-filters/#popup-modifier
            if (popupRule && tabsApi.isNewPopupTab(tabId)) {
                return RequestBlockingApi.closeTab(data, popupRule);
            }
            // to handle rules with $all modifier, where popup was added implicitly
            if (rule.isOptionEnabled(NetworkRuleOption.Popup) && tabsApi.isNewPopupTab(tabId)) {
                return RequestBlockingApi.closeTab(data, rule);
            }

            // we do not want to block the main page if rule has only $popup modifier
            if (rule.getText() === popupRule?.getText() && !tabsApi.isNewPopupTab(tabId)) {
                return undefined;
            }

            // but if the blocking rule has $document modifier, blocking page should be shown
            // e.g. `||example.com^$document`
            if ((rule.getPermittedRequestTypes() & RequestType.Document) === RequestType.Document) {
                return documentBlockingService.getDocumentBlockingResponse({
                    eventId,
                    requestUrl,
                    referrerUrl,
                    rule,
                    tabId,
                });
            }

            return undefined;
        }

        RequestBlockingApi.logRuleApplying(data, rule);
        return { cancel: true };
    }

    /**
     * Creates {@link FilteringLog} event of rule applying for processed request.
     *
     * @param data Data for request processing.
     * @param appliedRule Network rule which was applied to request.
     */
    private static logRuleApplying(
        data: RequestParams,
        appliedRule: NetworkRule | null,
    ): void {
        const {
            tabId,
            eventId,
            referrerUrl,
            requestUrl,
            contentType,
        } = data;

        if (!appliedRule) {
            return;
        }

        defaultFilteringLog.publishEvent({
            type: FilteringEventType.ApplyBasicRule,
            data: {
                tabId,
                eventId,
                requestType: contentType,
                frameUrl: referrerUrl,
                requestUrl,
                rule: appliedRule,
            },
        });
    }
}
