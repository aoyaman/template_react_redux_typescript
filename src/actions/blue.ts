

import { Dispatch } from "redux";

import { AllState } from '../store';
import { INCREMENT_BLUE, DECREMENT_BLUE } from './index';

export const incrementBlue = () => (dispatch: Dispatch, getState: () => AllState) => {
  const { blue } = getState();

  dispatch({
    type: INCREMENT_BLUE,
    count: blue.count + 1,
  });
}


export const decrementBlue = () => (dispatch: Dispatch, getState: () => AllState) => {
  const { blue } = getState();

  dispatch({
    type: DECREMENT_BLUE,
    count: blue.count - 1,
  });
}
