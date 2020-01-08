import { CompletionItemKind } from 'vscode';
import { isBackend, createCompletionList } from '../util';

const { Module } = CompletionItemKind;

const wixFetch = {
  name: 'import { fetch, getJSON } from \'wix-fetch\'',
  kind: Module,
  snippet: '{ ${1|fetch,getJSON|} } from \'wix-fetch\';',
  docs: 'An implementation of the standard Javascript Fetch API which can be used'
    + ' in public and backend code for fetching resources from 3rd party services using HTTPS.'
    + '\n\n[wix-fetch](https://www.wix.com/corvid/reference/wix-fetch.html)',
};

const wixData = {
  name: 'import wixData from \'wix-data\'',
  kind: Module,
  snippet: 'wixData from \'wix-data\';',
  docs: 'The [wix-data](https://www.wix.com/corvid/reference/wix-data.html)'
    + ' module contains functionality for working with data in collections.',
};

const listFronend = createCompletionList([
  wixFetch,
  wixData,
  {
    name: 'import wixBookings from \'wix-bookings\'',
    kind: Module,
    snippet: 'wixBookings from \'wix-bookings\';',
    docs: 'The [wix-bookings](https://www.wix.com/corvid/reference/wix-bookings.html)'
      + ' module contains functionality for working with bookings from client-side code.',
  },
  {
    name: 'import wixCRM from \'wix-crm\'',
    kind: Module,
    snippet: 'wixCRM from \'wix-crm\';',
    docs: 'The [wix-crm](https://www.wix.com/corvid/reference/wix-crm.html) module'
      + ' contains functionality for working with your site\'s contacts from client-side code.',
  },
  {
    name: 'import wixLocation from \'wix-location\'',
    kind: Module,
    snippet: 'wixLocation from \'wix-location\';',
    docs: 'The [wix-location](https://www.wix.com/corvid/reference/wix-location.html)'
      + ' module contains functionality for getting information about the URL'
      + ' of the current page and for navigating to other pages.',
  },
  {
    name: 'import wixPaidPlans from \'wix-paid-plans\'',
    kind: Module,
    snippet: 'wixPaidPlans from \'wix-paid-plans\';',
    docs: 'The [wix-paid-plans](https://www.wix.com/corvid/reference/wix-paid-plans.html)'
      + ' module contains functionality for working with paid plans from client-side code.',
  },
  {
    name: 'import wixPay from \'wix-pay\'',
    kind: Module,
    snippet: 'wixPay from \'wix-pay\';',
    docs: 'The [wix-pay](https://www.wix.com/corvid/reference/wix-pay.html)'
      + ' module contains functionality for working with payments from client-side code.',
  },
  {
    name: 'import wixSite from \'wix-site\'',
    kind: Module,
    snippet: 'wixSite from \'wix-site\';',
    docs: 'The [wix-site](https://www.wix.com/corvid/reference/wix-site.html)'
      + ' module contains functionality for obtaining information about your site and its pages.',
  },
  {
    name: 'import wixStorage from \'wix-storage\'',
    kind: Module,
    snippet: '{ ${1|local,session,memory|} } from \'wix-storage\';',
    detail: '{ local } from \'wix-storage\'\n{ session } from \'wix-storage\''
      + '\n{ memory } from \'wix-storage\'',
    docs: 'The [wix-storage](https://www.wix.com/corvid/reference/wix-storage.html)'
      + ' module contains functionality for the persistent storage of key/value data in the site visitor\'s browser.',
  },
  {
    name: 'import wixStores from \'wix-stores\'',
    kind: Module,
    snippet: 'wixStores from \'wix-stores\';',
    docs: 'The [wix-stores](https://www.wix.com/corvid/reference/wix-stores.html)'
      + ' module contains functionality for working with your site\'s store from from client-side code.',
  },
  {
    name: 'import wixUsers from \'wix-users\'',
    kind: Module,
    snippet: 'wixUsers from \'wix-users\';',
    docs: 'The [wix-users](https://www.wix.com/corvid/reference/wix-users.html)'
      + ' module contains functionality for working with your site\'s users from client-side code.',
  },
  {
    name: 'import wixWindow from \'wix-window\'',
    kind: Module,
    snippet: 'wixWindow from \'wix-window\';',
    docs: 'The [wix-window](https://www.wix.com/corvid/reference/wix-window.html)'
      + ' module contains functionality that pertains to the current browser window.',
  },
  {
    name: 'import wixSeo from \'wix-seo\'',
    kind: Module,
    snippet: 'wixSeo from \'wix-seo\';',
    docs: 'The [wix-seo](https://www.wix.com/corvid/reference/wix-seo.html)'
      + ' module contains functionality for working with your site\'s SEO from client-side code.',
  },
  {
    name: 'import wixEvents from \'wix-events\'',
    kind: Module,
    snippet: 'wixEvents from \'wix-events\';',
    docs: 'The [wix-events](https://www.wix.com/corvid/reference/wix-events.html)'
      + ' module contains functionality for working with Wix Events from client-side code.',
  },
  {
    name: 'import wixSearch from \'wix-search\'',
    kind: Module,
    snippet: 'wixSearch from \'wix-search\';',
    docs: 'The [wix-search](https://www.wix.com/corvid/reference/wix-search.html)'
      + ' module contains functionality for searching a site.',
  },
]);

