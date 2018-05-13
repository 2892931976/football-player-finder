import { combineReducers } from 'redux';
import { reducer as app, actions as appActions, selectors as appSelectors } from './app';
import {
  reducer as player,
  actions as playerActions,
  effects as playerEffects,
  selectors as playerSelectors,
} from './player';

export const actions = {
  app: appActions,
  player: playerActions,
};

export const effects = {
  player: playerEffects,
};

export const selectors = {
  app: appSelectors,
  player: playerSelectors,
};

export default combineReducers({
  app,
  player,
});
