import deepFreeze from 'deep-freeze';
import { mapStateToProps } from '../../../../components/Table/containers/tableContainer';
import mockedState from '../../../../../__tests-utils__/mockedState';

deepFreeze(mockedState);

describe('Component Table: container', () => {
  test('mapStateToProps', () => {
    const expectedProps = ['players'];
    const props = mapStateToProps(mockedState);
    Object.keys(props).forEach((key) => {
      expect(expectedProps).toContain(key);
      const isArray = Array.isArray(props[key]);
      expect(isArray).toBeTruthy();
    });
  });
});
