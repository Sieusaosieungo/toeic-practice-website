import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { PlatformProvider } from './context/platform';
import { Switch, Route } from 'react-router-dom';
import App from './components/App';
import Admin from './components/Admin';
import rootReducer from './reducers';
import router from './routes';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const render = () => {
  const userAgent = navigator.userAgent;

  const app = (
    <BrowserRouter>
      <Provider store={store}>
        <CookiesProvider>
          <PlatformProvider userAgent={userAgent}>
            {
              true ?
              // nếu là admin 
              <Admin>{"Admin"}</Admin> :
              //nếu là client
              <App>{router()}</App>
            }
          </PlatformProvider>
        </CookiesProvider>
      </Provider>
    </BrowserRouter>
  );

  ReactDOM.render(app, document.getElementById('root'));
};

render();

serviceWorker.unregister();
