import { languages } from 'vscode';

import modules from './modules';
import roles from './roles';

function register(provider, trigger = '.') {
  return languages.registerCompletionItemProvider(
    { scheme: 'file', language: 'javascript' },
    provider,
    trigger,
  );
}

export default [
  register(modules, '.'),
  register(roles, '#'),
];
