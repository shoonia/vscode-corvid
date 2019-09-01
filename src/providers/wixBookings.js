import { createCompletionList, K } from './util';

const list = createCompletionList([
  { name: 'checkoutBooking', kind: K.Method },
  { name: 'getServiceAvailability', kind: K.Method },
]);

export default {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixBookings.')) {
      return list;
    }
  },
};
