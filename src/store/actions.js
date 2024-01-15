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
// export const getSearchIdAction = () => {
//   return (dispatch) => {
//     getSearchId().then((res) => {
//       console.log(res);
//       dispatch({ type: 'ADD_SEARCH_ID', payload: res });
//     });
//   };
// };

// export const getTicketsAction = () => {
//   return (dispatch) => {
//     getSearchId().then((id) => {
//       console.log(id.searchId);
//       let stop = false;
//       do {
//         getTickets(id.searchId).then((res) => {
//           console.log(res);
//           stop = res.stop;
//           dispatch({ type: 'ADD_TICKETS', payload: res });
//         });
//       } while (stop === true);
//     });
//   };
// };
export const getTicketsAction = () => {
  return (dispatch) => {
    getSearchId().then(async (id) => {
      console.log(id.searchId);
      let stop = false;

      do {
        const res = await getTickets(id.searchId);
        console.log(res);

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

// export const getTicketsAction = (id) => {
//   return (dispatch) => {
//     getTickets(id).then((res) => {
//       console.log(res);
//       dispatch({ type: 'ADD_TICKETS', payload: res });
//     });
//   };
// };
