import { CompletionItemProvider } from 'vscode';
import { existsSync, promises, PathLike } from 'fs';
import { join, extname, basename } from 'path';

import {
  createCompletionList,
  resolve,
  DescribeCompletionItem
} from '../util';

const { readdir, lstat } = promises;

const getItems = async (path: string) => {
  const ext = '.jsw';
  const items: DescribeCompletionItem[] = [];

  if (existsSync(path)) {
    const files = await readdir(path);

    for (const name of files) {
      const filePath = join(path, name);
      const status = await lstat(filePath);

      if (status.isDirectory()) {
        items.push({
          name,
          kind: 18,
        });

      } else if (extname(name) === ext) {
        items.push({
          name: basename(name, ext),
          kind: 16,
          detail: name,
          docs: 'Corvid Web Module',
        });
      }
    }
  }

  return items;
};

export const jsw: CompletionItemProvider = {
  async provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);
    const match = /^(?:import.+['"])(backend\/.*)/m.exec(prefix);

    if (Array.isArray(match)) {
      try {
        const dir = match[1].split('/').slice(0, -1).join('/');
        const path = resolve('src', dir);
        const items = await getItems(path);

        return createCompletionList(items);
      } catch (error) { /**/ }
    }
  },
};
