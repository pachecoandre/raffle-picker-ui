import { createContext, FC, useContext, useState } from "react";
import { IUserContext } from "./types";
import initialState from "../state/initialState";

const UserContext = createContext<IUserContext | any>(null);

const ContextProvider: FC<{}> = ({ children }) => {
  const [state, setStateFn] = useState(initialState);

  const setState = (props: any) => setStateFn({ ...state, ...props });

  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext<IUserContext>(UserContext);

export { ContextProvider, useUserContext };
