import React from 'react';
import { shallow } from 'enzyme';
import App from '../../../components/App/App';
import HeaderBar from '../../../components/HeaderBar';
import ToolBar from '../../../components/ToolBar';
import Table from '../../../components/Table';

describe('Component App', () => {
  beforeEach(jest.clearAllMocks);
  const mockedProps = {
    fetchPlayers: jest.fn(),
  };
  describe('render', () => {
    test('should have a HeaderBar, a ToolBar and a Table components', () => {
      const wrapper = shallow(<App {...mockedProps} />);
      expect(wrapper.find(HeaderBar).length).toBe(1);
      expect(wrapper.find(ToolBar).length).toBe(1);
      expect(wrapper.find(Table).length).toBe(1);
    });
  });
  describe('componentDidMount', () => {
    test('should call fetchPlayers in componentDidMount', () => {
      shallow(<App {...mockedProps} />);
      expect(mockedProps.fetchPlayers).toHaveBeenCalled();
    });
  });
});
