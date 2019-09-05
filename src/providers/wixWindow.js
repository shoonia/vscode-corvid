import { createCompletionList, K } from './util';

const windowList = createCompletionList([
  {
    name: 'browserLocale',
    kind: K.Property,
    detail: 'get browserLocale(): string',
    docs: 'Gets the locale of the site visitor\'s browser.',
  },
  {
    name: 'formFactor',
    kind: K.Property,
    detail: 'get formFactor(): string',
    docs: 'Gets what kind of device is being used to view the page. The formFactor property gets one of: "Desktop", "Mobile", "Tablet"',
  },
  {
    name: 'referrer',
    kind: K.Property,
    detail: 'get referrer(): string',
    docs: 'Gets the HTTP referrer header field.',
  },
  {
    name: 'viewMode',
    kind: K.Property,
    detail: 'get viewMode(): string',
    docs: 'Gets which mode the site is currently being viewed in. "Preview" or "Site"',
  },
  {
    name: 'getBoundingRect',
    kind: K.Method,
    snippet: 'getBoundingRect()',
    detail: 'function getBoundingRect(): Promise<WindowSizeInfo>',
    docs: 'Returns information about the window.',
  },
  {
    name: 'getCurrentGeolocation',
    kind: K.Method,
    snippet: 'getCurrentGeolocation()',
    detail: 'function getCurrentGeolocation(): Promise<Object>',
    docs: 'Returns the current geolocation of the user.',
  },
  {
    name: 'getRouterData',
    kind: K.Method,
    snippet: 'getRouterData();',
    detail: 'function getRouterData(): Object',
    docs: 'Returns the data that a router passed to the page in its response.',
  },
  {
    name: 'openLightbox',
    kind: K.Method,
    snippet: 'openLightbox(${1:name})',
    detail: 'function openLightbox(name: string, [data: Object]): Promise<Object>',
    docs: 'Opens a lightbox and optionally passes it the given data.',
  },
  {
    name: 'openModal',
    kind: K.Method,
    snippet: 'openModal(${1:url})',
    detail: 'function openModal(url: string, options: OpenModalOptions): Promise<void>',
    docs: 'Opens a modal window that displays the specified web page.',
  },
  {
    name: 'postMessage',
    kind: K.Method,
    snippet: 'postMessage($1)',
    detail: 'function postMessage(message: Object, [target: string]): Promise<Object>',
    docs: 'Sends a message to the page\'s parent.',
  },
  {
    name: 'scrollBy',
    kind: K.Method,
    snippet: 'scrollBy(${1:x}, ${2:y})',
    detail: 'function scrollBy(x: number, y: number): Promise<void>',
    docs: 'Scrolls the page by a given number of pixels.',
  },
  {
    name: 'scrollTo',
    kind: K.Method,
    snippet: 'scrollTo(${1:x}, ${2:y})',
    detail: 'function scrollTo(x: number, y: number, [options: ScrollToOptions]): Promise<void>',
    docs: 'Scrolls the page to a specific location.',
  },
  {
    name: 'trackEvent',
    kind: K.Method,
    snippet: 'trackEvent(${1:eventName}, ${2:parameters});',
    detail: 'function trackEvent(eventName: string, parameters: AddPaymentInfoEvent | AddProductImpressionEvent | AddToCartEvent | ClickProductEvent | CustomEvent | InitiateCheckoutEvent | PurchaseEvent | RemoveFromCartEvent | ViewContentEvent): void',
    docs: 'Sends a tracking event to external analytics tools.',
  },
  {
    name: 'rendering',
    kind: K.Property,
    docs: 'The Rendering API is used to control when code is run as a page is being loaded.',
  },
  {
    name: 'multilingual',
    kind: K.Property,
    docs: 'The Multilingual API is used when working with the languages in a multilingual site.',
  },
  {
    name: 'lightbox',
    kind: K.Property,
  },
]);

const renderingList = createCompletionList([
  {
    name: 'env',
    kind: K.Property,
    detail: 'get env(): string',
    docs: 'Gets the current environment the rendering process is running in. The env property returns "backend" when rendering on the server and "browser" when rendering on the client.',
  },
]);

const multilingualList = createCompletionList([
  {
    name: 'isEnabled',
    kind: K.Property,
    detail: 'get isEnabled(): boolean',
    docs: 'Gets whether the site has been set up to be shown in multiple languages.',
  },
  {
    name: 'siteLanguages',
    kind: K.Property,
    detail: 'get siteLanguages(): Array<SiteLanguage>',
    docs: 'Gets information about the site\'s languages.',
  },
  {
    name: 'currentLanguage',
    kind: K.Property,
    detail: 'get currentLanguage(): string',
    docs: 'Sets or gets the site\'s current display language.',
  },
]);

const lightboxList = createCompletionList([
  {
    name: 'close',
    kind: K.Method,
    snippet: 'close($1);',
    detail: 'function close([data: Object]): void',
    docs: 'Closes the lightbox.',
  },
  {
    name: 'getContext',
    kind: K.Method,
    snippet: 'getContext()',
    detail: 'function getContext(): Object',
    docs: 'Returns the data object that was passed to a lightbox.',
  },
]);

export default {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixWindow.')) {
      return windowList;
    }

    if (prefix.endsWith('.rendering.')) {
      return renderingList;
    }

    if (prefix.endsWith('.multilingual.')) {
      return multilingualList;
    }

    if (prefix.endsWith('.lightbox.')) {
      return lightboxList;
    }
  },
};
