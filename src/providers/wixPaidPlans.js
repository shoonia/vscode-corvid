import { createCompletionList, isBackend, K } from './util';

const list = createCompletionList([
  {
    name: 'orderPlan',
    kind: K.Method,
    snippet: 'orderPlan(${1:planId})',
    detail: 'function orderPlan(planId: string): Promise<OrderResult>',
    docs: 'Orders a paid plan.',
  },
  {
    name: 'purchasePlan',
    kind: K.Method,
    snippet: 'purchasePlan(${1:planId})',
    detail: 'function purchasePlan(planId: string): Promise<PurchaseResult>',
    docs: 'Orders and purchases a paid plan.',
  },
]);

export default {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (
      !isBackend(doc.uri.path) &&
      prefix.endsWith('wixPaidPlans.')
    ) {
      return list;
    }
  },
};

