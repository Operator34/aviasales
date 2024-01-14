import { getSearchId, getTickets } from '../services/request-service';

export const changeFilter = (field) => {
  return { type: 'CHANGE_FILTER', payload: { field } };
};

export const onSortLowPrice = () => {
  return { type: 'SORT_LOW_PRICE' };
};

export const onSortHightSpeed = () => {
  return { type: 'SORT_HIGHT_SPEED' };
};

export const onSortOptimal = () => {
  return { type: 'SORT_OPTIMAL' };
};

// export const getSearchIdAction = () => {
//   return (dispatch) => {
//     getSearchId().then((res) => {
//       console.log(res);
//       dispatch({ type: 'ADD_SEARCH_ID', payload: res });
//     });
//   };
// };

export const getTicketsAction = () => {
  return (dispatch) => {
    getSearchId().then((id) => {
      console.log(id.searchId);
      getTickets(id.searchId).then((res) => {
        console.log(res);
        dispatch({ type: 'ADD_TICKETS', payload: res });
      });
    });
  };
};

// export const getTicketsAction = (id) => {
//   return (dispatch) => {
//     getTickets(id).then((res) => {
//       console.log(res);
//       dispatch({ type: 'ADD_TICKETS', payload: res });
//     });
//   };
// };
