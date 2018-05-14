import { mapDispatchToProps } from '../../../../components/App/containers/appContainer';

describe('Component App: container', () => {
  test('mapDispatchToProps', () => {
    const expectedFunctions = ['fetchPlayers'];
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    Object.keys(props).forEach((func) => {
      expect(expectedFunctions).toContain(func);
      expect(typeof props[func]).toBe('function');
    });
    props.fetchPlayers();
    expect(dispatch).toHaveBeenCalled();
  });
});
