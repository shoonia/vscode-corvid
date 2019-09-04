import { languages } from 'vscode';

import $w from './$w';
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
import wixPay from './wixPay';
import wixPaidPlans from './wixPaidPlans';
import roles from './roles';

function register(provider, trigger = '.') {
  return languages.registerCompletionItemProvider(
    { scheme: 'file', language: 'javascript' },
    provider,
    trigger,
  );
}

export default [
  register($w),
  register(roles, '#'),
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
  register(wixPay),
  register(wixPaidPlans),
];
