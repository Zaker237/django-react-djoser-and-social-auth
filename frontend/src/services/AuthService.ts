import {
  ICreateUser,
  ILoginUser,
  IAuthUser,
  IAuthTokens,
} from "@/interfaces/auths";
import { auths } from "@/constants/enpoints";

export class AuthService {
  public static async login(user: ILoginUser): Promise<IAuthTokens> {
    const response = await fetch(auths.LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user }),
    });
    if (response.status === 200) {
      return response.json() as Promise<IAuthTokens>;
    }
    throw new Error("Login failed");
  }

  public static async signup(user: ICreateUser): Promise<IAuthUser> {
    const response = await fetch(auths.SIGNUP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user }),
    });
    if (response.status === 201) {
      return response.json() as Promise<IAuthUser>;
    }
    throw new Error("Signup failed");
  }

  public static async loadUser(): Promise<IAuthUser> {
    const accessToken = localStorage.getItem("access");
    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const response = await fetch(auths.LOAD_USER, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${accessToken}`,
      },
    });
    if (response.status === 200) {
      return response.json() as Promise<IAuthUser>;
    }
    throw new Error("Load user failed");
  }

  public static async activateAccount(
    uid: string,
    token: string
  ): Promise<void> {
    const response = await fetch(auths.ACTIVATION, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid, token }),
    });
    if (response.status === 204) {
      return;
    }
    throw new Error("Activation failed");
  }

  public static async forgotPassword(email: string): Promise<void> {
    const response = await fetch(auths.FORGOT_PASSWORD, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (response.status === 204) {
      return;
    }
    throw new Error("Forgot password failed");
  }

  public static async resetPassword(
    uid: string,
    token: string,
    newPassword: string,
    newPasswordConfirm: string
  ): Promise<void> {
    const response = await fetch(auths.PASSWORD_RESET_CONFIRM, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid,
        token,
        new_password: newPassword,
        re_new_password: newPasswordConfirm,
      }),
    });
    if (response.status === 204) {
      return;
    }
    throw new Error("Reset password failed");
  }

  public static async getGoogleAuthUrl(): Promise<string> {
    const response = await fetch(auths.GOOGLE_AUTHORIZATION_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      return data.authorization_url;
    }
    throw new Error("Google auth URL fetch failed");
  }

  public static async getGithubAuthUrl(): Promise<string> {
    const response = await fetch(auths.GITHUB_AUTHORIZATION_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      return data.authorization_url;
    }
    throw new Error("Github auth URL fetch failed");
  }
  public static async googleAuthenticate(code: string, state: string): Promise<IAuthTokens> {
    if (state && code && !localStorage.getItem("access")) {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };

      const details: Record<string, string> = {
        code: code,
        state: state,
        redirect_uri: auths.GOOGLE_AUTHORIZATION_URL
      };

      const formBody = Object.keys(details)
        .map(
          (key: string) =>
            encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
        )
        .join("&");

      const response = await fetch(auths.GOOGLE_AUTHORIZATION_CALLBACK + formBody, {
        method: "POST",
        headers: headers
      });
      if (response.status === 200) {
        return response.json() as Promise<IAuthTokens>;
      }
      throw new Error("Google authentication failed");
    } else {
      throw new Error("Google authentication failed");
    }
  }
}
