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
     * Constructor
     *
     * @param value
     * @param ruleText
     */
    constructor(value: string, ruleText: string) {
        RedirectModifier.validate(ruleText, value);

        this.redirectTitle = value;
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
     */
    private static validate(ruleText: string, redirectTitle: string): void {
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
