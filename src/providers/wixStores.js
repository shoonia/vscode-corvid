import { createCompletionList, isBackend, K } from './util';

const availability = {
  name: 'getProductOptionsAvailability',
  kind: K.Method,
  snippet: 'getProductOptionsAvailability(${1:productId}, ${2:choices})',
  detail: 'function getProductOptionsAvailability(productId: string, choices: StoreProductChoices): Promise<ProductOptionsAvailability>',
  docs: 'Gets the availability of a product based on the specified option choices.',
};

const listFronend = createCompletionList([availability]);

const listBackend = createCompletionList([
  availability,
  {
    name: 'getCurrentCart',
    kind: K.Method,
    snippet: 'getCurrentCart()',
    detail: 'function getCurrentCart(): Promise<Cart>',
    docs: 'Gets the current site visitor\'s shopping cart.',
  },
]);

export default {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixStores.')) {
      return isBackend(doc.uri.path) ? listBackend : listFronend;
    }
  },
};
