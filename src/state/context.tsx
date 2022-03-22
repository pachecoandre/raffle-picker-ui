import { createContext, FC, useContext, useState } from "react";
import { IUserContext } from "./types";

const UserContext = createContext<IUserContext | any>(null);

const ContextProvider: FC<{}> = ({ children }) => {
  const [state, setState] = useState({ isLogged: true });

  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext<IUserContext>(UserContext)

export { ContextProvider, useUserContext };
