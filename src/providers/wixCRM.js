import { createCompletionList, isBackend, K } from './util';

const createContact = {
  name: 'createContact',
  kind: K.Method,
  snippet: 'createContact(${1:contactInfo})',
  detail: 'function createContact(contactInfo: ContactInfo): Promise<string>',
  docs: 'Creates a new contact or updates an existing contact.',
};

const emailContact = {
  name: 'emailContact',
  kind: K.Method,
  snippet: 'emailContact(${1:emailId}, ${1:contactId})',
  detail: 'function emailContact(emailId: string, toContact: string, [options: TriggeredEmailOptions]): Promise<void>',
  docs: 'Sends a Triggered Email to the contact.',
};

const listFronend = createCompletionList([
  createContact,
  emailContact,
]);

const listBackend = createCompletionList([
  createContact,
  emailContact,
  {
    name: 'getContactById',
    kind: K.Method,
    snippet: 'getContactById(${1:contactId})',
    detail: 'function getContactById(contactId: string): Promise<ContactInfo>',
    docs: 'Gets an existing contact by ID.',
  },
  {
    name: 'updateContact',
    kind: K.Method,
    snippet: 'updateContact(${1:contactId}, ${2:contactInfo})',
    detail: 'function updateContact(contactId: string, contactInfo: ContactInfo): Promise<void>',
    docs: 'Updates an existing contact.',
  },
  {
    name: 'notifications',
    kind: K.Property,
    docs: 'The Notifications API is used to send notifications to the site owner and contributors.',
  },
  {
    name: 'tasks',
    kind: K.Property,
    docs: 'The Tasks API is used to manage a site\'s tasks.',
  },
  {
    name: 'workflows',
    kind: K.Property,
    docs: 'The functionality for working with your site\'s workflows from backend code.',
  },
]);

// TODO:
// const notificationsList = createCompletionList([]);
// const tasksList = createCompletionList([]);
// const workflowsList = createCompletionList([]);

export default {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixCRM.')) {
      return isBackend(doc.uri.path) ? listBackend : listFronend;
    }
  },
};
