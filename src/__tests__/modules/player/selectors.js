import deepFreeze from 'deep-freeze';
import mockedState from '../../../../__tests-utils__/mockedState';
import {
  playersSelector,
  playersFormattedSelector,
  playersByPositionSelector,
  playersByAgeSelector,
  playersFilteredSelector,
} from '../../../modules/player/selectors';

deepFreeze(mockedState);

describe('Module player: selectors', () => {
  test('playersSelector', () => {
    const players = playersSelector(mockedState);
    expect(players).toEqual(mockedState.player.players);
  });
  test('playersFormattedSelector', () => {
    const players = playersFormattedSelector(mockedState);
    players.forEach((player) => {
      expect(player.age).toBeDefined();
    });
    const anotherAppState = { ...mockedState.app, nameSearch: 'test' };
    const anotherPlayers = playersFormattedSelector({ ...mockedState, app: anotherAppState });
    // Checking memoize
    expect(anotherPlayers).toBe(players);
  });
  test('playersByPositionSelector', () => {
    const players = playersByPositionSelector(mockedState);
    players.forEach((player) => {
      expect(player.position).toBe(mockedState.app.positionSearch);
    });
    const anotherAppState = { ...mockedState.app, nameSearch: 'test' };
    const anotherPlayers = playersByPositionSelector({ ...mockedState, app: anotherAppState });
    // Checking memoize
    expect(anotherPlayers).toBe(players);
  });
  test('playersByAgeSelector', () => {
    const players = playersByAgeSelector(mockedState);
    players.forEach((player) => {
      expect(player.age).toBe(mockedState.app.ageSearch);
    });
    const anotherAppState = { ...mockedState.app, nameSearch: 'test' };
    const anotherPlayers = playersByAgeSelector({ ...mockedState, app: anotherAppState });
    // Checking memoize
    expect(anotherPlayers).toBe(players);
  });
  test('playersFilteredSelector', () => {
    const players = playersFilteredSelector(mockedState);
    players.forEach((player) => {
      expect(player.name.toLowerCase())
        .toMatch(new RegExp(mockedState.app.nameSearch.toLowerCase()));
    });
  });
});
