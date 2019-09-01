const vs = require('vscode');

const IS_BACKEND = /(.+)src\/backend\/(.+)\.jsw?$/;

module.exports.createCompletionList = function (list) {
  return list.map(({ name, kind }) => {
    return new vs.CompletionItem(name, kind);
  });
};

module.exports.isBackend = function (path) {
  return IS_BACKEND.test(path);
};
