import { readdirSync, lstatSync } from 'fs';
import { join, extname } from 'path';
import slash from 'slash';

import { createCompletionList, resolve } from '../util';

const isJsw = (path) => extname(path) === '.jsw';
const isDir = (path) => lstatSync(path).isDirectory();

const getItems = (path) => {
  const fileList = [];
  const files = readdirSync(path);

  files.forEach((file) => {
    const filePath = join(path, file);
    const name = filePath.slice(path.length + 1);

    if (isJsw(file)) {
      fileList.push({
        name: slash(name),
        kind: 16,
        detail: 'Corvid Web Module',
      });
    } else if (isDir(filePath)) {
      fileList.push({
        name: slash(name),
        kind: 18,
      });
    }
  });

  return fileList;
};

export const jsw = {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);
    const match = /^(?:import.+)(?:['"])(backend\/.*)/m.exec(prefix);

    if (Array.isArray(match)) {
      try {
        const dir = match[1].split('/').slice(0, -1).join('/');
        const path = resolve('src', dir);
        const items = getItems(path);

        return createCompletionList(items);
      } catch (error) { /**/ }
    }
  },
};
