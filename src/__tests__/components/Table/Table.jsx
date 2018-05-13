import React from 'react';
import { shallow } from 'enzyme';
import mockedState from '../../../__tests-utils__/mockedState';
import Table from '../../../components/Table/Table';
import TableHead from '../../../components/Table/components/TableHead';
import TableRow from '../../../components/Table/components/TableRow';

describe('Component Table', () => {
  describe('render', () => {
    test('should have one TableHead and one TableRow per player', () => {
      const { players } = mockedState.player;
      const wrapper = shallow(<Table players={players} />);
      expect(wrapper.find(TableHead).length).toBe(1);
      expect(wrapper.find(TableRow).length).toBe(players.length);
    });
  });
});
