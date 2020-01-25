import { isBackend, createCompletionList } from '../util';
import frontend from './frontend.json';
import backend from './backend.json';

const listFrontend = createCompletionList(frontend);
const listBackend = createCompletionList(backend);

export const modules = {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (/^import\s/.test(prefix)) {
      return isBackend(doc.uri.path) ? listBackend : listFrontend;
    }
  },
};
