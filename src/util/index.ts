import { join } from 'path';
import {
  type WorkspaceFolder,
  workspace,
  CompletionItem,
  MarkdownString,
  SnippetString,
} from 'vscode';

export interface IDescribeCompletionItem {
  name: string;
  kind: number;
  snippet?: string;
  detail?: string;
  docs?: string;
}

const BACKEND = /(.+)src\/backend\/(.+)\.jsw?$/;
const FRONTEND = /(.+)src\/(pages|public)\/(.+)\.js$/;

export const isBackend = (path: string): boolean => BACKEND.test(path);
export const isFrontend = (path: string): boolean => FRONTEND.test(path);
export const isString = (val: unknown): val is string => typeof val === 'string';
export const isObject = (val: unknown): val is Record<string, unknown> => typeof val === 'object' && val !== null;

export const createCompletionList = (list: IDescribeCompletionItem[]): CompletionItem[] => {
  return list.map((item) => {
    const completion = new CompletionItem(item.name, item.kind);

    if (isString(item.snippet)) {
      completion.insertText = new SnippetString(item.snippet);
    }

    if (isString(item.detail)) {
      completion.detail = item.detail;
    }

    if (isString(item.docs)) {
      completion.documentation = new MarkdownString(item.docs);
    }

    return completion;
  });
};

export const resolve = (...path: string[]): string => {
  const folders = workspace.workspaceFolders;

  if (Array.isArray(folders)) {
    const [root]: WorkspaceFolder[] = folders;

    return join(root.uri.fsPath, ...path);
  }

  return '';
};
