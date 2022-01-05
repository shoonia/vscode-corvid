# Velo

[![Build for Velo by Wix](https://img.shields.io/badge/Built%20for-Velo%20by%20Wix-3638f4)](https://wix.com/velo)
[![extension version](https://vsmarketplacebadge.apphb.com/version/shoonia.vscode-corvid.svg)](https://marketplace.visualstudio.com/items?itemName=shoonia.vscode-corvid)

The extension to work with [velo-filesystem](https://github.com/shoonia/velo-filesystem) chrome extension. Highlighting `.jsw`, support `jobs.config`, autocomplete, snippets.

Install: [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=shoonia.vscode-corvid)

<img src="https://raw.githubusercontent.com/shoonia/vscode-corvid/master/icons/velo.png" alt="Velo vscode" width="150" align="right" />

## Settings Options

This extension contributes the following variables to the [settings](https://code.visualstudio.com/docs/getstarted/settings):

| Name                         | Description                                 | Default
| ---------------------------  | ------------------------------------------- | ------- |
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
