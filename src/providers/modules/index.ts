import type { CompletionItemProvider } from 'vscode';
import { existsSync, readFileSync } from 'fs';

import backend from './_backend.json';
import frontend from './_frontend.json';
import site from './_site.json';
import {
  type IDescribeCompletionItem,
  isBackend,
  createCompletionList,
  resolve,
  isObject,
} from '../../util';

const createModuleName = (str: string): string => str.replace(
  /([\W][\w]?)/g,
  (s) => s.replace(/\W/, '').toUpperCase(),
);

const veloPackages: IDescribeCompletionItem[] = (() => {
  try {
    const path = resolve('src', 'corvid-package.json');

    if (existsSync(path)) {
      const { dependencies } = JSON.parse(readFileSync(path, 'utf8'));

      if (isObject(dependencies)) {
        return Object.entries(dependencies).map(([name, version]) => {
          const pkg = createModuleName(name);

          return {
            name: `import ${pkg} from '${name}'`,
            kind: 8,
            snippet: ['${1:', pkg, `} from '${name}$2';`].join(''),
            detail: `${name} v${version}`,
            docs: 'Package Manager',
          };
        });
      }
    }
  } catch { /**/ }

  return [];
})();

const common = createCompletionList([...site, ...veloPackages]);
const frontendList = createCompletionList(frontend).concat(common);
const backendList = createCompletionList(backend).concat(common);

export const modules: CompletionItemProvider = {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substring(0, position.character);

    if (/^import\s/.test(prefix)) {
      return isBackend(doc.uri.path) ? backendList : frontendList;
    }
  },
};
