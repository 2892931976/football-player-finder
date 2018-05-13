import update from 'immutability-helper';
import { SET_PLAYERS } from './types';

export const initialState = {
  players: [],
};

export const reducer = (state = initialState, { type, ...payload }) => {
  switch (type) {
    case SET_PLAYERS: {
      return update(state, {
        players: { $set: payload.data },
      });
    }
    default:
      return state;
  }
};
