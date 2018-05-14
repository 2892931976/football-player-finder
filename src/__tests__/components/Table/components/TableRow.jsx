import React from 'react';
import { shallow } from 'enzyme';
import mockedState from '../../../../../__tests-utils__/mockedState';
import TableRow from '../../../../components/Table/components/TableRow';

describe('Component TableRow', () => {
  describe('render', () => {
    test('should have one tr and six td', () => {
      const wrapper = shallow(<TableRow player={mockedState.player.players[0]} />);
      expect(wrapper.find('tr').length).toBe(1);
      expect(wrapper.find('td').length).toBe(6);
    });
  });
});
