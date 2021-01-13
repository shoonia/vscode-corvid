# Velo

[![extension version](https://vsmarketplacebadge.apphb.com/version/shoonia.vscode-corvid.svg)](https://marketplace.visualstudio.com/items?itemName=shoonia.vscode-corvid)

The extension to work with [corvid-cli](https://github.com/wix-incubator/corvid). Highlighting `.jsw`, `.wix`, support `jobs.config`, autocomplete, snippets.

<img src="https://raw.githubusercontent.com/shoonia/vscode-corvid/master/icons/velo.png" alt="vscode-corvid" width="150" align="right" />

## Settings Options
This extension contributes the following variables to the [settings](https://code.visualstudio.com/docs/getstarted/settings):

| Name                         | Description                                 | Default
| ---------------------------  | ------------------------------------------- | ------- |
| `velo.autocomplete.$w`       | on/off autocomplete for `$w()` selectors.   | false
| `velo.autocomplete.import`   | on/off autocomplete for import Wix modules. | true
| `velo.autocomplete.jsw`      | on/off autocomplete for Web Modules.        | true

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
| jsw→    | `import { ... } from 'backend';`
