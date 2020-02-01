import { readdirSync } from 'fs';
import { join, extname } from 'path';
import slash from 'slash';

import { createCompletionList, resolve } from '../util';

function getFiles (path, ext) {
  const fileList = [];
  const files = readdirSync(path);

  files.forEach((file) => {
    const filePath = join(path, file);

    if (extname(file) === ext) {
      const name = filePath.slice(path.length + 1);

      fileList.push(slash(name));
    }
  });

  return fileList;
}

export const jsw = {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);
    const match = /^(?:import.+)(?:['"])(backend\/.*)/m.exec(prefix);

    if (Array.isArray(match)) {
      const path = resolve('src/backend');
      const files = getFiles(path, '.jsw');

      const items = files.map((name) => {
        return {
          name,
          kind: 16,
        };
      });

      return createCompletionList(items);
    }
  },
};
