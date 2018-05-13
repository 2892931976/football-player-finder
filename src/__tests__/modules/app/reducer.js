import deepFreeze from 'deep-freeze';
import { initialState, reducer } from '../../../modules/app';
import { SET_NAME_SEARCH, SET_POSITION_SEARCH , SET_AGE_SEARCH } from '../../../modules/app/types';

deepFreeze(initialState);
describe('Module app: reducer', () => {
  test('initialState', () => {
    const state = reducer();
    expect(state).toEqual(initialState);
  });
  test('SET_NAME_SEARCH', () => {
    const expected = { ...initialState, nameSearch: 'test' };
    const action = { type: SET_NAME_SEARCH, search: 'test' };
    const state = reducer(initialState, action);
    expect(state).toEqual(expected);
  });
  test('SET_POSITION_SEARCH', () => {
    const expected = { ...initialState, positionSearch: 'test' };
    const action = { type: SET_POSITION_SEARCH, search: 'test' };
    const state = reducer(initialState, action);
    expect(state).toEqual(expected);
  });
  test('SET_AGE_SEARCH', () => {
    const expected = { ...initialState, ageSearch: 'test' };
    const action = { type: SET_AGE_SEARCH, search: 'test' };
    const state = reducer(initialState, action);
    expect(state).toEqual(expected);
  });
});
