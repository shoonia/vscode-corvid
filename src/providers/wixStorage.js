import { createCompletionList, K } from './util';

const list = createCompletionList([
  {
    name: 'getItem',
    kind: K.Method,
    snippet: 'getItem(${1:key});',
    detail: 'function getItem(key: string): string',
    docs: 'Gets an item from local, session, or memory storage.',
  },
  {
    name: 'setItem',
    kind: K.Method,
    snippet: 'setItem(${1:key}, ${2:value});',
    detail: 'function setItem(key: string, value: string): void',
    docs: 'Stores an item in local, session, or memory storage.',
  },
  {
    name: 'removeItem',
    kind: K.Method,
    snippet: 'removeItem(${1:key});',
    detail: 'function removeItem(key: string): void',
    docs: 'Removes an item from local, session, or memory storage.',
  },
  {
    name: 'clear',
    kind: K.Method,
    snippet: 'clear();',
    detail: 'function clear(): void',
    docs: 'Removes all items from local, session, or memory storage.',
  },
]);

export default {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (/(local|session|memory)\.$/.test(prefix)) {
      return list;
    }
  },
};
