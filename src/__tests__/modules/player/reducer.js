import deepFreeze from 'deep-freeze';
import { initialState, reducer } from '../../../modules/player';
import { SET_PLAYERS } from '../../../modules/player/types';
import mockedData from '../../../../__tests-utils__/mockedPlayers';

deepFreeze(initialState);

describe('Module player: reducer', () => {
  test('initialState', () => {
    const state = reducer();
    expect(state).toEqual(initialState);
  });
  test('SET_PLAYERS', () => {
    const expected = { ...initialState, players: mockedData };
    const action = { type: SET_PLAYERS, data: mockedData };
    const state = reducer(initialState, action);
    expect(state).toEqual(expected);
  });
});
