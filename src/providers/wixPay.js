import { createCompletionList, isBackend, K } from './util';

const listFronend = createCompletionList([
  {
    name: 'startPayment',
    kind: K.Method,
    snippet: 'startPayment(${1:paymentId})',
    detail: 'function startPayment(paymentId: string, [options: PaymentOptions]): Promise<PaymentResult>',
    docs: 'Starts a payment.',
  },
]);

const listBackend = createCompletionList([
  {
    name: 'createPayment',
    kind: K.Method,
    snippet: 'createPayment(${1:paymentInfo})',
    detail: 'function createPayment(paymentInfo: PaymentInfo): Promise<Payment>',
    docs: 'Creates a new payment.',
  },
]);

export default {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixPay.')) {
      return isBackend(doc.uri.path) ? listBackend : listFronend;
    }
  },
};

