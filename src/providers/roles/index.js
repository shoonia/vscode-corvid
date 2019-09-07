import fs from 'fs';

import {
  K,
  notHas,
  isFrontend,
  createCompletionList,
} from '../util';

const cache = new Map();

function getFileUpdatedDate(path) {
  try {
    const stats = fs.statSync(path);
    return stats.mtime.getTime();
  } catch (error) {
    return null;
  }
}

function readFile(name) {
  try {
    return fs.readFileSync(name, 'utf8');
  } catch (error) {
    return null;
  }
}

function parseBash64(b64) {
  try {
    return Buffer.from(b64, 'base64').toString('utf8');
  } catch (error) {
    return null;
  }
}

function parseJSON(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    return null;
  }
}

function getCompletions(wixFile, ts) {
  if (cache.has(wixFile)) {
    const data = cache.get(wixFile);

    if (data.ts === ts) {
      return data.completions;
    }
  }

  const file = readFile(wixFile);

  if (file === null) {
    return;
  }

  const json = parseJSON(file);

  if (
    json === null ||
    notHas(json, 'content') ||
    notHas(json.content, 'content')
  ) {
    return;
  }

  const data = parseBash64(json.content.content);

  if (data === null) {
    return;
  }

  const obj = parseJSON(data);

  if (
    obj === null ||
    notHas(obj, 'data') ||
    notHas(obj.data, 'connections_data')
  ) {
    return;
  }
  try {
    const roles = Object
      .values(obj.data.connections_data)
      .map((elem) => elem.items[0].role)
      .filter(Boolean)
      .map((name) => ({ name, kind: K.Class }));

    const completions = createCompletionList(roles);

    cache.set(wixFile, { completions, ts });

    return completions;
  } catch (error) {
    cache.delete(wixFile);
  }

  return null;
}

export default {
  provideCompletionItems(doc, position) {
    if (!isFrontend(doc.uri.path)) {
      return;
    }

    const prefix = doc.lineAt(position).text.substr(0, position.character).trim();

    if (/^[^$(a-z)+]\(['"]#[a-z\d]+['"]\)/i.test(prefix)) {
      return;
    }

    // TODO: find better way
    const wixFile = doc.fileName.slice(0, -2) + 'wix';

    if (!fs.existsSync(wixFile)) {
      return;
    }

    const ts = getFileUpdatedDate(wixFile);

    if (typeof ts !== 'number') {
      return;
    }

    const completions = getCompletions(wixFile, ts);

    if (Array.isArray(completions)) {
      return completions;
    }
  },
};
