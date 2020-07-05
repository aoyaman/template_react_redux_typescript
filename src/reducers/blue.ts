import { INCREMENT_BLUE, DECREMENT_BLUE, BlueActionTypes } from "../actions";
import { BlueState } from '../store';

const initialState: BlueState = {
  count: 0,
};

const blue = (state = initialState, action: BlueActionTypes):BlueState => {
  switch (action.type) {
    case INCREMENT_BLUE:
    case DECREMENT_BLUE:
      return {...state, count: action.count };
    default:
      return state;
  }
};

export default blue;
