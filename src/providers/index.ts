import {
  type CompletionItemProvider,
  type Disposable,
  languages,
  workspace,
} from 'vscode';

import { modules } from './modules';
import { jsw } from './webModules';

const config = workspace.getConfiguration('velo.autocomplete', null);

const register = (provider: CompletionItemProvider, trigger: string) => {
  return languages.registerCompletionItemProvider(
    { scheme: 'file', language: 'javascript' },
    provider,
    trigger,
  );
};

export const getProviders = (): Disposable[] => {
  const providers: Disposable[] = [];

  if (config.get('import')) {
    providers.push(register(modules, ' '));
  }

  if (config.get('jsw')) {
    providers.push(register(jsw, '/'));
  }

  return providers;
};
