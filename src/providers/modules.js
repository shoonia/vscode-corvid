import { createCompletionList, isBackend, K } from './util';

const wixFetch = {
  name: 'import { fetch, getJSON } from \'wix-fetch\'',
  kind: K.Module,
  snippet: '{ ${1|fetch,getJSON|} } from \'wix-fetch\';',
  docs: 'Retrieves the specified resource from the network using HTTPS.',
};

const wixData = {
  name: 'import wixData from \'wix-data\'',
  kind: K.Module,
  snippet: 'wixData from \'wix-data\';',
  docs: 'The wix-data module contains functionality for working with data in collections.',
};

const listFronend = createCompletionList([
  wixFetch,
  wixData,
  {
    name: 'import wixBookings from \'wix-bookings\'',
    kind: K.Module,
    snippet: 'wixBookings from \'wix-bookings\';',
    docs: 'The wix-bookings module contains functionality for working with bookings from client-side code.',
  },
  {
    name: 'import wixCRM from \'wix-crm\'',
    kind: K.Module,
    snippet: 'wixCRM from \'wix-crm\';',
    docs: 'The wix-crm module contains functionality for working with your site\'s contacts from client-side code.',
  },
  {
    name: 'import wixLocation from \'wix-location\'',
    kind: K.Module,
    snippet: 'wixLocation from \'wix-location\';',
    docs: 'The wix-location module contains functionality for getting information about the URL of the current page and for navigating to other pages.',
    // docs: '',
  },
  {
    name: 'import wixPaidPlans from \'wix-paid-plans\'',
    kind: K.Module,
    snippet: 'wixPaidPlans from \'wix-paid-plans\';',
    // detail: '',
    docs: 'The wix-paid-plans module contains functionality for working with paid plans from client-side code.',
  },
  {
    name: 'wixPay from \'wix-pay\'',
    kind: K.Module,
    // snippet: '',
    // detail: '',
    // docs: '',
  },
  {
    name: 'wixSite from \'wix-site\'',
    kind: K.Module,
    // snippet: '',
    // detail: '',
    // docs: '',
  },
  {
    name: '{ local, session, memory } from \'wix-storage\'',
    kind: K.Module,
    snippet: '{ ${1|local,session,memory|} } from \'wix-storage\';',
    docs: 'The wix-storage module contains functionality for the persistent storage of key/value data in the site visitor\'s browser.',
  },
  {
    name: 'wixStores from \'wix-stores\'',
    kind: K.Module,
    // snippet: '',
    // detail: '',
    // docs: '',
  },
  {
    name: 'wixUsers from \'wix-users\'',
    kind: K.Module,
    // snippet: '',
    // detail: '',
    // docs: '',
  },
  {
    name: 'wixWindow from \'wix-window\'',
    kind: K.Module,
    // snippet: '',
    // detail: '',
    // docs: '',
  },
]);

const listBackend = createCompletionList([
  wixFetch,
  wixData,
  {
    name: 'import wixBilling from \'wix-billing-backend\'',
    kind: K.Module,
    snippet: 'wixBilling from \'wix-billing-backend\';',
    docs: 'The wix-billing-backend module contains functionality for working with billing features, such as price quotes and invoices.',
  },
  {
    name: 'wixCRM from \'wix-crm-backend\'',
    kind: K.Module,
    snippet: 'wixCRM from \'wix-crm-backend\';',
    docs: 'The wix-crm-backend module contains functionality for working with your site\'s contacts from backend code.',
  },
  {
    name: 'wixMarketing from \'wix-marketing-backend\'',
    kind: K.Module,
  },
  {
    name: 'wixPay from \'wix-pay-backend\'',
    kind: K.Module,
  },
  {
    name: 'wixSite from \'wix-site-backend\'',
    kind: K.Module,
  },
  {
    name: 'wixStores from \'wix-stores-backend\'',
    kind: K.Module,
  },
  {
    name: 'wixUsers from \'wix-users-backend\'',
    kind: K.Module,
  },
]);

export default {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (/import\s/.test(prefix)) {
      return isBackend(doc.uri.path) ? listBackend : listFronend;
    }
  },
};
