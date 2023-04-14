import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import store from './_store/data-context';
import { DataContextProvider } from './_store/data-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // <Provider store={store}>
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
  // </Provider>

  <DataContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataContextProvider>
);

reportWebVitals();
