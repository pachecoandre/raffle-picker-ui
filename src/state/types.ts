import initialState from "./initialState";

export type IState = typeof initialState;

export type IUserContext = {
  state: IState;
  updateState: (state: any) => void;
  resetState: () => void;
};
