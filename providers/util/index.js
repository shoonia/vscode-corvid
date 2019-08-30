const vs = require('vscode');

module.exports.createCompletionList = function (list) {
  return list.map(({ name, kind }) => {
    return new vs.CompletionItem(name, kind);
  });
};
