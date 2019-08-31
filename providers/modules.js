const vs = require('vscode');
const { createCompletionList } = require('./util');
const kind = vs.CompletionItemKind;

const list = createCompletionList([
  {
    name: 'wixBookings from \'wix-bookings\';',
    kind: kind.Module,
  },
  {
    name: 'wixCRM from \'wix-crm\';',
    kind: kind.Module,
  },
  {
    name: 'wixCRM from \'wix-crm-backend\';',
    kind: kind.Module,
  },
  {
    name: 'wixData from \'wix-data\';',
    kind: kind.Module,
  },
  {
    name: 'wixDataset from \'wix-dataset\';',
    kind: kind.Module,
  },
  // {
  //   name: '? from \'wix-fetch\';',
  //   kind: kind.Module,
  // },
  // {
  //   name: '? from \'wix-http-functions\';',
  //   kind: kind.Module,
  // },
  {
    name: 'wixLocation from \'wix-location\';',
    kind: kind.Module,
  },
  {
    name: 'wixMarketing from \'wix-marketing-backend\';',
    kind: kind.Module,
  },
  {
    name: 'wixPaidPlans from \'wix-paid-plans\';',
    kind: kind.Module,
  },
  {
    name: 'wixPaidPlans from \'wix-paid-plans-backend\';',
    kind: kind.Module,
  },
  {
    name: 'wixPay from \'wix-pay\';',
    kind: kind.Module,
  },
  {
    name: 'wixPay from \'wix-pay-backend\';',
    kind: kind.Module,
  },
  {
    name: 'wixRouter from \'wix-router\';',
    kind: kind.Module,
  },
  {
    name: 'wixSite from \'wix-site\';',
    kind: kind.Module,
  },
  {
    name: 'wixSite from \'wix-site-backend\';',
    kind: kind.Module,
  },
  {
    name: 'wixStorage from \'wix-storage\';',
    kind: kind.Module,
  },
  {
    name: 'wixStore from \'wix-stores\';',
    kind: kind.Module,
  },
  {
    name: 'wixStores from \'wix-stores-backend\';',
    kind: kind.Module,
  },
  {
    name: 'wixUsers from \'wix-users\';',
    kind: kind.Module,
  },
  {
    name: 'wixUsersBackend from \'wix-users-backend\';',
    kind: kind.Module,
  },
  {
    name: 'wixWindow from \'wix-window\';',
    kind: kind.Module,
  },
]);

module.exports = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (/import\s/.test(prefix)) {
      return list;
    }
  },
};
