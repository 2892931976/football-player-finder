import api from '../../../services/api';
import * as actions from '../../../modules/player/actions';
import * as effects from '../../../modules/player/effects';
import mockedData from '../../../__tests-utils__/mockedPlayers';

const mockedApi = jest.spyOn(api, 'getAll');
mockedApi.mockImplementation(() => mockedData);

describe('Module player: effects', () => {
  test('fetchPlayers', async () => {
    const effect = effects.fetchPlayers();
    expect(typeof effect).toBe('function');
    const dispatch = jest.fn();
    await effect(dispatch);
    expect(mockedApi).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(actions.setPlayers(mockedData));
  });
});
