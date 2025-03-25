import { IReduxAction } from "@/interfaces/store";
import { Dispatch } from "redux";
import { authActionTypes } from "@/constants/actionTypes";
import { AuthService } from "@/services/AuthService";
import { ILoginUser } from "@/interfaces/auths";

export const login =
  (user: ILoginUser) => async (dispatch: Dispatch<IReduxAction>) => {
    dispatch({ type: authActionTypes.LOGIN });
    try {
      const response = await AuthService.login(user);
      dispatch({ type: authActionTypes.LOGIN_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: authActionTypes.LOGIN_FAILURE, error: "LOGIN FAILED" });
    }
  };
