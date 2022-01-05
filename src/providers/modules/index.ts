import type { CompletionItemProvider } from 'vscode';

import backend from './_backend.json';
import frontend from './_frontend.json';
import site from './_site.json';
import { isBackend, createCompletionList } from '../../util';

const common = createCompletionList(site);
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
