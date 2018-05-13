import deepFreeze from 'deep-freeze';
import { mapStateToProps } from '../../../../components/Table/containers/tableContainer';
import mockedState from '../../../../__tests-utils__/mockedState';

deepFreeze(mockedState);

describe('Component Table: container', () => {
  test('mapStateToProps', () => {
    const expectedProps = ['players'];
    const props = mapStateToProps(mockedState);
    Object.keys(props).forEach((func) => {
      expect(expectedProps).toContain(func);
      const isArray = Array.isArray(props[func]);
      expect(isArray).toBeTruthy();
    });
  });
});
