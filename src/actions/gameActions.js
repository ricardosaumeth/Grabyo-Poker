import * as actionTypes from '../actions/actions';

export const onLoadDeck = deck => {
  return {
    type: actionTypes.LOAD_DECK,
    payload: deck
  };
};

export const allocatePlayerHands = deck => {
  return {
    type: actionTypes.ALLOCATE_PLAYER_HANDS,
    payload: deck
  };
};