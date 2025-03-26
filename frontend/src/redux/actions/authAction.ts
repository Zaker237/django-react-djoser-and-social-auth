import { IReduxAction } from "@/interfaces/store";
import { Dispatch } from "redux";
import { authActionTypes } from "@/constants/actionTypes";
import { AuthService } from "@/services/AuthService";
import { ILoginUser, ICreateUser } from "@/interfaces/auths";

export const login =
  (data: ILoginUser) => async (dispatch: Dispatch<IReduxAction>) => {
    dispatch({ type: authActionTypes.LOGIN });
    try {
      const response = await AuthService.login(data);
      dispatch({ type: authActionTypes.LOGIN_SUCCESS, payload: response });
      const user = await AuthService.loadUser();
      dispatch({ type: authActionTypes.LOAD_USER_SUCCESS, payload: user });
    } catch (error) {
      dispatch({
        type: authActionTypes.LOGIN_FAILURE,
        error: (error as Error).message,
      });
      throw error;
    }
  };

export const signup =
  (user: ICreateUser) => async (dispatch: Dispatch<IReduxAction>) => {
    dispatch({ type: authActionTypes.SIGNUP });
    try {
      const response = await AuthService.signup(user);
      dispatch({ type: authActionTypes.SIGNUP_SUCCESS, payload: response });
    } catch (error) {
      dispatch({
        type: authActionTypes.SIGNUP_FAILURE,
        error: (error as Error).message,
      });
      throw error;
    }
  };

export const logout = () => async (dispatch: Dispatch<IReduxAction>) => {
  dispatch({ type: authActionTypes.LOGOUT });
  try {
    dispatch({ type: authActionTypes.LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: authActionTypes.LOGOUT_FAILURE,
      error: (error as Error).message,
    });
    throw error;
  }
};
