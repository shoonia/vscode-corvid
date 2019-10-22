import { CompletionItemKind } from 'vscode';
import { isBackend, createCompletionList } from './util';

const { Module } = CompletionItemKind;

const wixFetch = {
  name: 'import { fetch, getJSON } from \'wix-fetch\'',
  kind: Module,
  snippet: '{ ${1|fetch,getJSON|} } from \'wix-fetch\';',
  detail: '{ fetch } from \'wix-fetch\'\n{ getJSON } from \'wix-fetch\'',
  docs: 'Retrieves the specified resource from the network using HTTPS.',
};

const wixData = {
  name: 'import wixData from \'wix-data\'',
  kind: Module,
  snippet: 'wixData from \'wix-data\';',
  docs: 'The wix-data module contains functionality for working with data in collections.',
};

const listFronend = createCompletionList([
  wixFetch,
  wixData,
  {
    name: 'import wixBookings from \'wix-bookings\'',
    kind: Module,
    snippet: 'wixBookings from \'wix-bookings\';',
    docs: 'The wix-bookings module contains functionality for working with bookings from client-side code.',
  },
  {
    name: 'import wixCRM from \'wix-crm\'',
    kind: Module,
    snippet: 'wixCRM from \'wix-crm\';',
    docs: 'The wix-crm module contains functionality for working with your site\'s contacts from client-side code.',
  },
  {
    name: 'import wixLocation from \'wix-location\'',
    kind: Module,
    snippet: 'wixLocation from \'wix-location\';',
    docs: 'The wix-location module contains functionality for getting information about the URL of the current page and for navigating to other pages.',
  },
  {
    name: 'import wixPaidPlans from \'wix-paid-plans\'',
    kind: Module,
    snippet: 'wixPaidPlans from \'wix-paid-plans\';',
    docs: 'The wix-paid-plans module contains functionality for working with paid plans from client-side code.',
  },
  {
    name: 'import wixPay from \'wix-pay\'',
    kind: Module,
    snippet: 'wixPay from \'wix-pay\';',
    docs: 'The wix-pay module contains functionality for working with payments from client-side code.',
  },
  {
    name: 'import wixSite from \'wix-site\'',
    kind: Module,
    snippet: 'wixSite from \'wix-site\';',
    docs: 'The wix-site module contains functionality for obtaining information about your site and its pages.',
  },
  {
    name: 'wixStorage from \'wix-storage\'',
    kind: Module,
    snippet: '{ ${1|local,session,memory|} } from \'wix-storage\';',
    detail: '{ local } from \'wix-storage\'\n{ session } from \'wix-storage\'\n{ memory } from \'wix-storage\'',
    docs: 'The wix-storage module contains functionality for the persistent storage of key/value data in the site visitor\'s browser.',
  },
  {
    name: 'import wixStores from \'wix-stores\'',
    kind: Module,
    snippet: 'wixStores from \'wix-stores\';',
    docs: 'The wix-stores module contains functionality for working with your site\'s store from from client-side code.',
  },
  {
    name: 'import wixUsers from \'wix-users\'',
    kind: Module,
    snippet: 'wixUsers from \'wix-users\';',
    docs: 'The wix-users module contains functionality for working with your site\'s users from client-side code.',
  },
  {
    name: 'wixWindow from \'wix-window\'',
    kind: Module,
    snippet: 'wixWindow from \'wix-window\';',
    docs: 'The wix-window module contains functionality that pertains to the current browser window.',
  },
]);

const listBackend = createCompletionList([
  wixFetch,
  wixData,
  {
    name: 'import wixBilling from \'wix-billing-backend\'',
    kind: Module,
    snippet: 'wixBilling from \'wix-billing-backend\';',
    docs: 'The wix-billing-backend module contains functionality for working with billing features, such as price quotes and invoices.',
  },
  {
    name: 'import wixCRM from \'wix-crm-backend\'',
    kind: Module,
    snippet: 'wixCRM from \'wix-crm-backend\';',
    docs: 'The wix-crm-backend module contains functionality for working with your site\'s contacts from backend code.',
  },
  {
    name: 'import wixMarketing from \'wix-marketing-backend\'',
    kind: Module,
    snippet: 'wixMarketing from \'wix-marketing-backend\';',
    docs: 'The wix-marketing-backend module contains functionality for working with your site\'s marketing tools from backend code.',
  },
  {
    name: 'import wixPay from \'wix-pay-backend\'',
    kind: Module,
    snippet: 'wixPay from \'wix-pay-backend\';',
    docs: 'The wix-pay-backend module contains functionality for working with payments from backend code.',
  },
  {
    name: 'import wixSite from \'wix-site-backend\'',
    kind: Module,
    snippet: 'wixSite from \'wix-site-backend\';',
    docs: 'The wix-site-backend module contains functionality for obtaining information about your site and its pages from backend code.',
  },
  {
    name: 'import wixStores from \'wix-stores-backend\'',
    kind: Module,
    snippet: 'wixStores from \'wix-stores-backend\';',
    docs: 'The wix-stores-backend module contains functionality for working with your site\'s store from backend code.',
  },
  {
    name: 'import wixUsers from \'wix-users-backend\'',
    kind: Module,
    snippet: 'wixUsers from \'wix-users-backend\';',
    docs: 'The wix-users-backend module contains functionality for working with your site\'s users from backend code.',
  },
  {
    name: 'import wixCaptcha from \'wix-captcha-backend\'',
    kind: Module,
    snippet: 'wixCaptcha from \'wix-captcha-backend\';',
    docs: 'The wix-captcha-backend module contains functionality for working with the reCAPTCHA element from backend code.\n\nNote: This feature is not yet available to all users.',
  },
  {
    name: 'import wixMediaManager from \'wix-media-backend\'',
    kind: Module,
    snippet: '{ mediaManager } from \'wix-media-backend\';',
    detail: '{ mediaManager } from \'wix-media-backend\'',
    docs: 'The wix-media-backend module contains functionality for working with media from backend code.',
  },
]);

export default {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character).trim();

    if (/^import\s/.test(prefix)) {
      return isBackend(doc.uri.path) ? listBackend : listFronend;
    }
  },
};
