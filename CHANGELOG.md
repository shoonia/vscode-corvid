# Change Log

## v4.0.0
* Remove support of [corvid-cli](https://github.com/wix-incubator/corvid)
* Add support for [velo-filesystem](https://github.com/shoonia/velo-filesystem)

## v3.4.0
* Added `wix-events-backend` module to import completion
* Improve autocomplete for `wix-secrets-backend` module imports

## v3.3.0
* Enable autocomplete for `$w()` by default.

## v3.2.0
* Added `wix-pricing-plans-backend` module to import completion.

## v3.1.0
* Added `wix-bookings-backend` module to import completion.

## v3.0.0
* Rename to Velo from Corvid

## v2.2.0
* Updated the links to documentation

## v2.1.0
* Improve autocomplete for import npm packages and wixMarketing module

## v2.0.0
* Migration source code to TypeScript from JavaScript

## v1.17.0
* Disabled autocomplete for `$w()` selectors by default. The [corvid-types](https://github.com/wix-incubator/corvid-types) work well now, and this feature duplicates the completion. You can enable autocomplete in extension [settings](https://code.visualstudio.com/docs/getstarted/settings).

## v1.16.0
* Added `wix-bookings` module to import completion.

## v1.15.0
* Added `wix-realtime`, `wix-realtime-backend` modules to import completion.

## v1.14.0
* Added `wix-animations` and `wix-secrets-backend` modules to import completion.

## v1.13.0
* Added autocomplete for Corvid web modules (backend files)
* Fixed pattern for `functionName` property in `jobs.config` schema

## v1.12.0
* Added autocomplete for external packages
* Fixed mutually exclusive properties `time` and `cronExpression` in `jobs.config`
* Fixed `jobs.config` schema, the top object shouldn't have additional properties

## v1.11.0
* Extended `jobs.config` schema. Added `cronExpression` property to `executionConfig`.
* Fixed `time` pattern for `jobs.config` schema.

## v1.10.0
* Added `wix-search` module to import completion.

## v1.9.0
* Added `wix-chat-backend` and `wix-http-functions` modules to import completion.
* Added links to the documentation.

## v1.8.0
* Added `wix-events` module to import completion.

## v1.7.0
* Added `wix-router` module to import completion.

## v1.5.0
* Added `wix-seo` module to import completion.

## v1.4.0
* Updated scheme for `jobs.config`

## v1.3.0
* Added license (MIT)
* Fixed trigger for importing modules

## v1.2.0
* Added `wix-media-backend` & `wix-captcha-backend` modules to import completion.
* Fixed provider trigger for modules completion
* Fixed using string literals in `$w()` selectors

## v1.1.0
* Added extension configuration

## v1.0.0
* Autocomplete for selectors `$w()` (for Corvid projects)
* Validation `jobs.config` file.
* Wix module import snippets
* Highlighting `.jsw`, `.wix` and `jobs.config` files.
