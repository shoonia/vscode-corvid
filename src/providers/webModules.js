import { existsSync, promises } from 'fs';
import { join, extname } from 'path';

import { createCompletionList, resolve } from '../util';

const { readdir, lstat } = promises;

const getItems = async (path) => {
  const items = [];

  if (existsSync(path)) {
    const files = await readdir(path);

    for (const file of files) {
      const filePath = join(path, file);
      const status = await lstat(filePath);
      const name = filePath.slice(path.length + 1);

      if (status.isDirectory()) {
        items.push({
          name,
          kind: 18,
        });

      } else if (extname(file) === '.jsw') {
        items.push({
          name,
          kind: 16,
          detail: 'Corvid Web Module',
        });
      }
    }
  }

  return items;
};

export const jsw = {
  async provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);
    const match = /^(?:import.+)(?:['"])(backend\/.*)/m.exec(prefix);

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
