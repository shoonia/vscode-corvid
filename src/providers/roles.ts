import { existsSync, promises } from 'fs';
import { CompletionItemProvider } from 'vscode';
import { isFrontend, createCompletionList } from '../util';

interface IConnectData {
  data: {
    connections_data: {
      [key: string]: {
        items: Array<{
          role: string;
        }>;
      },
    };
  },
}

const { readFile, stat } = promises;
const cache = new Map();

const lastModifiedTime = async (path: string) => {
  try {
    const { mtimeMs } = await stat(path);

    return mtimeMs;
  } catch { /**/ }
};

const getCompletions = async (filePath: string) => {
  const mtimeMs = await lastModifiedTime(filePath);

  if (cache.has(filePath)) {
    const data = cache.get(filePath);

    if (data.mtimeMs === mtimeMs) {
      return data.completions;
    }
  }

  try {
    const file = await readFile(filePath, 'utf8');
    const { content } = JSON.parse(file);
    const json = Buffer.from(content.content, 'base64').toString('utf8');
    const { data } = JSON.parse(json) as IConnectData;

    const items = Object.values(data.connections_data)
      .map((element) => {
        const [item] = element.items;

        return {
          name: `#${item.role}`,
          kind: 6,
        };
      });

    const completions = createCompletionList(items);

    cache.set(filePath, { completions, mtimeMs });

    return completions;
  } catch {
    cache.clear();
  }
};

export const roles: CompletionItemProvider = {
  provideCompletionItems(doc, position) {
    if (!isFrontend(doc.uri.path)) {
      return;
    }

    const prefix = doc.lineAt(position).text.substr(0, position.character).trim();

    if (/^[^$(a-z)+]\(['"`]#[a-z\d]+['"`]\)/i.test(prefix)) {
      return;
    }

    const filePath = doc.fileName.slice(0, -2).concat('wix');

    if (existsSync(filePath)) {
      return getCompletions(filePath);
    }
  },
};
