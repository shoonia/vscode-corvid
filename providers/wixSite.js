const vs = require('vscode');
const { createCompletionList } = require('./util');

const K = vs.CompletionItemKind;

// wix-site
const listSite = createCompletionList([
  { name: 'currency', kind: K.Property },
  { name: 'currentPage', kind: K.Property },
  { name: 'language', kind: K.Property },
  { name: 'regionalSettings', kind: K.Property },
  { name: 'revision', kind: K.Property },
  { name: 'timezone', kind: K.Property },
  { name: 'getSiteStructure', kind: K.Method },
  { name: 'routerSitemap', kind: K.Method },
]);

// wix-site-backend
const listSiteBackend = createCompletionList([
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

module.exports = {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixSite.')) {
      return listSite;
    }

    if (/(wixSite\.)?generalInfo/.test(prefix)) {
      return listSiteBackend;
    }
  },
};
