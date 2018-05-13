import * as actions from '../../../modules/app/actions';
import { SET_NAME_SEARCH, SET_POSITION_SEARCH , SET_AGE_SEARCH } from '../../../modules/app/types';

describe('Module app: actions', () => {
  test('setNameSearch', () => {
    const search = 'test';
    const expected = {
      type: SET_NAME_SEARCH,
      search,
    };
    const action = actions.setNameSearch(search);
    expect(action).toEqual(expected);
  });
  test('setPositionSearch', () => {
    const search = 'test';
    const expected = {
      type: SET_POSITION_SEARCH,
      search,
    };
    const action = actions.setPositionSearch(search);
    expect(action).toEqual(expected);
  });
  test('setAgeSearch', () => {
    const search = 'test';
    const expected = {
      type: SET_AGE_SEARCH,
      search,
    };
    const action = actions.setAgeSearch(search);
    expect(action).toEqual(expected);
  });
});
