import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';

import reducer from './reducer';

const initialState = {
  filter: {
    all: false,
    withoutTransfers: false,
    oneTransfer: false,
    twoTransfer: false,
    threeTransfer: false,
  },
  sorted: 'lowPrice',
  searchId: '1',
  isLoading: false,
  tickets: [],
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
