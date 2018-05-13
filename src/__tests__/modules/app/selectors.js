import deepFreeze from 'deep-freeze';
import mockedState from '../../../__tests-utils__/mockedState';
import {
  nameSearchSelector,
  ageSearchSelector,
  positionSearchSelector,
} from '../../../modules/app/selectors';

deepFreeze(mockedState);

describe('Module app: selectors', () => {
  test('nameSearchSelector', () => {
    const nameSearch = nameSearchSelector(mockedState);
    expect(nameSearch).toBe(mockedState.app.nameSearch);
  });
  test('positionSearchSelector', () => {
    const positionSearch = positionSearchSelector(mockedState);
    expect(positionSearch).toBe(mockedState.app.positionSearch);
  });
  test('ageSearchSelector', () => {
    const ageSearch = ageSearchSelector(mockedState);
    expect(ageSearch).toBe(mockedState.app.ageSearch);
  });
});
