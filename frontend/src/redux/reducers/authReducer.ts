import { IReduxAction } from "@/interfaces/store";
import { IAuthTokens } from "@/interfaces/auths";
import { authActionTypes } from "@/constants/actionTypes";
import { AuthState } from "@/models/AuthState";

export const authReducer = (
  state = new AuthState(),
  action: IReduxAction
): AuthState => {
  switch (action.type) {
    case authActionTypes.LOGIN:
      return { ...state, IsLoading: true };
    case authActionTypes.LOGIN_SUCCESS:
      const { access, refresh } = action.payload as IAuthTokens;
      // save the token in local storage
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);
      return {
        ...state,
        Access: access,
        Refresh: refresh,
        IsAuthenticated: true,
        IsLoading: false,
      };
    case authActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        Error: action.payload,
        IsAuthenticated: false,
        Access: null,
        Refresh: null,
        IsLoading: false,
      };
    case authActionTypes.SIGNUP:
      return { ...state, IsLoading: true };
    case authActionTypes.SIGNUP_SUCCESS:
      return { ...state, IsLoading: false };
    case authActionTypes.LOAD_USER:
      return { ...state, IsLoading: true };
    case authActionTypes.LOAD_USER_SUCCESS:
      return { ...state, User: action.payload, IsLoading: false };
    case authActionTypes.LOAD_USER_FAILURE:
      return { ...state, IsLoading: false };
    case authActionTypes.LOGOUT:
      return { ...state, IsLoading: true };
    case authActionTypes.LOGOUT_SUCCESS:
      return new AuthState();
    case authActionTypes.LOGOUT_FAILURE:
      return { ...state, IsLoading: false };
    default:
      return state;
  }
};
