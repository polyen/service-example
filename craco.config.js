const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

module.exports = {
  plugins: [
    {
      plugin: require("craco-module-federation"),
    },
  ],
  webpack: {
    plugins: {
      add: [new ExternalTemplateRemotesPlugin()],
      remove: ["ModuleScopePlugin"],
    },
  },
};
