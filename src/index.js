window.initExampleService = (props) => {
  const {
    idContainer, injectReducer, theme,
  } = props;
  window.cirrentModuleContainerId = idContainer;
  import('./bootstrap')
    .then(() => window.renderExampleService({ injectReducer, theme }))
    .catch((e) => {
      console.log(e)
    });
};
