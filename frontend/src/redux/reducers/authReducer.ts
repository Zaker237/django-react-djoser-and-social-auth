import { IReduxAction } from "@/interfaces/store";
import { authActionTypes } from "@/constants/actionTypes";

export const authReducer = (state = {}, action: IReduxAction) => {
  switch (action.type) {
    case authActionTypes.LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case authActionTypes.LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};
