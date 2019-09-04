import { isString } from 'util';
import vs from 'vscode';

const IS_BACKEND = /(.+)src\/backend\/(.+)\.jsw?$/;
const IS_FRONTEND = /(.+)src\/(pages|lightboxes|public)\/(.+)\.js$/;
const hasProperty = Object.prototype.hasOwnProperty;

export const K = vs.CompletionItemKind;

export function createCompletionList(list) {
  return list.map((item) => {
    const completion = new vs.CompletionItem(item.name, item.kind);

    if (isString(item.snippet)) {
      completion.insertText = new vs.SnippetString(item.snippet);
    }
    if (isString(item.label)) {
      completion.label = item.label;
    }
    if (isString(item.detail)) {
      completion.detail = item.detail;
    }
    if (isString(item.docs)) {
      completion.documentation = new vs.MarkdownString(item.docs);
    }
    // if (Array.isArray(item.commitCharacters)) {
    //   completion.commitCharacters = item.commitCharacters;
    // }

    return completion;
  });
}

export const has = (obj, key) => obj != null && hasProperty.call(obj, key);
export const notHas = (obj, key) => !has(obj, key);

export const isBackend = (path) => IS_BACKEND.test(path);
export const isFrontend = (path) => IS_FRONTEND.test(path);
