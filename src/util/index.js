import { isString } from 'util';
import vscode from 'vscode';

const IS_BACKEND = /(.+)src\/backend\/(.+)\.jsw?$/;
const IS_FRONTEND = /(.+)src\/(pages|lightboxes|public)\/(.+)\.js$/;

export const isBackend = (path) => IS_BACKEND.test(path);
export const isFrontend = (path) => IS_FRONTEND.test(path);

export function createCompletionList(list) {
  return list.map((item) => {
    const completion = new vscode.CompletionItem(item.name, item.kind);

    if (isString(item.snippet)) {
      completion.insertText = new vscode.SnippetString(item.snippet);
    }
    if (isString(item.docs)) {
      completion.documentation = new vscode.MarkdownString(item.docs);
    }
    if (isString(item.detail)) {
      completion.detail = item.detail;
    }
    // if (Array.isArray(item.commitCharacters)) {
    //   completion.commitCharacters = item.commitCharacters;
    // }
    return completion;
  });
}
