'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var vs = require('vscode');
var vs__default = _interopDefault(vs);

const IS_BACKEND = /(.+)src\/backend\/(.+)\.jsw?$/;

const K = vs__default.CompletionItemKind;

function createCompletionList(list) {
  return list.map(({ name, kind }) => {
    return new vs__default.CompletionItem(name, kind);
  });
}

function isBackend(path) {
  return IS_BACKEND.test(path);
}

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

var modules = {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (/import\s/.test(prefix)) {
      return isBackend(doc.uri.path) ? listBackend : listFronend;
    }
  },
};

const list = createCompletionList([
  { name: 'id', kind: K.Property },
  { name: 'loggedIn', kind: K.Property },
  { name: 'role', kind: K.Property },
  { name: 'getEmail', kind: K.Method },
  { name: 'getPricingPlans', kind: K.Method },
  { name: 'getRoles', kind: K.Method },
]);

var Users = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (/(wixUsers|wixUsersBackend\.)?currentUser\.$/.test(prefix)) {
      return list;
    }
  },
};

const listFronend$1 = createCompletionList([
  { name: 'createContact', kind: K.Method },
  { name: 'emailContact', kind: K.Method },
]);

const listBackend$1 = createCompletionList([
  { name: 'createContact', kind: K.Method },
  { name: 'emailContact', kind: K.Method },
  { name: 'getContactById', kind: K.Method },
  { name: 'updateContact', kind: K.Method },
]);

var wixCRM = {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixCRM.')) {
      return isBackend(doc.uri.path) ? listBackend$1 : listFronend$1;
    }
  },
};

const listFronend$2 = createCompletionList([
  { name: 'currentUser', kind: K.Property },
  { name: 'emailUser', kind: K.Method },
  { name: 'login', kind: K.Method },
  { name: 'logout', kind: K.Method },
  { name: 'onLogin', kind: K.Method },
  { name: 'promptLogin', kind: K.Method },
  { name: 'register', kind: K.Method },
  { name: 'promptForgotPassword', kind: K.Method },
  { name: 'applySessionToken', kind: K.Method },
]);

const listBackend$2 = createCompletionList([
  { name: 'currentUser', kind: K.Property },
  { name: 'approveByEmail', kind: K.Method },
  { name: 'approveByToken', kind: K.Method },
  { name: 'blockByEmail', kind: K.Method },
  { name: 'emailUser', kind: K.Method },
  { name: 'generateSessionToken', kind: K.Method },
  { name: 'login', kind: K.Method },
  { name: 'register', kind: K.Method },
]);

var wixUsers = {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (/wixUsers(Backend)?\.$/.test(prefix)) {
      return isBackend(doc.uri.path) ? listBackend$2 : listFronend$2;
    }
  },
};

const list$1 = createCompletionList([
  { name: 'coupons', kind: K.Property },
]);

const listCoupons = createCompletionList([
  { name: 'createCoupon', kind: K.Method },
  { name: 'deleteCoupon', kind: K.Method },
  { name: 'updateCouponFields', kind: K.Method },
]);

var wixMarketing = {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (/(wixMarketing\.)?coupons\.$/.test(prefix)) {
      return listCoupons;
    }

    if (prefix.endsWith('wixMarketing.')) {
      return list$1;
    }
  },
};

const windowList = createCompletionList([
  { name: 'browserLocale', kind: K.Property },
  { name: 'formFactor', kind: K.Property },
  { name: 'referrer', kind: K.Property },
  { name: 'viewMode', kind: K.Property },
  { name: 'getBoundingRect', kind: K.Method },
  { name: 'getCurrentGeolocation', kind: K.Method },
  { name: 'getRouterData', kind: K.Method },
  { name: 'openLightbox', kind: K.Method },
  { name: 'openModal', kind: K.Method },
  { name: 'postMessage', kind: K.Method },
  { name: 'scrollBy', kind: K.Method },
  { name: 'scrollTo', kind: K.Method },
  { name: 'trackEvent', kind: K.Method },
  { name: 'rendering', kind: K.Property }, // => renderingList
  { name: 'multilingual', kind: K.Property }, // => multilingualList
  { name: 'lightbox', kind: K.Property }, // => lightboxList
]);

const renderingList = createCompletionList([
  { name: 'env', kind: K.Property },
]);

const multilingualList = createCompletionList([
  { name: 'currentLanguage', kind: K.Property },
  { name: 'isEnabled', kind: K.Property },
  { name: 'siteLanguages', kind: K.Property },
]);

const lightboxList = createCompletionList([
  { name: 'close', kind: K.Method },
  { name: 'getContext', kind: K.Method },
]);

var wixWindow = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixWindow.')) {
      return windowList;
    }

    if (prefix.endsWith('.rendering.')) {
      return renderingList;
    }

    if (prefix.endsWith('.multilingual.')) {
      return multilingualList;
    }

    if (prefix.endsWith('.lightbox.')) {
      return lightboxList;
    }
  },
};

