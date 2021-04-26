import Scriptlets from 'scriptlets';
import { IAdvancedModifier } from './advanced-modifier';
import { NETWORK_RULE_OPTIONS } from '../rules/network-rule-options';

/**
 * Redirect modifier class
 */
export class RedirectModifier implements IAdvancedModifier {
    /**
     * Value
     */
    private readonly redirectTitle: string;

    /**
     * Is redirecting only blocked requests
     * See $redirect-rule options
     */
    readonly isRedirectingOnlyBlocked: boolean = false;

    /**
     * Constructor
     *
     * @param value
     * @param ruleText
     * @param isWhitelist
     * @param isRedirectingOnlyBlocked is redirect-rule modifier
     */
    constructor(value: string, ruleText: string, isWhitelist: boolean, isRedirectingOnlyBlocked = false) {
        RedirectModifier.validate(ruleText, value, isWhitelist);

        this.redirectTitle = value;
        this.isRedirectingOnlyBlocked = isRedirectingOnlyBlocked;
    }

    /**
     * Redirect title
     */
    getValue(): string {
        return this.redirectTitle;
    }

    /**
     * Validates redirect rule
     *
     * @param ruleText
     * @param redirectTitle
     * @param isWhitelist
     */
    private static validate(ruleText: string, redirectTitle: string, isWhitelist: boolean): void {
        if (isWhitelist && !redirectTitle) {
            return;
        }

        if (!redirectTitle) {
            throw new SyntaxError('Invalid $redirect rule, redirect value must not be empty');
        }

        const { redirects } = Scriptlets;
        const ruleTextToValidate = ruleText.replace(NETWORK_RULE_OPTIONS.REDIRECTRULE, NETWORK_RULE_OPTIONS.REDIRECT);
        if (!redirects.isAdgRedirectRule(ruleTextToValidate) || !redirects.isValidAdgRedirectRule(ruleTextToValidate)) {
            throw new SyntaxError('$redirect modifier is invalid');
        }
    }
}
