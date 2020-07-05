import { RED_TIME_UPDATE, RedActionTypes } from "../actions";
import { RedState } from '../store';

const initialState: RedState = {
  time: "",
};

const red = (state = initialState, action: RedActionTypes):RedState => {
  switch (action.type) {
    case RED_TIME_UPDATE:
      return {...state, time: action.time };
    default:
      return state;
  }
};

export default red;
