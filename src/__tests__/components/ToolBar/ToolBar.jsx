import React from 'react';
import { shallow } from 'enzyme';
import ToolBar from '../../../components/ToolBar/ToolBar';
import SearchName from '../../../components/ToolBar/components/SearchName';
import PositionSelect from '../../../components/ToolBar/components/PositionSelect';
import SearchAge from '../../../components/ToolBar/components/SearchAge';

describe('Component ToolBar', () => {
  describe('render', () => {
    const mockedProps = {
      searchName: 'david',
      searchPosition: 'Keeper',
      searchAge: '27',
      setSearchName: jest.fn(),
      setSearchPosition: jest.fn(),
      setSearchAge: jest.fn(),
    };
    beforeEach(jest.clearAllMocks);
    test('should have a SearchName, a PositionSelect and a SearchAge components', () => {
      const wrapper = shallow(<ToolBar {...mockedProps} />);
      expect(wrapper.find(SearchName).length).toBe(1);
      expect(wrapper.find(PositionSelect).length).toBe(1);
      expect(wrapper.find(SearchAge).length).toBe(1);
    });
  });
});
