import vs from 'vscode';

const IS_BACKEND = /(.+)src\/backend\/(.+)\.jsw?$/;

export const K = vs.CompletionItemKind;

export function createCompletionList(list) {
  return list.map(({ name, kind }) => {
    return new vs.CompletionItem(name, kind);
  });
}

export function isBackend(path) {
  return IS_BACKEND.test(path);
}
