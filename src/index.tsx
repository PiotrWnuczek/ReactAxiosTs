import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import appReducer from 'store/appReducer';
import thunk from 'redux-thunk';
import App from 'App';
import 'index.css';

const persistConfig = { key: 'ReactAxiosTs', storage };
const persistedReducer = persistReducer(persistConfig, appReducer);

const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
