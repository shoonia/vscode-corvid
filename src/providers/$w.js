import { createCompletionList, isBackend, K } from './util';

const list = createCompletionList([
  { name: 'at', kind: K.Method },
  { name: 'onReady', kind: K.Method },
]);

const listElement = createCompletionList([
  { name: 'rendered', kind: K.Property },
  { name: 'global', kind: K.Property },
  { name: 'id', kind: K.Property },
  { name: 'parent', kind: K.Property },
  { name: 'type', kind: K.Property },
  { name: 'onMouseIn', kind: K.Method },
  { name: 'onMouseOut', kind: K.Method },
  { name: 'scrollTo', kind: K.Method },
  { name: 'onViewportEnter', kind: K.Method },
  { name: 'onViewportLeave', kind: K.Method },
]);

export default {
  provideCompletionItems(doc, position) {
    if (isBackend(doc.uri.path)) return;

    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('$w.')) {
      return list;
    }

    if (/\$w\(['"]#[a-z\d]+['"]\)\./i.test(prefix)) {
      return listElement;
    }
  },
};
