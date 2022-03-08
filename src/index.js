import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import serviceMenu from './data/serviceMenu';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './data/routes';

window.renderExampleService = (containerId, history, user, setServiceMenu) => {
  setServiceMenu(serviceMenu, routes);
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App user={user}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById(containerId)
  );
};

window.unmountExampleService = () => {
  //stop all async code here
};


