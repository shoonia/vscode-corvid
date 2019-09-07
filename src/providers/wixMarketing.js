import { createCompletionList, K } from './util';

const list = createCompletionList([
  {
    name: 'coupons',
    kind: K.Property,
    docs: 'The Coupons API is used to manage your site\'s coupons.',
  },
]);

const listCoupons = createCompletionList([
  {
    name: 'createCoupon',
    kind: K.Method,
    snippet: 'createCoupon(${1:couponInfo})',
    detail: 'function createCoupon(couponInfo: CouponInfo): Promise<string>',
    docs: 'Creates a new coupon.',
  },
  {
    name: 'deleteCoupon',
    kind: K.Method,
    snippet: 'deleteCoupon(${1:couponId})',
    detail: 'function deleteCoupon(couponId: string): Promise<void>',
    docs: 'Deletes an existing coupon.',
  },
  {
    name: 'updateCouponFields',
    kind: K.Method,
    snippet: 'updateCouponFields(${1:couponId}, ${2:couponData})',
    detail: 'function updateCouponFields(couponId: string, couponInfo: CouponInfo): Promise<void>',
    docs: 'Updates the specified fields of an existing coupon.',
  },
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