const list$2 = createCompletionList([
  { name: 'getItem', kind: K.Method },
  { name: 'setItem', kind: K.Method },
  { name: 'removeItem', kind: K.Method },
  { name: 'clear', kind: K.Method },
]);

var wixStorage = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (/(local|session|memory)\.$/.test(prefix)) {
      return list$2;
    }
  },
};

const list$3 = createCompletionList([
  { name: 'get', kind: K.Method },
  { name: 'query', kind: K.Method },
  { name: 'insert', kind: K.Method },
  { name: 'update', kind: K.Method },
  { name: 'remove', kind: K.Method },
  { name: 'save', kind: K.Method },
  { name: 'sort', kind: K.Method },
  { name: 'filter', kind: K.Method },
  { name: 'aggregate', kind: K.Method },
  { name: 'bulkInsert', kind: K.Method },
  { name: 'bulkSave', kind: K.Method },
  { name: 'bulkUpdate', kind: K.Method },
  { name: 'insertReference', kind: K.Method },
  { name: 'isReferenced', kind: K.Method },
  { name: 'queryReferenced', kind: K.Method },
  { name: 'removeReference', kind: K.Method },
  { name: 'replaceReferences', kind: K.Method },
]);

var wixData = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixData.')) {
      return list$3;
    }
  },
};

const list$4 = createCompletionList([
  { name: 'baseUrl', kind: K.Property },
  { name: 'path', kind: K.Property },
  { name: 'prefix', kind: K.Property },
  { name: 'protocol', kind: K.Property },
  { name: 'query', kind: K.Property },
  { name: 'url', kind: K.Property },
  { name: 'onChange', kind: K.Method },
  { name: 'to;', kind: K.Method },
]);

var wixLocation = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixLocation.')) {
      return list$4;
    }
  },
};

const listSiteFronend = createCompletionList([
  { name: 'currency', kind: K.Property },
  { name: 'currentPage', kind: K.Property },
  { name: 'language', kind: K.Property },
  { name: 'regionalSettings', kind: K.Property },
  { name: 'revision', kind: K.Property },
  { name: 'timezone', kind: K.Property },
  { name: 'getSiteStructure', kind: K.Method },
  { name: 'routerSitemap', kind: K.Method },
]);

const listSiteBackend = createCompletionList([
  { name: 'generalInfo', kind: K.Property },
]);

const listSiteGeneralInfo = createCompletionList([
  { name: 'getAddress', kind: K.Method },
  { name: 'getBusinessName', kind: K.Method },
  { name: 'getBusinessSchedule', kind: K.Method },
  { name: 'getCategories', kind: K.Method },
  { name: 'getDescription', kind: K.Method },
  { name: 'getEmail', kind: K.Method },
  { name: 'getFax', kind: K.Method },
  { name: 'getLanguage', kind: K.Method },
  { name: 'getLocale', kind: K.Method },
  { name: 'getLogo', kind: K.Method },
  { name: 'getMultilingual', kind: K.Method },
  { name: 'getPaymentCurrency', kind: K.Method },
  { name: 'getPhone', kind: K.Method },
  { name: 'getSiteDisplayName', kind: K.Method },
  { name: 'getTimeZone', kind: K.Method },
]);

var wixSite = {
  provideCompletionItems(doc, position) {
    const isBack = isBackend(doc.uri.path);
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (isBack && /(wixSite\.)?generalInfo\.$/.test(prefix)) {
      return listSiteGeneralInfo;
    }

    if (prefix.endsWith('wixSite.')) {
      return isBack ? listSiteBackend : listSiteFronend;
    }
  },
};

const listFronend$3 = createCompletionList([
  { name: 'getProductOptionsAvailability', kind: K.Method },
]);

const listBackend$3 = createCompletionList([
  { name: 'getCurrentCart', kind: K.Method },
  { name: 'getProductOptionsAvailability', kind: K.Method },
]);

var wixStores = {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixStores.')) {
      return isBackend(doc.uri.path) ? listBackend$3 : listFronend$3;
    }
  },
};

const list$5 = createCompletionList([
  { name: 'checkoutBooking', kind: K.Method },
  { name: 'getServiceAvailability', kind: K.Method },
]);

var wixBookings = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixBookings.')) {
      return list$5;
    }
  },
};

function register(provider) {
  return vs.languages.registerCompletionItemProvider(
    { scheme: 'file', language: 'javascript' },
    provider,
    '.',
  );
}

var providers = [
  register(modules),
  register(Users),
  register(wixCRM),
  register(wixUsers),
  register(wixMarketing),
  register(wixWindow),
  register(wixStorage),
  register(wixData),
  register(wixLocation),
  register(wixSite),
  register(wixStores),
  register(wixBookings),
];

function activate(context) {
  context.subscriptions.push(providers);
}

exports.activate = activate;
