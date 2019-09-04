import { createCompletionList, isBackend, K } from './util';

const list = createCompletionList([
  {
    name: 'at',
    kind: K.Method,
    snippet: 'at($1);',
    detail: 'function at(context: EventContext): $w',
    docs: 'Gets a selector function for a specific context.',
  },
  {
    name: 'onReady',
    kind: K.Method,
    snippet: 'onReady(function () {$1});',
    detail: 'function onReady(initFunction: ReadyHandler): void \n\ncallback ReadyHandler(): Promise<void>',
    docs: 'Sets the function that runs when all the page elements have finished loading.',
  },
]);

const listElement = createCompletionList([
  {
    name: 'rendered',
    kind: K.Property,
    detail: 'get rendered(): boolean',
    dosc: 'Indicates if an element is currently displayed.',
  },
  {
    name: 'global',
    kind: K.Property,
    detail: 'get global(): boolean',
    docs: 'Indicates if an element appears on all pages or only on the current page.',
  },
  {
    name: 'id',
    kind: K.Property,
    detail: 'get id(): string',
    docs: 'Gets the element\'s ID.',
  },
  {
    name: 'parent',
    kind: K.Property,
    detail: 'get parent(): Node',
    docs: 'Gets the element\'s parent element.',
  },
  {
    name: 'type',
    kind: K.Property,
    detail: 'get type(): string',
    docs: 'Gets the element\'s type.',
  },
  {
    name: 'onMouseIn',
    kind: K.Method,
    snippet: 'onMouseIn((event) => {$1});',
    detail: 'function onMouseIn(handler: MouseEventHandler): Element\n\ncallback MouseEventHandler(event: MouseEvent, $w: $w): void',
    docs: 'Adds an event handler that runs when the mouse pointer is moved onto the element.',
  },
  {
    name: 'onMouseOut',
    kind: K.Method,
    snippet: 'onMouseOut((event) => {$1});',
    detail: 'function onMouseIn(handler: MouseEventHandler): Element\n\ncallback MouseEventHandler(event: MouseEvent, $w: $w): void',
    docs: 'Adds an event handler that runs when the mouse pointer is moved off of the element.',
  },
  {
    name: 'scrollTo',
    kind: K.Method,
    snippet: 'scrollTo()',
    detail: 'function scrollTo(): Promise<void>',
    docs: 'Scrolls the page to the element using an animation.',
  },
  {
    name: 'onViewportEnter',
    kind: K.Method,
    snippet: 'onViewportEnter((event) => {$1});',
    detail: 'function onViewportEnter(handler: EventHandler): Element\n\ncallback EventHandler(event: Event, $w: $w): void',
    docs: 'Adds an event handler that runs when an element is displayed in the viewable part of the current window.',
  },
  {
    name: 'onViewportLeave',
    kind: K.Method,
    snippet: 'onViewportLeave((event) => {$1});',
    detail: 'function onViewportLeave(handler: EventHandler): Element\n\ncallback EventHandler(event: Event, $w: $w): void',
    docs: 'Adds an event handler that runs when an element is no longer displayed in the viewable part of the current window.',
  },
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
