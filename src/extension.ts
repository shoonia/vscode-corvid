import type { ExtensionContext } from 'vscode';
import { getProviders } from './providers';

export function activate(context: ExtensionContext): void {
  const providers = getProviders();

  context.subscriptions.push(...providers);
}
