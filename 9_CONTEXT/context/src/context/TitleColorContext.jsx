// contexto mais complexo
import { createContext, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const TitleColorContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const titleColorReducer = (state, action) => {
  switch (action.type) {
    case "RED":
      return { ...state, color: "red" };
    case "BLUE":
      return { ...state, color: "blue" };
    default:
      return state;
  }
};

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, {
    color: "purple",
  });

  console.log("Title Color Context:", state);

  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};