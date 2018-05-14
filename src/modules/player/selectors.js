import { createSelector } from 'reselect';
import moment from 'moment';
import * as appSelectors from '../app/selectors';

export const playersSelector = state => state.player.players;

// Calculating age of each player
export const playersFormattedSelector = createSelector(
  playersSelector,
  players => players.map(player => ({
    ...player,
    age: !player.dateOfBirth ? '' : moment().diff(player.dateOfBirth, 'years').toString(),
  })),
);

// Filter by position
export const playersByPositionSelector = createSelector(
  playersFormattedSelector,
  appSelectors.positionSearchSelector,
  // Preventing null or undefined values
  (players, positionSearch) => (!positionSearch
    ? players
    : players
      .filter(player =>
        player.position && player.position.toLowerCase() === positionSearch.toLowerCase())),
);

// Filter by age
export const playersByAgeSelector = createSelector(
  playersByPositionSelector,
  appSelectors.ageSearchSelector,
  (players, ageSearch) => (!ageSearch
    ? players
    // Search from start of age
    : players
      .filter(player => player.age.slice(0, ageSearch.length) === ageSearch)),
);

// Filter by name
export const playersFilteredSelector = createSelector(
  playersByAgeSelector,
  appSelectors.nameSearchSelector,
  (players, nameSearch) => (!nameSearch
    ? players
    : players
      .filter(player =>
        player.name && player.name.toLowerCase().includes(nameSearch.toLowerCase()))),
);
