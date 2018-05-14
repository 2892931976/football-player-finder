/* eslint-disable import/prefer-default-export */
import { SET_PLAYERS } from './types';

export const setPlayers = data => ({
  type: SET_PLAYERS,
  data,
});
