import { ICreateUser, ILoginUser, IAuthUser } from "@/interfaces/auths";
import { auths } from "@/constants/enpoints";

export class AuthService {
  public static async login(user: ILoginUser) {
    const response = await fetch(auths.LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user }),
    });
    if (response.ok) {
      return response.json();
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
}
