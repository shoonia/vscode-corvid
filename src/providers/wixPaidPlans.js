import { createCompletionList, isBackend, K } from './util';

const list = createCompletionList([
  { name: 'orderPlan', kind: K.Method },
  { name: 'purchasePlan', kind: K.Method },
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

