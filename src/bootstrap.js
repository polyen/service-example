import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

window.renderExampleService = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter basename="example">
        <App/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById(window.cirrentModuleContainerId),
  );
};

window.unmountExampleService = () => {
};
