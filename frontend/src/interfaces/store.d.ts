export interface IReduxAction {
  type: string;
  payload?: any;
  error?: string;
}
