import React from 'react';
import { shallow } from 'enzyme';
import PositionSelect from '../../../../components/ToolBar/components/PositionSelect';

describe('Component PositionSelect', () => {
  const mockedProps = {
    selected: '',
    onChange: jest.fn(),
  };
  beforeEach(jest.clearAllMocks);
  describe('render', () => {
    test('should have one select and eleven option elements', () => {
      const wrapper = shallow(<PositionSelect {...mockedProps} />);
      expect(wrapper.find('select').length).toBe(1);
      expect(wrapper.find('option').length).toBe(11);
    });
  });
  describe('onChange', () => {
    test('should call onChange prop when the select change', () => {
      const wrapper = shallow(<PositionSelect {...mockedProps} />);
      wrapper.find('select').props().onChange({ target: { value: 'Keeper' } });
      expect(mockedProps.onChange).toHaveBeenCalledWith('Keeper');
    });
  });
});
