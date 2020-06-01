import { ExtensionContext } from 'vscode';
import { getProviders } from './providers';

export function activate(context: ExtensionContext) {
  const providers = getProviders();

  context.subscriptions.push(...providers);
}
