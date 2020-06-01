import { join } from 'path';
import {
  workspace,
  CompletionItem,
  SnippetString,
  MarkdownString,
} from 'vscode';

const BACKEND = /(.+)src\/backend\/(.+)\.jsw?$/;
const FRONTEND = /(.+)src\/(pages|lightboxes|public)\/(.+)\.js$/;

export const isBackend = (path: string): boolean => BACKEND.test(path);
export const isFrontend = (path: string): boolean => FRONTEND.test(path);
export const isString = (value: unknown): boolean => typeof value === 'string';
export const isObject = (value: unknown): boolean => value !== null && typeof value === 'object';

export const createCompletionList = (list): CompletionItem[] => {
  return list.map((item) => {
    const completion = new CompletionItem(item.name, item.kind);

    if (isString(item.snippet)) {
      completion.insertText = new SnippetString(item.snippet);
    }
    if (isString(item.docs)) {
      completion.documentation = new MarkdownString(item.docs);
    }
    if (isString(item.detail)) {
      completion.detail = item.detail;
    }
    // if (Array.isArray(item.commitCharacters)) {
    //   completion.commitCharacters = item.commitCharacters;
    // }
    return completion;
  });
};

export const resolve = (...path: string[]): string => {
  const [root] = workspace.workspaceFolders;

  return join(root.uri.fsPath, ...path);
};