export interface ICreateUser {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  re_password: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IAuthUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}
