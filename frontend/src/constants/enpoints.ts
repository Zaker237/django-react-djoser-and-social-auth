const API_BASE_URL = "http://localhost:8000/api";

export const auths = {
  LOGIN: API_BASE_URL + "/auth/jwt/create/",
  SIGNUP: API_BASE_URL + "/auth/users/",
  ACTIVATION: API_BASE_URL + "/auth/users/activation/",
  FORGOT_PASSWORD: API_BASE_URL + "/auth/users/reset_password/",
  PASSWORD_RESET_CONFIRM: API_BASE_URL + "/auth/users/reset_password_confirm/",
  LOAD_USER: API_BASE_URL + "/auth/users/me/",
  CHECK_AUTH_USER: API_BASE_URL + "/auth/jwt/verify/",
};
