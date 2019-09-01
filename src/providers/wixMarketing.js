import { createCompletionList, K } from './util';

const list = createCompletionList([
  { name: 'coupons', kind: K.Property },
]);

const listCoupons = createCompletionList([
  { name: 'createCoupon', kind: K.Method },
  { name: 'deleteCoupon', kind: K.Method },
  { name: 'updateCouponFields', kind: K.Method },
]);

export default {
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
