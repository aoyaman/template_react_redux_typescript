

import { Dispatch } from "redux";

import { AllState } from '../store';
import { TOGGLE_PAGE } from './index';

export const togglePage = () => (dispatch: Dispatch, getState: () => AllState) => {
  const { app } = getState();

  dispatch({
    type: TOGGLE_PAGE,
    page: app.page === "blue" ? "red" : "blue",
  });
}
