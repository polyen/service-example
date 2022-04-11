import serviceMenu from './data/serviceMenu';


const getRemoteEntryUrl = () => {
  if (window.location.hostname === "console.cirrentsystems.com")
    return "https://consolev3.cirrentsystems.com";
  else return "https://consolev3.stg.cirrentsystems.com";
};

window.frameworkUrl = getRemoteEntryUrl();

window.initExampleService = (props) => {
  const {
    idContainer, registerSideMenu, injectReducer, theme,
  } = props;
  window.cirrentModuleContainerId = idContainer;
  registerSideMenu(serviceMenu);
  import('./bootstrap')
    .then(() => window.renderExampleService({ injectReducer, theme }))
    .catch((e) => {
      console.log(e)
    });
};
