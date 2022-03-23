import { createContext, FC, useContext, useState } from "react";
import { IUserContext } from "./types";
import initialState from "./initialState";

const UserContext = createContext<IUserContext | any>(null);

const ContextProvider: FC<{}> = ({ children }) => {
  const [state, setState] = useState(initialState);

  const updateState = (props: typeof initialState) =>
    setState({ ...state, ...props });

  const resetState = () => setState(initialState);

  return (
    <UserContext.Provider value={{ state, updateState, resetState }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext<IUserContext>(UserContext);

export { ContextProvider, useUserContext };
