import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';

import reducer from './reducer';

const initialState = {
  filter: {
    all: true,
    withoutTransfers: true,
    oneTransfer: true,
    twoTransfer: true,
    threeTransfer: true,
  },
  sorted: 'optimal',
  searchId: '1',
  isLoading: true,
  tickets: [],
  filterTickets: [],
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
