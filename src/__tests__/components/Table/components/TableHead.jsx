import React from 'react';
import { shallow } from 'enzyme';
import TableHead from '../../../../components/Table/components/TableHead/TableHead';

describe('Component TableHead', () => {
  describe('render', () => {
    test('should have one thead element and six th', () => {
      const wrapper = shallow(<TableHead />);
      expect(wrapper.find('thead').length).toBe(1);
      expect(wrapper.find('th').length).toBe(6);
    });
  });
});
