

import { Dispatch } from "redux";

import { RED_TIME_UPDATE } from './index';

export const updateTime = () => (dispatch: Dispatch) => {
  const now: Date = new Date();
  let time = "";
  time += now.getFullYear() + "/";
  time += (now.getMonth() + 1) + "/";
  time += now.getDate() + " ";
  time += now.getHours() + ":";
  time += now.getMinutes() + ":";
  time += now.getSeconds();

  dispatch({
    type: RED_TIME_UPDATE,
    time,
  });
}
