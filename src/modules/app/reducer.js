import update from 'immutability-helper';
import {
  SET_NAME_SEARCH,
  SET_POSITION_SEARCH,
  SET_AGE_SEARCH,
} from './types';

export const initialState = {
  nameSearch: '',
  positionSearch: '',
  ageSearch: '',
};

export const reducer = (state = initialState, { type, ...payload }) => {
  switch (type) {
    case SET_NAME_SEARCH: {
      return update(state, {
        nameSearch: { $set: payload.search },
      });
    }
    case SET_POSITION_SEARCH: {
      return update(state, {
        positionSearch: { $set: payload.search },
      });
    }
    case SET_AGE_SEARCH: {
      return update(state, {
        ageSearch: { $set: payload.search },
      });
    }
    default:
      return state;
  }
};
