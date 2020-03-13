/**
 * Rule advanced modifier interface
 */
// eslint-disable-next-line max-classes-per-file
export interface IAdvancedModifier {
    /**
     * Modifier value
     */
    getValue(): string;
}

/**
 * Csp modifier class
 */
export class CspModifier implements IAdvancedModifier {
    /**
     * Csp directive
     */
    private readonly cspDirective: string;

    /**
     * Is whitelist rule
     */
    private readonly isWhitelist: boolean;

    /**
     * Constructor
     *
     * @param value
     */
    constructor(value: string, isWhitelist: boolean) {
        this.cspDirective = value;
        this.isWhitelist = isWhitelist;

        this.validateCspDirective();
    }

    /**
     * Csp directive
     */
    getValue(): string {
        return this.cspDirective;
    }

    /**
     * Validates CSP rule
     */
    private validateCspDirective(): void {
        /**
         * https://github.com/AdguardTeam/AdguardBrowserExtension/issues/685
         * CSP directive may be empty in case of whitelist rule,
         * it means to disable all $csp rules matching the whitelist rule
         */
        if (!this.isWhitelist && !this.cspDirective) {
            throw new Error('Invalid $CSP rule: CSP directive must not be empty');
        }

        if (this.cspDirective) {
            /**
             * https://github.com/AdguardTeam/AdguardBrowserExtension/issues/685#issue-228287090
             * Forbids report-to and report-uri directives
             */
            const cspDirective = this.cspDirective.toLowerCase();
            if (cspDirective.indexOf('report-') >= 0) {
                throw new Error(`Forbidden CSP directive: ${cspDirective}`);
            }
        }
    }
}

/**
 * Replace modifier class
 */
export class ReplaceModifier implements IAdvancedModifier {
    /**
     * Replace option value
     */
    private readonly replaceOption: string;

    /**
     * Constructor
     *
     * @param value
     */
    constructor(value: string) {
        this.replaceOption = value;

        // TODO: Parse replace option properly
    }

    /**
     * Replace content
     */
    getValue(): string {
        return this.replaceOption;
    }
}
