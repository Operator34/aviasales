const CHANGE_FILTER = 'CHANGE_FILTER';
const SORT_LOW_PRICE = 'SORT_LOW_PRICE';
const SORT_HIGHT_SPEED = 'SORT_HIGHT_SPEED';
const SORT_OPTIMAL = 'SORT_OPTIMAL';
// const ADD_SEARCH_ID = 'ADD_SEARCH_ID';
const ADD_TICKETS = 'ADD_TICKETS';
const SET_IS_LOADING = 'SET_IS_LOADING';

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
    case SORT_LOW_PRICE: {
      const sortTickets = JSON.parse(JSON.stringify(state.tickets));
      sortTickets.sort((a, b) => a.price - b.price);
      return { ...state, sorted: 'lowPrice', tickets: sortTickets };
    }
    case SORT_HIGHT_SPEED: {
      const sortTickets = JSON.parse(JSON.stringify(state.tickets));
      sortTickets.sort((a, b) => {
        const durationA = a.segments.reduce((a, c) => a + c.duration, 0);
        const durationB = b.segments.reduce((a, c) => a + c.duration, 0);
        return durationA - durationB;
      });
      return { ...state, sorted: 'hightSpeed', tickets: sortTickets };
    }
    case SORT_OPTIMAL: {
      const sortTickets = JSON.parse(JSON.stringify(state.tickets));
      sortTickets.sort((a, b) => a.price - b.price);
      return { ...state, sorted: 'optimal', tickets: sortTickets };
    }

    // case ADD_SEARCH_ID:
    //   console.log('action searchid', action);
    //   return { ...state, searchId: action.payload.searchId };
    // case ADD_TICKETS:
    //   console.log('action addTickets', action);
    //   return { ...state, tickets: action.payload.tickets };
    case ADD_TICKETS:
      return { ...state, tickets: [...state.tickets, ...action.payload] };
    case SET_IS_LOADING:
      console.log('isLoading');
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
}

export default reducer;
