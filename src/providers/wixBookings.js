import { createCompletionList, K } from './util';

const list = createCompletionList([
  {
    name: 'checkoutBooking',
    kind: K.Method,
    snippet: 'checkoutBooking(${1:bookingInfo})',
    detail: 'function checkoutBooking(bookingInfo: BookingInfo, [options: PaymentOptions]): Promise<BookingResult>',
    docs: 'Books a service and processes payment for the service.',
  },
  {
    name: 'getServiceAvailability',
    kind: K.Method,
    snippet: 'getServiceAvailability(${1:serviceId})',
    detail: 'function getServiceAvailability(serviceId: string, [options: AvailabilityOptions]): Promise<ServiceAvailability>',
    docs: 'Gets the available slots for a specific service.',
  },
]);

export default {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixBookings.')) {
      return list;
    }
  },
};
