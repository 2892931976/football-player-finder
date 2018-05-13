import { mapDispatchToProps } from '../../../../components/App/containers/appContainer';

describe('Component App: container', () => {
  test('mapDispatchToProps', () => {
    const expectedFunctions = ['fetchPlayers'];
    const props = mapDispatchToProps({});
    Object.keys(props).forEach((func) => {
      expect(expectedFunctions).toContain(func);
      expect(typeof props[func]).toBe('function');
    });
  });
});
