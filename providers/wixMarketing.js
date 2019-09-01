const vs = require('vscode');
const { createCompletionList } = require('./util');

const K = vs.CompletionItemKind;

const list = createCompletionList([
  { name: 'coupons', kind: K.Property },
]);

const listCoupons = createCompletionList([
  { name: 'createCoupon', kind: K.Method },
  { name: 'deleteCoupon', kind: K.Method },
  { name: 'updateCouponFields', kind: K.Method },
]);

module.exports = {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (/(wixMarketing\.)?coupons\.$/.test(prefix)) {
      return listCoupons;
    }

    if (prefix.endsWith('wixMarketing.')) {
      return list;
    }
  },
};
