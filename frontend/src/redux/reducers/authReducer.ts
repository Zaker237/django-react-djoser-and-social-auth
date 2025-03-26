import { IReduxAction } from "@/interfaces/store";
import { IAuthTokens } from "@/interfaces/auths";
import { authActionTypes } from "@/constants/actionTypes";

export const authReducer = (state = {}, action: IReduxAction) => {
  switch (action.type) {
    case authActionTypes.LOGIN_SUCCESS:
      const { access, refresh } = action.payload as IAuthTokens;
      // save the token in local storage
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);
      return { ...state };
    case authActionTypes.LOAD_USER_SUCCESS:
      return { ...state, user: action.payload };
    case authActionTypes.LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};
