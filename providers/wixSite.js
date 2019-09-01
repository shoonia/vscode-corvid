const vs = require('vscode');
const { createCompletionList, isBackend } = require('./util');

const K = vs.CompletionItemKind;

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

module.exports = {
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
