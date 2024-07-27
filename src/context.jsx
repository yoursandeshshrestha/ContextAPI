import { useState, createContext } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [name, setName] = useState("Sandesh");

  return (
    <MyContext.Provider value={{ name, setName }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
