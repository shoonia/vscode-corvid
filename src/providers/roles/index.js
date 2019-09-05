import fs from 'fs';
import { isError } from 'util';

import {
  K,
  notHas,
  isFrontend,
  createCompletionList,
} from '../util';

function readFile(name) {
  try {
    return fs.readFileSync(name, 'utf8');
  } catch (error) {
    return error;
  }
}

function parseBash64(b64) {
  try {
    return Buffer.from(b64, 'base64').toString('utf8');
  } catch (error) {
    return error;
  }
}

function parseJSON(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    return error;
  }
}

function getRoles(wixFile) {
  const file = readFile(wixFile);

  if (isError(file)) {
    return;
  }

  const json = parseJSON(file);

  if (
    notHas(json, 'content') ||
    notHas(json.content, 'content')
  ) {
    return;
  }

  const data = parseBash64(json.content.content);

  if (isError(data)) {
    return;
  }

  const obj = parseJSON(data);

  if (
    isError(obj) ||
    notHas(obj, 'data') ||
    notHas(obj.data, 'connections_data')
  ) {
    return;
  }

  try {
    return Object
      .values(obj.data.connections_data)
      .map((elem) => elem.items[0].role)
      .filter(Boolean);
  } catch (error) { /**/ }

  return;
}

export default {
  provideCompletionItems(doc, position) {
    if (!isFrontend(doc.uri.path)) return;

    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (prefix.startsWith('import')) {
      return; // [HOT FIX]
    }

    // TODO: find better way
    const wixFile = doc.fileName.slice(0, -2) + 'wix';

    if (!fs.existsSync(wixFile)) {
      return;
    }

    const roles = getRoles(wixFile);

    if (!Array.isArray(roles)) {
      return;
    }

    return createCompletionList(
      roles.map(
        (name) => ({ name, kind: K.Class }),
      ),
    );
  },
};
