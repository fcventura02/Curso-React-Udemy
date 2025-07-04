import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const SomeContext = createContext();

export const HookUseContext = ({ children }) => {
  const contextValue = "testing context";

  return (
    <SomeContext.Provider value={{ contextValue }}>
      {children}
    </SomeContext.Provider>
  );
};