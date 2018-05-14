import React from 'react';
import { shallow } from 'enzyme';
import SearchName from '../../../../components/ToolBar/components/SearchName';

describe('Component SearchName', () => {
  const mockedProps = {
    searchTerm: 'david',
    onChange: jest.fn(),
  };
  beforeEach(jest.clearAllMocks);
  describe('render', () => {
    test('should render an input', () => {
      const wrapper = shallow(<SearchName {...mockedProps} />);
      expect(wrapper.find('input').length).toBe(1);
    });
  });
  describe('onChange', () => {
    test('should call onChange prop if the value doesn\'t have numbers', () => {
      const wrapper = shallow(<SearchName {...mockedProps} />);
      wrapper.find('input').props().onChange({ target: { value: 'dav' } });
      expect(mockedProps.onChange).toHaveBeenCalled();
    });
    test('should not call onChange prop if the value has numbers', () => {
      const wrapper = shallow(<SearchName {...mockedProps} />);
      wrapper.find('input').props().onChange({ target: { value: 'dav34' } });
      expect(mockedProps.onChange).not.toHaveBeenCalled();
    });
  });
});
