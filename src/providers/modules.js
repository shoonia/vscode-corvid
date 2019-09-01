import { createCompletionList, isBackend, K } from './util';

const listFronend = createCompletionList([
  { name: 'wixBookings from \'wix-bookings\';', kind: K.Module },
  { name: 'wixCRM from \'wix-crm\';', kind: K.Module },
  { name: 'wixData from \'wix-data\';', kind: K.Module },
  { name: 'wixDataset from \'wix-dataset\';', kind: K.Module },
  { name: 'wixLocation from \'wix-location\';', kind: K.Module },
  { name: 'wixPaidPlans from \'wix-paid-plans\';', kind: K.Module },
  { name: 'wixPay from \'wix-pay\';', kind: K.Module },
  { name: 'wixSite from \'wix-site\';', kind: K.Module },
  { name: 'wixStorage from \'wix-storage\';', kind: K.Module },
  { name: 'wixStores from \'wix-stores\';', kind: K.Module },
  { name: 'wixUsers from \'wix-users\';', kind: K.Module },
  { name: 'wixWindow from \'wix-window\';', kind: K.Module },
  // { name: '? from \'wix-fetch\';', kind: K.Module },
  // { name: '? from \'wix-http-functions\';', kind: K.Module },
]);

const listBackend = createCompletionList([
  { name: 'wixData from \'wix-data\';', kind: K.Module }, // Duplication. Find a better way
  { name: 'wixCRM from \'wix-crm-backend\';', kind: K.Module },
  { name: 'wixMarketing from \'wix-marketing-backend\';', kind: K.Module },
  { name: 'wixRouter from \'wix-router\';', kind: K.Module },
  { name: 'wixPaidPlans from \'wix-paid-plans-backend\';', kind: K.Module },
  { name: 'wixPay from \'wix-pay-backend\';', kind: K.Module },
  { name: 'wixSite from \'wix-site-backend\';', kind: K.Module },
  { name: 'wixStores from \'wix-stores-backend\';', kind: K.Module },
  { name: 'wixUsers from \'wix-users-backend\';', kind: K.Module },
]);

export default {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (/import\s/.test(prefix)) {
      return isBackend(doc.uri.path) ? listBackend : listFronend;
    }
  },
};
