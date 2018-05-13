import {
  SET_NAME_SEARCH,
  SET_POSITION_SEARCH,
  SET_AGE_SEARCH,
} from './types';

export const setNameSearch = search => ({
  type: SET_NAME_SEARCH,
  search,
});

export const setPositionSearch = search => ({
  type: SET_POSITION_SEARCH,
  search,
});

export const setAgeSearch = search => ({
  type: SET_AGE_SEARCH,
  search,
});
