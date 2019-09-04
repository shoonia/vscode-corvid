import { createCompletionList, K } from './util';

const list = createCompletionList([
  {
    name: 'id',
    kind: K.Property,
    detail: 'get id(): string',
    docs: 'Gets the user\'s ID.',
  },
  {
    name: 'loggedIn',
    kind: K.Property,
    detail: 'get loggedIn(): boolean',
    docs: 'Indicates whether the user is logged in or not.',
  },
  {
    name: 'getEmail',
    kind: K.Method,
    snippet: 'getEmail()$1',
    detail: 'function getEmail(): Promise<string>',
    docs: 'Gets the email of the current user.',
  },
  {
    name: 'getPricingPlans',
    kind: K.Method,
    snippet: 'getPricingPlans()$1',
    detail: 'function getPricingPlans(): Promise<Array<PricingPlan>>',
    docs: 'Gets the user\'s member pricing plan.',
  },
  {
    name: 'getRoles',
    kind: K.Method,
    snippet: 'getRoles()$1',
    detail: 'function getRoles(): Promise<Array<UserRole>>',
    docs: 'Gets the user\'s member roles.',
  },
]);

export default {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (/(wixUsers|wixUsersBackend\.)?currentUser\.$/.test(prefix)) {
      return list;
    }
  },
};
