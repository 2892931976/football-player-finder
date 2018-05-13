/* eslint-disable import/prefer-default-export */
import api from '../../services/api';
import { setPlayers } from './actions';

export const fetchPlayers = () => async (dispatch) => {
  const data = await api.getAll();
  dispatch(setPlayers(data));
};
