import { IReduxAction } from "@/interfaces/store";
import { Dispatch } from "redux";
import { authActionTypes } from "@/constants/actionTypes";
import { AuthService } from "@/services/AuthService";
import { ILoginUser, ICreateUser } from "@/interfaces/auths";

export const login =
	(data: ILoginUser) => async (dispatch: Dispatch<IReduxAction>) => {
		dispatch({ type: authActionTypes.LOGIN, payload: {} });
		try {
			const response = await AuthService.login(data);
			console.log(response);
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
		dispatch({ type: authActionTypes.SIGNUP, payload: {} });
		try {
			const response = await AuthService.signup(user);
			dispatch({ type: authActionTypes.SIGNUP_SUCCESS, payload: response });
		} catch (error) {
			dispatch({
				type: authActionTypes.SIGNUP_FAILURE,
				payload: {},
				error: (error as Error).message,
			});
			throw error;
		}
	};

export const logout = () => async (dispatch: Dispatch<IReduxAction>) => {
	dispatch({ type: authActionTypes.LOGOUT, payload: {} });
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

export const loadUser = () => async (dispatch: Dispatch<IReduxAction>) => {
	dispatch({ type: authActionTypes.LOAD_USER });
	try {
		const response = await AuthService.loadUser();
		dispatch({ type: authActionTypes.LOAD_USER_SUCCESS, payload: response });
	} catch (error) {
		dispatch({
			type: authActionTypes.LOAD_USER_FAILURE,
			error: (error as Error).message,
		});
		throw error;
	}
};


export const verify = (uid: string, token: string) => async (dispatch: Dispatch<IReduxAction>) => {
	dispatch({ type: authActionTypes.ACTIVATION });
	try {
		await AuthService.activateAccount(uid, token);
		dispatch({ type: authActionTypes.ACTIVATION_SUCCESS });
	} catch (error) {
		dispatch({
			type: authActionTypes.ACTIVATION_FAILURE,
			error: (error as Error).message,
		});
		throw error;
	}
}