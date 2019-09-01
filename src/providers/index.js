import { languages } from 'vscode';

import modules from './modules';
import Users from './Users';
import wixCRM from './wixCRM';
import wixUsers from './wixUsers';
import wixMarketing from './wixMarketing';
import wixWindow from './wixWindow';
import wixStorage from './wixStorage';
import wixData from './wixData';
import wixLocation from './wixLocation';
import wixSite from './wixSite';
import wixStores from './wixStores';
import wixBookings from './wixBookings';

function register(provider) {
  return languages.registerCompletionItemProvider(
    { scheme: 'file', language: 'javascript' },
    provider,
    '.',
  );
}

export default [
  register(modules),
  register(Users),
  register(wixCRM),
  register(wixUsers),
  register(wixMarketing),
  register(wixWindow),
  register(wixStorage),
  register(wixData),
  register(wixLocation),
  register(wixSite),
  register(wixStores),
  register(wixBookings),
];
