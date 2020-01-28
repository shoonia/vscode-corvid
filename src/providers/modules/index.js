import { join } from 'path';
import { existsSync } from 'fs';
import { workspace } from 'vscode';

import backend from './_backend.json';
import frontend from './_frontend.json';
import site from './_site.json';
import {
  isBackend,
  createCompletionList,
  createModuleName,
} from '../../util';

const corvidPackage = (() => {
  try {
    const [root] = workspace.workspaceFolders;
    const path = join(root.uri.fsPath, 'src/corvid-package.json');

    if (existsSync(path)) {
      const { dependencies } = require(path);

      return Object
        .entries(dependencies)
        .map(([name, version]) => {
          const pkg = createModuleName(name);

          return {
            name: `import ${pkg} from '${name}'`,
            kind: 8,
            snippet: `${pkg} from '${name}';`,
            detail: `${name} v${version}`,
            docs: 'Corvid Package Manager',
          };
        });
    }
  } catch (error) {/**/ }

  return [];
})();

const common = createCompletionList(site.concat(corvidPackage));
const frontendList = createCompletionList(frontend).concat(common);
const backendList = createCompletionList(backend).concat(common);

export const modules = {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (/^import\s/.test(prefix)) {
      return isBackend(doc.uri.path) ? backendList : frontendList;
    }
  },
};
