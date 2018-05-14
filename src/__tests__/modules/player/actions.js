import * as actions from '../../../modules/player/actions';
import { SET_PLAYERS } from '../../../modules/player/types';
import mockedData from '../../../../__tests-utils__/mockedPlayers';

describe('Module player: actions', () => {
  test('setPlayers', () => {
    const expected = {
      type: SET_PLAYERS,
      data: mockedData,
    };
    const action = actions.setPlayers(mockedData);
    expect(action).toEqual(expected);
  });
});
