import { createCompletionList, K } from './util';

const list = createCompletionList([
  {
    name: 'baseUrl',
    kind: K.Property,
    detail: 'get baseUrl(): string',
    docs: 'Gets the base URL of the page.',
  },
  {
    name: 'path',
    kind: K.Property,
    detail: 'get path(): Array<string>',
    docs: 'Gets the path of the page\'s URL.',
  },
  {
    name: 'prefix',
    kind: K.Property,
    detail: 'get prefix(): string',
    docs: 'Gets the prefix of a dynamic page\'s or router page\'s URL.',
  },
  {
    name: 'protocol',
    kind: K.Property,
    detail: 'get protocol(): string',
    docs: 'Gets the protocol of the page\'s URL.',
  },
  {
    name: 'query',
    kind: K.Property,
    detail: 'get query(): Object',
    docs: 'Gets an object that represents the query segment of the page\'s URL.',
  },
  {
    name: 'url',
    kind: K.Property,
    detail: 'get url(): string',
    docs: 'Gets the full URL of the current page.',
  },
  {
    name: 'onChange',
    kind: K.Method,
    snippet: 'onChange((${1:location}) => {$2});',
    detail: 'function onChange(handler: LocationChangeHandler): void\n\ncallback LocationChangeHandler(event: Location): void',
    docs: 'Adds an event handler that runs when an application page\'s URL changes.',
  },
  {
    name: 'to',
    kind: K.Method,
    snippet: 'to($1);',
    detail: 'function to(url: string): void',
    docs: 'Directs the browser to navigate to the specified URL.',
  },
]);

export default {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixLocation.')) {
      return list;
    }
  },
};
