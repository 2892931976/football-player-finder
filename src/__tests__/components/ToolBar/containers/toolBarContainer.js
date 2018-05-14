import deepFreeze from 'deep-freeze';
import { setAgeSearch, setPositionSearch, setNameSearch } from '../../../../modules/app/actions';
import { mapStateToProps, mapDispatchToProps } from '../../../../components/ToolBar/containers/toolBarContainer';
import mockedState from '../../../../../__tests-utils__/mockedState';

deepFreeze(mockedState);

describe('Component Table: container', () => {
  test('mapStateToProps', () => {
    const expectedProps = ['searchName', 'searchPosition', 'searchAge'];
    const props = mapStateToProps(mockedState);
    Object.keys(props).forEach((key) => {
      expect(expectedProps).toContain(key);
      expect(typeof props[key]).toBe('string');
    });
  });
  test('mapDispatchToProps', () => {
    const expectedFunctions = ['setSearchName', 'setSearchPosition', 'setSearchAge'];
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    Object.keys(props).forEach((func) => {
      expect(expectedFunctions).toContain(func);
      expect(typeof props[func]).toBe('function');
    });
    props.setSearchName('test');
    expect(dispatch).toHaveBeenCalledWith(setNameSearch('test'));
    dispatch.mockClear();
    props.setSearchAge('test');
    expect(dispatch).toHaveBeenCalledWith(setAgeSearch('test'));
    dispatch.mockClear();
    props.setSearchPosition('test');
    expect(dispatch).toHaveBeenCalledWith(setPositionSearch('test'));
  });
});
