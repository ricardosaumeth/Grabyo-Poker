import * as actionTypes from '../actions/actions';

const initialState = {
  deck: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_DECK:
      return {
        ...state,
        deck: {
          ...state.deck,
          cardsDeck: action.payload
        }
      };

    case actionTypes.ALLOCATE_PLAYER_HANDS:
      return {
        ...state,
        deck: {
          ...state.deck,
          allocatedDeck: action.payload
        }
      };

    default:
      return state;
  }
};

export default reducer;
