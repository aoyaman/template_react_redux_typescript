import { TOGGLE_PAGE, AppActionTypes } from "../actions";
import { AppState } from '../store';

const initialState: AppState = {
  page: "blue",
};

const app = (state = initialState, action: AppActionTypes):AppState => {
  switch (action.type) {
    case TOGGLE_PAGE:
      return {...state, page: action.page };

    default:
      return state;
  }
};

export default app;
