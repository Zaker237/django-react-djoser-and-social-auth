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
    const response = await fetch(auths.LOAD_USER, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      return response.json() as Promise<IAuthUser>;
    }
    throw new Error("Load user failed");
  }
}
