const deps = require("./package.json").dependencies;

module.exports = {
  name: "module_ini",
  remotes: {
    framework: "framework@[frameworkUrl]/remoteEntry.js",
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
    "@mui/material": {
      singleton: true,
      requiredVersion: deps["@mui/material"],
    },
    "@mui/styles": {
      singleton: true,
      requiredVersion: deps["@mui/styles"],
    },
    "@emotion/react": {
      singleton: true,
      requiredVersion: deps["@emotion/react"],
    },
    "@amcharts/amcharts5": {
      singleton: true,
      requiredVersion: deps["@amcharts/amcharts5"],
    },
    "react-redux": {
      singleton: true,
      requiredVersion: deps["react-redux"],
    },
    "redux": {
      singleton: true,
      requiredVersion: deps["redux"],
    },
    "redux-saga": {
      singleton: true,
      requiredVersion: deps["redux-saga"],
    },
  },
};
