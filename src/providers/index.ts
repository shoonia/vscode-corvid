import {
  languages,
  workspace,
  CompletionItemProvider,
  Disposable,
} from 'vscode';

import { modules } from './modules';
import { roles } from './roles';
import { jsw } from './webModules';

const config = workspace.getConfiguration('corvid.autocomplete', null);

const register = (provider: CompletionItemProvider, trigger: string) => {
  return languages.registerCompletionItemProvider(
    { scheme: 'file', language: 'javascript' },
    provider,
    trigger,
  );
};

export const getProviders = () => {
  const providers: Disposable[] = [];

  if (config.get('import')) {
    providers.push(register(modules, ' '));
  }
  if (config.get('$w')) {
    providers.push(register(roles, '#'));
  }
  if (config.get('jsw')) {
    providers.push(register(jsw, '/'));
  }

  return providers;
};
