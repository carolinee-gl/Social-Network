
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';



  ReactDOM.render(
    // здесь может быть проблема в буд., стоит поменять теги 1 и 2 местами
    // можно потом удалить React.StrictMode
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>, 
    document.getElementById('root')
  );

