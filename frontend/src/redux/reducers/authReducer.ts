import { IReduxAction } from "@/interfaces/store";
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
            // save the token in local storage
            localStorage.setItem("access", action.payload.access);
            localStorage.setItem("refresh", action.payload.refresh);
            return {
                ...state,
                Access: action.payload.access,
                Refresh: action.payload.refresh,
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
        case authActionTypes.ACTIVATION:
            return { ...state, IsLoading: true };
        case authActionTypes.ACTIVATION_SUCCESS:
            return { ...state, IsLoading: false };
        case authActionTypes.ACTIVATION_FAILURE:
            return { ...state, IsLoading: false, Error: action.payload };
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
