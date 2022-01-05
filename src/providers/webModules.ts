import type { CompletionItemProvider } from 'vscode';
import { existsSync } from 'fs';
import { readdir, lstat} from 'fs/promises';
import { join, extname, basename } from 'path';

import {
  type IDescribeCompletionItem,
  createCompletionList,
  resolve,
} from '../util';

const getItems = async (match: RegExpExecArray, isJSW: boolean) => {
  const items: IDescribeCompletionItem[] = [];

  const dir = match[1].split('/').slice(0, -1);
  const path = resolve('src', ...dir);

  if (existsSync(path)) {
    const ext = isJSW ? '.jsw' : '.js';
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
          docs: isJSW ? 'Velo Web Modules' : 'Public Files',
        });
      }
    }
  }

  return items;
};

export const jsw: CompletionItemProvider = {
  async provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substring(0, position.character);
    const matchBack = /^(?:import.+['"])(backend\/.*)/m.exec(prefix);

    if (Array.isArray(matchBack)) {
      try {
        const items = await getItems(matchBack, true);

        return createCompletionList(items);
      } catch { /**/ }
    }

    const mathcPub = /^(?:import.+['"])(public\/.*)/m.exec(prefix);

    if (Array.isArray(mathcPub)) {
      try {
        const items = await getItems(mathcPub, false);

        return createCompletionList(items);
      } catch { /**/ }
    }
  },
};
