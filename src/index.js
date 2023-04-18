import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import { DarkModeContextProvider } from './context/darkModeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import metaStore from './store/metaStore';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={metaStore}>

    <React.StrictMode>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </React.StrictMode>
  </Provider>
);