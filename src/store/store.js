import { createStore } from 'redux';

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
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
