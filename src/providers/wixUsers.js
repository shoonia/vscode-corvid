import { createCompletionList, isBackend, K } from './util';

const currentUser = {
  name: 'currentUser',
  kind: K.Property,
  detail: 'get currentUser(): User',
  docs: 'Gets a User object containing information about the user currently viewing the site.',
};

const listFronend = createCompletionList([
  currentUser,
  {
    name: 'emailUser',
    kind: K.Method,
    detail: 'function emailUser(emailId: string, toUser: string, [options: TriggeredEmailOptions]): Promise<void>',
    docs: 'Sends a Triggered Email to the currently logged-in site member.',
  },
  {
    name: 'login',
    kind: K.Method,
  },
  { name: 'logout', kind: K.Method },
  { name: 'onLogin', kind: K.Method },
  { name: 'promptLogin', kind: K.Method },
  { name: 'register', kind: K.Method },
  { name: 'promptForgotPassword', kind: K.Method },
  { name: 'applySessionToken', kind: K.Method },
]);

const listBackend = createCompletionList([
  currentUser,
  { name: 'approveByEmail', kind: K.Method },
  { name: 'approveByToken', kind: K.Method },
  { name: 'blockByEmail', kind: K.Method },
  { name: 'emailUser', kind: K.Method },
  { name: 'generateSessionToken', kind: K.Method },
  { name: 'login', kind: K.Method },
  { name: 'register', kind: K.Method },
]);

export default {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (/wixUsers(Backend)?\.$/.test(prefix)) {
      return isBackend(doc.uri.path) ? listBackend : listFronend;
    }
  },
};
