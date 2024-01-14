const CHANGE_FILTER = 'CHANGE_FILTER';
const SORT_LOW_PRICE = 'SORT_LOW_PRICE';
const SORT_HIGHT_SPEED = 'SORT_HIGHT_SPEED';
const SORT_OPTIMAL = 'SORT_OPTIMAL';
const ADD_SEARCH_ID = 'ADD_SEARCH_ID';
const ADD_TICKETS = 'ADD_TICKETS';

function reducer(state, action) {
  console.log('reducer state', state, action);
  switch (action.type) {
    case CHANGE_FILTER: {
      let newStateFilter = JSON.parse(JSON.stringify(state.filter));
      const trueCount = Object.entries(newStateFilter).reduce((count, [key, value]) => {
        if (value === true) {
          return count + 1;
        }
        return count;
      }, 0);
      const falseField = Object.entries(newStateFilter).find(([key, value]) => value === false && key !== 'all');
      console.log(trueCount, falseField);
      if (action.payload.field === 'all' && !state.filter.all) {
        for (let key in newStateFilter) {
          newStateFilter[key] = true;
        }
      } else if (action.payload.field === 'all' && state.filter.all) {
        for (let key in newStateFilter) {
          newStateFilter[key] = false;
        }
      } else if (state.filter.all && action.payload.field !== 'all') {
        newStateFilter = { ...newStateFilter, all: false, [action.payload.field]: !state.filter[action.payload.field] };
      } else if (trueCount === 3 && falseField[0] === action.payload.field) {
        newStateFilter = { ...newStateFilter, all: true, [action.payload.field]: !state.filter[action.payload.field] };
      } else {
        newStateFilter = { ...newStateFilter, [action.payload.field]: !state.filter[action.payload.field] };
      }
      return { ...state, filter: newStateFilter };
    }
    case SORT_LOW_PRICE:
      return { ...state, sorted: 'lowPrice' };
    case SORT_HIGHT_SPEED:
      return { ...state, sorted: 'hightSpeed' };
    case SORT_OPTIMAL:
      return { ...state, sorted: 'optimal' };
    case ADD_SEARCH_ID:
      console.log('action searchid', action);
      return { ...state, searchId: action.payload.searchId };
    case ADD_TICKETS:
      console.log('action addTickets', action);
      return { ...state, tickets: action.payload.tickets };
    default:
      return state;
  }
}

export default reducer;
