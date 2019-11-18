import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import App from './components/App';
import rootReducer from './reducers';
import router from './routes';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const render = () => {
  const app = (
    <BrowserRouter>
      <Provider store={store}>
        <CookiesProvider>
          <App>{router()}</App>
        </CookiesProvider>
      </Provider>
    </BrowserRouter>
  );

  ReactDOM.render(app, document.getElementById('root'));
};

render();

serviceWorker.unregister();
