# Corvid

[![extension version](https://vsmarketplacebadge.apphb.com/version/shoonia.vscode-corvid.svg)](https://marketplace.visualstudio.com/items?itemName=shoonia.vscode-corvid)


The extension to work with [corvid-cli](https://github.com/wix-incubator/corvid). Highlighting `.jsw`, `.wix`, support `jobs.config`, autocomplete selectors, snippets.

<img src="https://raw.githubusercontent.com/shoonia/vscode-corvid/prod/icons/exemple-1.png" alt="vscode-corvid" width="500" />

## Settings Options
This extension contributes the following variables to the [settings](https://code.visualstudio.com/docs/getstarted/settings):

* `corvid.autocomplete.$w` - Enable/disable autocomplete for `$w()` selectors.
* `corvid.autocomplete.import` - Enable/disable autocomplete for import Wix modules

## Snippets List

| Snippet | Content
| ------- | --------------------------------------------- |
| $→      | `$w('')`
| iww→    | `import wixWindow from 'wix-window';`
| iwd→    | `import wixData from 'wix-data';`
| iwl→    | `import wixLocation from 'wix-location';`
| iwu→    | `import wixUsers from 'wix-users';`
| iwub→   | `import wixUsers from 'wix-users-backend';`
| iwf→    | `import { fetch, ... } from 'wix-fetch';`
| iws→    | `import { local, ... } from 'wix-storage';`
| ihf→    | `import { ok, ... } from 'wix-http-functions';`
| iwr→    | `import { ok, ... } from 'wix-router';`
