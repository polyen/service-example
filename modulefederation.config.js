const deps = require("./package.json").dependencies;

module.exports = {
  name: "module_ini",
  remotes: {
    framework: "framework@[window.cirrentFrameworkUrl]/remoteEntry.js",
  },
  filename: 'remoteEntry.js',
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
