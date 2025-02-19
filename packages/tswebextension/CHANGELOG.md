# TSWebExtension Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!-- TODO: manually add compare links for version changes -->
<!-- e.g. [0.1.2]: https://github.com/AdguardTeam/tsurlfilter/compare/tswebextension-v0.1.1...tswebextension-v0.1.2 -->

## [1.0.24] - 2024-04-15

### Fixed

- Script rules are not applied in Firefox due to CSP [AdguardBrowserExtension#1733].

[1.0.24]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.24
[AdguardBrowserExtension#1733]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/1733

## [1.0.23] - 2024-04-15

### Changed

- Error logging level on setting cookie with mismatched domain and request URL [AdguardBrowserExtension#2683].

[1.0.23]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.23
[AdguardBrowserExtension#2683]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2683

## [1.0.21] - 2024-03-29

### Fixed

- Do not block "Should collapse" mechanism with `$popup` rules

[1.0.21]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.21

## [1.0.20] - 2024-03-28

### Changed

- Analysis of $popup rules (in addition to the basic one) to determine
  the result of blocking a request [AdguardBrowserExtension#2620], [AdguardBrowserExtension#2728].
- Updated `@adguard/tsurlfilter` to `v2.2.17`.
- Updated `@adguard/scriptlets` to `v1.10.25`.

[1.0.20]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.20
[AdguardBrowserExtension#2620]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2620
[AdguardBrowserExtension#2728]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2728

## [1.0.18] - 2024-03-25

### Fixed

- Improved assistant iframe checking for cosmetic rules injection [AdguardBrowserExtension#1848].

[1.0.18]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.18

## [1.0.17] - 2024-03-25

### Fixed

- Assistant iframe styles are affected by cosmetic rules specific for websites [AdguardBrowserExtension#1848].

[1.0.17]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.17
[AdguardBrowserExtension#1848]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/1848

## [1.0.16] - 2024-03-01

### Changed

- `$popup` should not disable simple blocking rule [#2728].

[1.0.16]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.16
[#2728]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2728

## [1.0.15] - 2024-02-22

### Fixed

- `$popup` modifier block other types of resources [#2723].

[1.0.15]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.15
[#2723]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2723

## [1.0.14] - 2024-02-13

### Changed

- Filtering engine now uses the new `BufferRuleList` provided by `@adguard/tsurlfilter`
  to improve performance and memory usage.

[1.0.14]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.14

## [1.0.13] - 2024-02-13

### Added

- New cleanup mechanism for `RequestContextStorage` to prevent memory leaks
  during internal redirects.

### Changed

- Updated `@adguard/tsurlfilter` to `v2.2.13`.
- Updated `@adguard/scriptlets` to `v1.10.1`.

### Fixed

- Prevent memory leaks due to V8 optimizations of substring operations.

[1.0.13]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.13

## [1.0.12] - 2024-02-07

### Fixed

- Applying of `$all` modifier rules [#2620].

[#2620]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2620

[1.0.12]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.12

## [1.0.11] - 2024-02-06

### Fixed

- Incorrect handling hook `webNavigation.onCommitted` for Opera with force
  recalculating matching result.
- Correct export of `EXTENDED_CSS_VERSION` for mv2 version.

[1.0.11]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.11

## [1.0.10] - 2024-01-27

### Fixed

- Export correct types for TS.
- Exclude usage of ExtendedCSS in common to prevent errors in background in the
  MV.

[1.0.10]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.10

## [1.0.9] - 2024-01-25

### Changed

- Correct usage of `setConfiguration`.

[1.0.9]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.9

## [1.0.8] - 2023-12-27

### Changed

- `webNavigation.onCommitted` event handler to take into account Opera event
firing bug.
- Updated `@adguard/tsurlfilter` to `v2.2.9`.
- Updated `@adguard/scriptlets` to `v1.9.105`.

[1.0.8]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.8

## [1.0.6] - 2023-12-19

### Changed

- Stealth options that are applied to the document can now be disabled by a
  `$stealth` rule. [#2648].

[#2648]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2648

[1.0.6]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.6

## [1.0.5] - 2023-12-08

### Fixed

- `Do Not Track` and `Hide Referrer from third parties` ignoring global Stealth
mode toggle.

[1.0.5]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.5

## [1.0.4] - 2023-12-08

### Fixed

- Session storage error in old browsers [#2636].

[#2636]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2636

[1.0.4]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.4

## [1.0.3] - 2023-12-08

### Fixed

- Incorrect path for `typings` in `package.json`.

[1.0.3]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.3

## [1.0.2] - 2023-12-07

### Added

- Library version number to the exports [#2237].

### Changed

- Updated `@adguard/tsurlfilter` to `v2.2.8`.

### Fixed

- Remove referrer from the document.referrer [#1844].

[#1844]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/1844

[#2237]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2237

[1.0.2]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.2

## [1.0.1] - 2023-12-06

### Fixed

- HTML ($$) rules break encoding on some websites [#2249].

[#2249]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2249

[1.0.1]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.1

## [1.0.0] - 2023-12-01

### Added

- New `TsWebExtension.initStorage` method to initialize persistent values for
  the background script.
- New `createTsWebExtension` function to create `TsWebExtension` instance.

### Changed

- [BREAKING CHANGE] In preparation for using event-driven background scripts,
  we started using a session store to persist application context on restart.
  Since the extension session store CRUD operations are asynchronous, we added
  protection against reading the context before initialization to avoid
  unexpected behavior. Some code that depends on this restored data may be
  called before the `start` method to prepare the `configuration`, so we split
  the initialization process into two parts: the new `initStorage` method, which
  is called as soon as possible and allows access to the actual context before
  directly starting the filtering, and the `start` method, which initializes
  the filtering process.
- [BREAKING CHANGE] `TsWebExtension` constructor now accepts submodules as
  arguments. To get the `TsWebExtension` instance with `webAccessibleResources`
  param, use the new `createTsWebExtension` method.

[1.0.0]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v1.0.0

## [0.4.9] - 2023-11-30

### Added

- API `settings.debugScriptlets` property and `setDebugScriptlets()` method for
its setting [#2584].

### Changed

- Updated `@adguard/tsurlfilter` to `v2.2.7`.
- Updated `@adguard/scriptlets` to `v1.9.101`.

[#2584]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2584

[0.4.9]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.4.9

## [0.4.8] - 2023-11-29

### Changed

- `MessageHandlerMV2` type is exported now.

[0.4.8]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.4.8

## [0.4.7] - 2023-11-21

### Fixed

- Fix cosmetic apply logging.

[0.4.7]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.4.7

## [0.4.6] - 2023-11-16

### Added

- Support for `POST` requests to `$removeparam` modifier [#99].

### Fixed

- Fix 'storage not initialized' error on extension install.

[#99]: https://github.com/AdguardTeam/tsurlfilter/issues/99

[0.4.6]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.4.6

## [0.4.5] - 2023-11-15

### Added

- Allowlist wildcard support [#2020].

### Changed

- Updated `@adguard/tsurlfilter` to `v2.2.6`.
- Updated `@adguard/scriptlets` to `v1.9.96`.

[#2020]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2020

[0.4.5]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.4.5

## [0.4.4] - 2023-11-13

### Changed

- Updated `@adguard/tsurlfilter` to `v2.2.5`.
- Updated `@adguard/scriptlets` to `v1.9.91`.

[0.4.4]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.4.4

## [0.4.3] - 2023-11-09

### Fixed

- Ads displayed on the first visit on 'pikabu.ru' [#2571].
- Memory leaks associated with storing refs to old filter lists in context of frames.

### Added

- Added new `ExtensionStorage`, `PersistentValueContainer`,
  `createExtensionStorageDecorator` interfaces and for restoring data in
  event-driven background scripts [#2286].

[#2571]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2571

[#2286]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2286

[0.4.3]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.4.3

## [0.4.2] - 2023-10-17

### Fixed

- Removed grouping rules with `\r\n` for extended css rules which cause its
  error in MV3.

[0.4.2]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.4.2

## [0.4.1] - 2023-10-13

### Changed

- Updated `@adguard/tsurlfilter` to `v2.2.1`.
- Updated `@adguard/scriptlets` to `v1.9.83`.

[0.4.1]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.4.1

## [0.4.0] - 2023-10-12

### Added

- Support for $badfilter rules to Declarative Converter.

[0.4.0]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.4.0

## [0.3.22] - 2023-10-02

### Fixed

- AdGuard v4.2.168 is not working in the Firefox after update [#2501].

[#2501]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2501

[0.3.22]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.22

## [0.3.21] - 2023-09-25

### Fixed

- Incorrect logging and applying of `$removeheader` allowlist rules.
- Proceed anyway is not working for more than two level domains [#2497].

[#2497]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2497

[0.3.21]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.21

## [0.3.20] - 2023-09-19

### Added

- CSP `trusted-types` directive modifying for response headers [#2068].

[#2068]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2068

[0.3.20]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.20

## [0.3.19] - 2023-09-18

### Fixed

- `$csp`, `$removeparam` and `$removeheader` allowlist rules not being published
  as filtering log events.
- Fixed cosmetic rules injection into a cached subdocument [#2420],
  [#2190], [#2328].

[#2190]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2190

[#2328]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2328

[#2420]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2420

[0.3.19]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.19

## [0.3.18] - 2023-09-13

### Fixed

- Do not block a tab loading by `$popup` modifier rule on direct url navigation
  [#2449].

[#2449]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2449

[0.3.18]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.18

## [0.3.17] - 2023-09-13

### Added

- New `requestUrl`, `frameUrl` and `requestType` fields in `ApplyBasicRuleEvent`.

### Fixed

- Tab title is now correctly updated on url change when the document does not
  provide it itself [#2428].
- Filter id for StealthApi to display Stealth Mode cookie events in the
  Filtering Log properly [#2487].

[#2428]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2428

[#2487]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2487

[0.3.17]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.17

## [0.3.16] - 2023-09-05

### Fixed

- Do not apply cosmetic rules to extension pages while fallback processing
  [#2459].

[0.3.16]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.16

## [0.3.15] - 2023-09-05

### Fixed

- Redirects are not included into tab's blocked requests count [#2443].

[#2443]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2443

[0.3.15]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.15

## [0.3.14] - 2023-09-05

### Fixed

- Domains from the allowlist are not properly escaped before being passed into
  the regular expression rules [#2461].
- Cosmetic rule false positive applying when tab context changed while injection
  retry [#2459].

[#2459]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2459

[#2461]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2461

[0.3.14]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.14

## [0.3.13] - 2023-08-25

### Changed

- Updated `@adguard/tsurlfilter` to `v2.1.11`.
- Updated `@adguard/scriptlets` to `v1.9.72`.

[0.3.13]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.13

## [0.3.12] - 2023-08-23

### Fixed

- Incorrect order of `onBeforeRequest` handlers.
- Blocked csp reports do not increment the blocked requests counter.

[0.3.12]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.12

## [0.3.11] - 2023-08-21

### Changed

- Updated `@adguard/tsurlfilter` to `v2.1.10`.
- Updated `@adguard/scriptlets` to `v1.9.70`.

### Fixed

- Applying `$cookie` rules on the content-script side.

[0.3.11]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.11

## [0.3.10] - 2023-08-18

### Added

- Blocking third-party requests with `csp_report` content-type.
- Handling discarded tabs replacement on wake up.

### Fixed

- Do not expose JS rules in global page scope.

[0.3.10]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.10

## [0.3.9] - 2023-08-10

### Changed

- Updated `@adguard/tsurlfilter` to `v2.1.7`.

[0.3.9]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.9

## [0.3.8] - 2023-08-04

### Changed

- Updated `@adguard/tsurlfilter` to `v2.1.6`.
- Updated `@adguard/scriptlets` to `v1.9.62`.

[0.3.8]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.8

## [0.3.7] - 2023-07-21

### Changed

- Updated `@adguard/tsurlfilter` to `v2.1.5`.
- Updated `@adguard/scriptlets` to `v1.9.57`.

## Fixed

- Duplicate `eventId` of filtering events.

[0.3.7]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.7

## [0.3.6] - 2023-07-11

### Fixed

- Rules with the `$popup` modifier were ignored and showed an incorrect dummy
  page instead of closing the tab.
- In some cases, rules with the `$document` modifier did not show the dummy page.

[0.3.6]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.6

## [0.3.5] - 2023-07-11

### Fixed

- Cosmetic rule logging

[0.3.5]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.5

## [0.3.4] - 2023-07-11

### Added

- Support of $elemhide, $specifichide and $generichide modifiers.

### Fixed

- Cosmetic rule matching for frames loaded from the service worker cache.

[0.3.4]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.4

## [0.3.3] - 2023-06-19

### Changed

- Updated `@adguard/tsurlfilter` to `v2.1.2`.

[0.3.3]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.3

## [0.3.2] - 2023-06-14

### Changed

- Updated `@adguard/tsurlfilter` to `v2.1.1`.

[0.3.2]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.2

## [0.3.1] - 2023-06-15

### Added

- new `DocumentApi` class, with frame-matching taking into account the state of the `Allowlist`.

### Changed

- `AllowlistApi` renamed to `Allowlist`. `matchFrame` method moved to `DocumentApi` class.

### Fixed

- Extra headers handling in chromium browsers.
- Filtering log update on cached pages reload.

[0.3.1]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.1

## [0.3.0] - 2023-06-14

### Changed

- Updated `@adguard/tsurlfilter` to `v2.1.0`.

[0.3.0]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.3.0

## [0.2.8] - 2023-06-13

### Changed

- `logLevel` configuration property type to `string`.
- `RequestContextStorage` to extend from `Map`.

### Deleted

- `record`, `find` methods and `onUpdate`, `onCreate` events from
  `RequestContextStorage`.

[0.2.8]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.2.8

## [0.2.6] - 2023-06-06

### Changed

- Updated `@adguard/scriptlets` to `v1.9.37`.

[0.2.6]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.2.6

## [0.2.5] - 2023-06-06

### Fixed

- Tab context matching for pages with cached document page.

[0.2.5]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.2.5

## [0.2.4] - 2023-06-05

### Fixed

- `hideRequestInitiatorElement` function return more accurate css selector `src`
  attribute value for first party requests.
- `ElementCollapser` inject styles via isolated style tag.

[0.2.4]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.2.4

## [0.2.3] - 2023-05-31

### Fixed

- Script rules injection.

[0.2.3]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.2.3

## [0.2.2] - 2023-05-29

### Added

- New `logLevel` optional property for MV2 configuration to control logging
  levels.

### Changed

- `verbose` MV2 configuration property is now optional.

[0.2.2]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.2.2

## [0.2.0] - 2023-05-23

### Added

- New MV2 API methods for configuration updating without engine restart:
  `setFilteringEnabled`,`setCollectHitStats`, `setStealthModeEnabled`,
  `setSelfDestructFirstPartyCookies`, `setSelfDestructThirdPartyCookies`,
  `setSelfDestructThirdPartyCookies`, `setSelfDestructFirstPartyCookiesTime`,
  `setSelfDestructThirdPartyCookiesTime`, `setHideReferrer`,
  `setHideSearchQueries`, `setBlockChromeClientData`, `setSendDoNotTrack`,
  `setBlockWebRTC`.

### Changed

- Updated `getMessageHandler` API method return type.
- `start`, `update` and `setFilteringEnabled` API methods now flush browser
  in-memory cache. This change improve filtering on pages with service workers
  and inactive tabs.

### Fixed

- Stealth module correctly sets browser privacy network settings based on
`blockWebRTC`, `stealthModeEnabled` and `filteringEnabled` options.
- unique `eventId` for `FilteringEventType.JsInject` events.

[0.2.0]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.2.0

## [0.1.4] - 2023-04-18

### Fixed

- The cookies lifetime in Stealth Mode does not apply after the engine is
  started, only after restarting.
- Incorrect work of $cookie rules: incorrect parsing of `domain` and `path`
  fields leads to errors when using browser.cookies and creating multiple
  "child" cookies for each sub-request with a more specific path, e.g. request
  to '/assets/script.js' from '/' will create a new cookie for '/assets/'.
- Wrong expirationDate for cookies.

### Added

- Applying $cookie rules to the requests before sending them to a server in the
  onBeforeSendHeaders hook.

[0.1.4]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.1.4

## [0.1.3] - 2023-04-17

### Changed

- Updated `@adguard/extended-css` to `v2.0.52`
- Updated `@adguard/scriptlets` to `v1.9.7`

[0.1.3]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.1.3

## [0.1.2] - 2023-04-11

### Added

- Separated export of CssHitsCounter to better tree shaking on external
  applications.

[0.1.2]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.1.2

## [0.1.1] - 2023-04-04

## Changed

- Improved injection algorithm for cosmetic rules (js and css).
  logic using the Finite State Machine to avoid double injections with
  the previous boolean flag scheme.
- Set injectScript and injectCss error to debug level.

[0.1.1]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.1.1

## [0.1.0] - 2023-03-31

### Changed

- Updated tsurlfilter to v2.0.

[0.1.0]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.1.0

## [0.0.68] - 2023-03-24

### Added

- Described event flow scheme for webRequestModule.

### Fixed

- Changed enums according to our guideline.

[0.0.68]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.0.68

## [0.0.67] - 2023-03-23

### Fixed

- Order of injecting scripts with setDomSignal.

[0.0.67]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.0.67

## [0.0.66] - 2023-03-14

### Fixed

- Executing of html and replace rules for Firefox

[0.0.66]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.0.66

## [0.0.65] - 2023-03-10

### Fixed

- Executing of scriptlets rules for Firefox

### Added

- Stricter checking for non local JS rules for Firefox AMO

[0.0.65]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.0.65

## [0.0.64] - 2023-03-10

### Changed

- Updated `@adguard/scriptlets` to `v1.9.1`

### Fixed

- Cosmetic rules applying if CssHitsCounter is disabled
- Mark requests from navigation from address bar as first-party requests.

[0.0.64]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.0.64

## [0.0.63] - 2023-02-17

### Changed

- Updated `@adguard/extended-css` to `v2.0.51`

[0.0.63]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.0.63

## [0.0.62] - 2023-02-10

### Added

- Added cosmetic rules injection in tabs opened before API initialization

### Fixed

- Fix js rule injections via WebRequest API.
- Fix extended css rule injections via content-script on API initialization.
  Content-script wait for engine start before processing.
- Fix css hit counter enabling.
  Now, it is initialized only if `collectHitStats` configuration prop is true.

[0.0.62]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.0.62

## [0.0.61] - 2023-02-07

### Added

- Support for browser.windows.onWindowFocusChanged to make browser.tabs.onActivated
  event calls work better when focus changes between windows.

[0.0.61]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.0.61

## [0.0.60] - 2023-02-03

### Changed

- Updated `@adguard/extended-css` to `v2.0.49`

[0.0.60]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.0.60

## [0.0.59] - 2023-02-03

### Changed

- Updated `@adguard/extended-css` to `v2.0.45`

[0.0.59]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.0.59

## [0.0.58] - 2023-02-02

### Fixed

- When opens phishing or malware site, extension will open new tab in the
  standard window with information about blocked domain and possible actions.

[0.0.58]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.0.58

## [0.0.57] - 2023-01-20

### Changed

- The order of imports to avoid side effects on tree shaking.
- Made load of AdGuard Assistant lazy to decrease size of content-script bundle.

### Fixed

- Fixed allowlist api rule generation and matching

[0.0.57]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.0.57

## [0.0.56] - 2023-01-12

### Fixed

- Fixed simultaneous increase of package numbers for packages tsurlfilter and
  tswebextension in the branch epic
- Fixed working with DNT-headers and GPC from stealth mode
- Fixed js and css injection error handling
- Fixed request events initialization
- Fixed memory leaks in the tests

### Removed

- Previous url from tab's metadata

### Changes

- Merged changed from master branch

[0.0.56]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.0.56

## [0.0.47] - 2022-12-27

### Fixed

- Allowlist rule priority

### Added

- Simple support of `$jsonprune`

### Removed

- Unused injectExtCss method in the CosmeticAPI

[0.0.47]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.0.47

## [0.0.45] - 2022-12-26

### Fixed

- Recovered work of the blocking scriptlets `click2load.html`

### Changed

- Updated `@adguard/scriptlets` to `v1.7.20`

[0.0.45]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.0.45

## [0.0.44] - 2022-12-23

### Added

- Merged changed from master branch

### Removed

- Support of $webrtc rules

### Fixed

- JS and CSS injection error handling
- Request events initialization

[0.0.44]: https://github.com/AdguardTeam/tsurlfilter/releases/tag/tswebextension-v0.0.44
