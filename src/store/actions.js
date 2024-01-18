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
export const setIsLoading = () => {
  return { type: 'SET_IS_LOADING' };
};
export const getTicketsAction = () => {
  return (dispatch) => {
    getSearchId().then(async (id) => {
      let stop = false;
      do {
        const res = await getTickets(id.searchId);
        if (res) {
          dispatch({ type: 'ADD_TICKETS', payload: res.tickets });
          stop = res.stop;
          if (stop) {
            dispatch(setIsLoading());
          }
        }
      } while (!stop);
    });
  };
};
