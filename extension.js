const providers = require('./providers');

module.exports.activate = function (context) {
  context.subscriptions.push(providers);
};
