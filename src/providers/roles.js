import { statSync, readFileSync, existsSync } from 'fs';
import { CompletionItemKind } from 'vscode';

import { isFrontend, createCompletionList } from '../util';

const { Class } = CompletionItemKind;
const cache = new Map();

const getFileUpdatedTime = (path) => {
  try {
    return statSync(path).mtime.getTime();
  } catch (error) {
    return null;
  }
};

const getCompletions = (filePath, timestamp) => {
  if (cache.has(filePath)) {
    const data = cache.get(filePath);

    if (data.timestamp === timestamp) {
      return data.completions;
    }
  }
  try {
    const file = readFileSync(filePath, 'utf8');
    const { content } = JSON.parse(file);
    const json = Buffer.from(content.content, 'base64').toString('utf8');
    const { data } = JSON.parse(json);

    const items = Object.values(data.connections_data)
      .map((element) => {
        const [item] = element.items;

        return {
          kind: Class,
          name: item.role,
        };
      });

    const completions = createCompletionList(items);

    cache.set(filePath, { completions, timestamp });

    return completions;
  } catch (error) {
    cache.clear();
  }

  return null;
};

export const roles = {
  provideCompletionItems(doc, position) {
    if (!isFrontend(doc.uri.path)) {
      return;
    }

    const prefix = doc.lineAt(position).text.substr(0, position.character).trim();

    if (/^[^$(a-z)+]\(['"`]#[a-z\d]+['"`]\)/i.test(prefix)) {
      return;
    }

    const filePath = doc.fileName.slice(0, -2).concat('wix');

    if (!existsSync(filePath)) {
      return;
    }

    const timestamp = getFileUpdatedTime(filePath);

    if (typeof timestamp !== 'number') {
      return;
    }

    const completions = getCompletions(filePath, timestamp);

    if (Array.isArray(completions)) {
      return completions;
    }
  },
};
