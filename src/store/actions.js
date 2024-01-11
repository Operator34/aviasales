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
