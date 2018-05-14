import React from 'react';
import { shallow } from 'enzyme';
import HeaderBar from '../../../components/HeaderBar';

describe('Component HeaderBar', () => {
  describe('render', () => {
    test('should have a nav element', () => {
      const wrapper = shallow(<HeaderBar />);
      expect(wrapper.find('nav').length).toBe(1);
    });
  });
});