const listBackend = createCompletionList([
  wixFetch,
  wixData,
  {
    name: 'import wixBilling from \'wix-billing-backend\'',
    kind: Module,
    snippet: 'wixBilling from \'wix-billing-backend\';',
    docs: 'The [wix-billing-backend](https://www.wix.com/corvid/reference/wix-billing-backend.html)'
      + ' module contains functionality for working with billing features, such as price quotes and invoices.',
  },
  {
    name: 'import wixCRM from \'wix-crm-backend\'',
    kind: Module,
    snippet: 'wixCRM from \'wix-crm-backend\';',
    docs: 'The [wix-crm-backend](https://www.wix.com/corvid/reference/wix-crm-backend.html)'
      + ' module contains functionality for working with your site\'s contacts from backend code.',
  },
  {
    name: 'import wixMarketing from \'wix-marketing-backend\'',
    kind: Module,
    snippet: 'wixMarketing from \'wix-marketing-backend\';',
    docs: 'The [wix-marketing-backend](https://www.wix.com/corvid/reference/wix-marketing-backend.html)'
      + ' module contains functionality for working with your site\'s marketing tools from backend code.',
  },
  {
    name: 'import wixPay from \'wix-pay-backend\'',
    kind: Module,
    snippet: 'wixPay from \'wix-pay-backend\';',
    docs: 'The [wix-pay-backend](https://www.wix.com/corvid/reference/wix-pay-backend.html)'
      + ' module contains functionality for working with payments from backend code.',
  },
  {
    name: 'import wixSite from \'wix-site-backend\'',
    kind: Module,
    snippet: 'wixSite from \'wix-site-backend\';',
    docs: 'The [wix-site-backend](https://www.wix.com/corvid/reference/wix-site-backend.html)'
      + ' module contains functionality for obtaining information about your site and its pages from backend code.',
  },
  {
    name: 'import wixStores from \'wix-stores-backend\'',
    kind: Module,
    snippet: 'wixStores from \'wix-stores-backend\';',
    docs: 'The [wix-stores-backend](https://www.wix.com/corvid/reference/wix-stores-backend.html)'
      + ' module contains functionality for working with your site\'s store from backend code.',
  },
  {
    name: 'import wixUsers from \'wix-users-backend\'',
    kind: Module,
    snippet: 'wixUsers from \'wix-users-backend\';',
    docs: 'The [wix-users-backend](https://www.wix.com/corvid/reference/wix-users-backend.html)'
      + ' module contains functionality for working with your site\'s users from backend code.',
  },
  {
    name: 'import wixCaptcha from \'wix-captcha-backend\'',
    kind: Module,
    snippet: 'wixCaptcha from \'wix-captcha-backend\';',
    docs: 'The [wix-captcha-backend](https://www.wix.com/corvid/reference/wix-captcha-backend.html)'
      + ' module contains functionality for working with the reCAPTCHA element from backend code.'
      + '\n\n*Note: This feature is not yet available to all users.*',
  },
  {
    name: 'import wixMediaManager from \'wix-media-backend\'',
    kind: Module,
    snippet: '{ mediaManager } from \'wix-media-backend\';',
    detail: '{ mediaManager } from \'wix-media-backend\'',
    docs: 'The [wix-media-backend](https://www.wix.com/corvid/reference/wix-media-backend.html)'
      + ' module contains functionality for working with media from backend code.',
  },
  {
    name: 'import wixRouter from \'wix-router\'',
    kind: Module,
    snippet: '{ ${1|ok,notFound,next,redirect,forbidden,sendStatus|} } from \'wix-router\';',
    docs: 'This module contains the APIs for code routers and data binding router hooks.'
      + '\n\n[wix-router](https://www.wix.com/corvid/reference/wix-router.html)',
  },
  {
    name: 'import wixHttpFunctions from \'wix-http-functions\'',
    kind: Module,
    snippet: '{ ${1|ok,get,post,use,badRequest,notFound,serverError,created,delete,forbidden,options,put,response|} } from \'wix-http-functions\';',
    docs: 'HTTP functions are used to expose an API of your site\'s functionality.'
      + '\n\n[wix-http-functions](https://www.wix.com/corvid/reference/wix-http-functions.html)',
  },
  {
    name: 'import wixChat from \'wix-chat-backend\'',
    kind: Module,
    snippet: 'wixChat from \'wix-chat-backend\';',
    docs: 'The [wix-chat-backend](https://www.wix.com/corvid/reference/wix-chat-backend.html)'
      + ' module contains functionality for working'
      + ' with the Wix Chat application from backend code.',
  },
]);

export const modules = {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (/^import\s/.test(prefix)) {
      return isBackend(doc.uri.path) ? listBackend : listFronend;
    }
  },
};
