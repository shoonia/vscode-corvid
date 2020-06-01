import { join } from 'path';
import {
  workspace,
  CompletionItem,
  SnippetString,
  MarkdownString,
} from 'vscode';

export interface DescribeCompletionItem {
  name: string;
  kind: number;
  snippet?: string;
  detail?: string;
  docs?: string;
}

const BACKEND = /(.+)src\/backend\/(.+)\.jsw?$/;
const FRONTEND = /(.+)src\/(pages|lightboxes|public)\/(.+)\.js$/;

export const isBackend = (path: string) => BACKEND.test(path);
export const isFrontend = (path: string) => FRONTEND.test(path);
export const isString = (value: unknown) => typeof value === 'string';
export const isObject = (value: unknown) => value !== null && typeof value === 'object';

export const createCompletionList = (list: DescribeCompletionItem[]) => {
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

export const resolve = (...path: string[]) => {
  const folders = workspace.workspaceFolders;

  if (Array.isArray(folders)) {
    const [root] = folders;

    return join(root.uri.fsPath, ...path);
  }

  return '';
};
