import { createCompletionList, K } from './util';

const list = createCompletionList([
  {
    name: 'invoices',
    kind: K.Property,
    docs: 'The functionality for working with your site\'s invoices from backend code.',
  },
  {
    name: 'priceQuotes',
    kind: K.Property,
    docs: 'The functionality for working with your site\'s price quotes from backend code.',
  },
]);

const invoicesList = createCompletionList([
  {
    name: 'addPayment',
    kink: K.Method,
  },
  {
    name: 'createInvoice',
    kink: K.Method,
  },
  {
    name: 'createInvoicePreviewUrl',
    kink: K.Method,
  },
  {
    name: 'deleteInvoice',
    kink: K.Method,
  },
  {
    name: 'getInvoice',
    kink: K.Method,
  },
  {
    name: 'sendInvoice',
    kink: K.Method,
  },
  {
    name: 'updateInvoice',
    kink: K.Method,
  },
  {
    name: 'voidInvoice',
    kink: K.Method,
  },
]);

const priceList = createCompletionList([
  {
    name: 'createPriceQuote',
    kind: K.Method,
  },
  {
    name: 'deletePriceQuote',
    kind: K.Method,
  },
  {
    name: 'getPriceQuote',
    kind: K.Method,
  },
  {
    name: 'sendPriceQuote',
    kind: K.Method,
  },
  {
    name: 'updatePriceQuote',
    kind: K.Method,
  },
]);

export default {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (/(wixBilling\.)?invoices\.$/.test(prefix)) {
      return invoicesList;
    }

    if (/(wixBilling\.)?priceQuotes\.$/.test(prefix)) {
      return priceList;
    }

    if (prefix.endsWith('wixBilling.')) {
      return list;
    }
  },
};
