import axios from 'axios';
import players from '../../__tests-utils__/mockedPlayers';
import api from '../../services/api';

const mockedGet = jest.spyOn(axios, 'get');
mockedGet.mockImplementation(() => ({
  data: players,
}));

describe('Service api', () => {
  test('should call getAll and return an array of players', async () => {
    const data = await api.getAll();
    expect(data).toEqual(players);
  });
});
