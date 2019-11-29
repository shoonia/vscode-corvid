import { getProviders } from './providers';

export function activate(context) {
  context.subscriptions.push(getProviders());
}
