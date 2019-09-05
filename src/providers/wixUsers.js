import { createCompletionList, isBackend, K } from './util';

const currentUser = {
  name: 'currentUser',
  kind: K.Property,
  detail: 'get currentUser(): User',
  docs: 'Gets a User object containing information about the user currently viewing the site.',
};

const login = {
  name: 'login',
  kind: K.Method,
  snippet: 'login(${1:email}, ${2:password})',
  detail: 'function login(email: string, password: string): Promise<string>',
  docs: 'Logs a user in based on email and password.',
};

const register = {
  name: 'register',
  kind: K.Method,
  snippet: 'register(${1:email}, ${2:password})',
  detail: 'function register(email: string, password: string, [options: RegistrationOptions]): Promise<RegistrationResult>',
  docs: 'Registers a new site member.',
};

const listFronend = createCompletionList([
  currentUser,
  login,
  register,
  {
    name: 'emailUser',
    kind: K.Method,
    snippet: 'emailUser(${1:emailID}, ${2:userId})',
    detail: 'function emailUser(emailId: string, toUser: string, [options: TriggeredEmailOptions]): Promise<void>',
    docs: 'Sends a Triggered Email to the currently logged-in site member.',
  },
  {
    name: 'logout',
    kind: K.Method,
    snippet: 'logout();',
    detail: 'function logout(): void',
    docs: 'Logs the current user out of the site.',
  },
  {
    name: 'onLogin',
    kind: K.Method,
    snippet: 'onLogin((${1:user}) => {$2});',
    detail: 'function onLogin(handler: LoginHandler): void\n\ncallback LoginHandler(user: User): void',
    docs: 'Sets the function that runs when a user logs in.',
  },
  {
    name: 'promptLogin',
    kind: K.Method,
    snippet: 'promptLogin()',
    detail: 'function promptLogin(options: LoginOptions): Promise<User>',
    docs: 'Prompts the current site visitor to log in as a site member.',
  },
  {
    name: 'promptForgotPassword',
    kind: K.Method,
    snippet: 'promptForgotPassword()',
    detail: 'function promptForgotPassword([language: string]): Promise<void>',
    docs: 'Prompts the current site visitor with a password reset.',
  },
  {
    name: 'applySessionToken',
    kind: K.Method,
    snippet: 'applySessionToken(${1:sessionToken})',
    detail: 'function applySessionToken(sessionToken: string): Promise<void>',
    docs: 'Logs the current user into the site using the given session token.',
  },
]);

const listBackend = createCompletionList([
  currentUser,
  login,
  register,
  {
    name: 'approveByEmail',
    kind: K.Method,
    snippet: 'approveByEmail(${1:email})',
    detail: 'function approveByEmail(email: string): Promise<string>',
    docs: 'Approve a member whose status is "Pending" using an email address.',
  },
  {
    name: 'approveByToken',
    kind: K.Method,
    snippet: 'approveByToken(${1:token})',
    detail: 'function approveByToken(token: string): Promise<string>',
    docs: 'Approve a member whose status is "Pending" using an approval token.',
  },
  {
    name: 'blockByEmail',
    kind: K.Method,
    snippet: 'blockByEmail(${1:email})',
    detail: 'function blockByEmail(email: string): Promise<void>',
    docs: 'Blocks a member from logging into the site.',
  },
  {
    name: 'emailUser',
    kind: K.Method,
    snippet: 'emailUser(${1:emailID}, ${2:userId})',
    detail: 'function emailUser(emailId: string, toUser: string, [options: TriggeredEmailOptions]): Promise<void>',
    docs: 'Sends a Triggered Email to the specified site member.',
  },
  {
    name: 'generateSessionToken',
    kind: K.Method,
    snippet: 'generateSessionToken(${1:email})',
    detail: 'function generateSessionToken(email: string): Promise<string>',
    docs: 'Create a session token for a member authenticated by a 3rd party.',
  },
  {
    name: 'getUser',
    kind: K.Method,
    snippet: 'wixUsers.getUser(${1:id})',
    detail: 'function getUser(userId: string): Promise<UserInfo>',
    docs: 'Gets an existing user by ID.',
  },
  // {
  //   name: 'updateUserFields',
  //   kind: K.Method,
  // },
]);

export default {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (/wixUsers(Backend)?\.$/.test(prefix)) {
      return isBackend(doc.uri.path) ? listBackend : listFronend;
    }
  },
};
