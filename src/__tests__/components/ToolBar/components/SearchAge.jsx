import React from 'react';
import { shallow } from 'enzyme';
import SearchAge from '../../../../components/ToolBar/components/SearchAge';

describe('Component SearchAge', () => {
  const mockedProps = {
    searchTerm: '27',
    onChange: jest.fn(),
  };
  beforeEach(jest.clearAllMocks);
  describe('render', () => {
    test('should render an input', () => {
      const wrapper = shallow(<SearchAge {...mockedProps} />);
      expect(wrapper.find('input').length).toBe(1);
    });
  });
  describe('onChange', () => {
    test('should call onChange prop if the value doesn\'t have letters', () => {
      const wrapper = shallow(<SearchAge {...mockedProps} />);
      wrapper.find('input').props().onChange({ target: { value: '21' } });
      expect(mockedProps.onChange).toHaveBeenCalled();
    });
    test('should not call onChange prop if the value has letters', () => {
      const wrapper = shallow(<SearchAge {...mockedProps} />);
      wrapper.find('input').props().onChange({ target: { value: '21le' } });
      expect(mockedProps.onChange).not.toHaveBeenCalled();
    });
    test('should call onChange 500ms after if the value is less than 18', (done) => {
      const wrapper = shallow(<SearchAge {...mockedProps} />);
      wrapper.find('input').props().onChange({ target: { value: '15' } });
      setTimeout(() => {
        expect(mockedProps.onChange).toHaveBeenCalledTimes(2);
        done();
      }, 600);
    });
    test('should call onChange 500ms after if the value is more than 40', (done) => {
      const wrapper = shallow(<SearchAge {...mockedProps} />);
      wrapper.find('input').props().onChange({ target: { value: '51' } });
      setTimeout(() => {
        expect(mockedProps.onChange).toHaveBeenCalledTimes(2);
        done();
      }, 600);
    });
  });
});
