import providers from './providers';

export function activate(context) {
  context.subscriptions.push(providers);
}
