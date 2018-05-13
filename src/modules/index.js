import { combineReducers } from 'redux';
import { reducer as app, actions as appActions } from './app';
import { reducer as player, actions as playerActions, effects as playerEffects } from './player';

export const actions = {
  app: appActions,
  player: playerActions,
};

export const effects = {
  player: playerEffects,
};

export const reducer = combineReducers({
  app,
  player,
});
