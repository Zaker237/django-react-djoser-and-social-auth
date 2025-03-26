import { IAuthUser } from "@/interfaces/auths";

export class AuthState {
  public User: IAuthUser | null;
  public Access: string | null;
  public Refresh: string | null;
  public IsLoading: boolean;
  public IsAuthenticated: boolean;
  public Error: string | null;

  constructor() {
    this.User = null;
    this.Access = localStorage.getItem("access") || null;
    this.Refresh = localStorage.getItem("refresh") || null;
    this.IsLoading = false;
    this.IsAuthenticated = !!this.Access;
    this.Error = null;
  }
}
