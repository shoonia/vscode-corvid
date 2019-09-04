import vs from 'vscode';

const IS_BACKEND = /(.+)src\/backend\/(.+)\.jsw?$/;
const IS_FRONTEND = /(.+)src\/(pages|lightboxes|public)\/(.+)\.js$/;
const hasProperty = Object.prototype.hasOwnProperty;

export const K = vs.CompletionItemKind;

export function createCompletionList(list) {
  return list.map(({ name, kind }) => new vs.CompletionItem(name, kind));
}

export const has = (obj, key) => obj != null && hasProperty.call(obj, key);
export const notHas = (obj, key) => !has(obj, key);

export const isBackend = (path) => IS_BACKEND.test(path);
export const isFrontend = (path) => IS_FRONTEND.test(path);
