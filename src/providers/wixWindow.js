import { createCompletionList, K } from './util';

const windowList = createCompletionList([
  { name: 'browserLocale', kind: K.Property },
  { name: 'formFactor', kind: K.Property },
  { name: 'referrer', kind: K.Property },
  { name: 'viewMode', kind: K.Property },
  { name: 'getBoundingRect', kind: K.Method },
  { name: 'getCurrentGeolocation', kind: K.Method },
  { name: 'getRouterData', kind: K.Method },
  { name: 'openLightbox', kind: K.Method },
  { name: 'openModal', kind: K.Method },
  { name: 'postMessage', kind: K.Method },
  { name: 'scrollBy', kind: K.Method },
  { name: 'scrollTo', kind: K.Method },
  { name: 'trackEvent', kind: K.Method },
  { name: 'rendering', kind: K.Property }, // => renderingList
  { name: 'multilingual', kind: K.Property }, // => multilingualList
  { name: 'lightbox', kind: K.Property }, // => lightboxList
]);

const renderingList = createCompletionList([
  { name: 'env', kind: K.Property },
]);

const multilingualList = createCompletionList([
  { name: 'currentLanguage', kind: K.Property },
  { name: 'isEnabled', kind: K.Property },
  { name: 'siteLanguages', kind: K.Property },
]);

const lightboxList = createCompletionList([
  { name: 'close', kind: K.Method },
  { name: 'getContext', kind: K.Method },
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
