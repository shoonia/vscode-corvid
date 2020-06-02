import { CompletionItemProvider } from 'vscode';
import { existsSync, readFileSync } from 'fs';

import backend from './_backend.json';
import frontend from './_frontend.json';
import site from './_site.json';
import {
  isBackend,
  createCompletionList,
  resolve,
  isObject,
  DescribeCompletionItem,
} from '../../util';

const createModuleName = (str: string): string => str.replace(
  /([\W][\w]?)/g,
  (s) => s.replace(/\W/, '').toUpperCase(),
);

const corvidPackage: DescribeCompletionItem[] = (() => {
  try {
    const path = resolve('src/corvid-package.json');

    if (existsSync(path)) {
      const { dependencies } = JSON.parse(readFileSync(path, 'utf8'));

      if (isObject(dependencies)) {
        return Object.entries(dependencies).map(([name, version]) => {
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
    }
  } catch { /**/ }

  return [];
})();

const common = createCompletionList([...site, ...corvidPackage]);
const frontendList = createCompletionList(frontend).concat(common);
const backendList = createCompletionList(backend).concat(common);

export const modules: CompletionItemProvider = {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (/^import\s/.test(prefix)) {
      return isBackend(doc.uri.path) ? backendList : frontendList;
    }
  },
};
