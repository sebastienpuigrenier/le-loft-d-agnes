import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

function Provider({ children }) {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [infoUser, setInfoUser] = useState({
    email: sessionStorage.getItem(`email`),
  });

  useEffect(() => {
    setIsMenuActive(false);
  }, []);

  return (
    <Context.Provider
      value={{
        isMenuActive,
        setIsMenuActive,
        infoUser,
        setInfoUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}

const ExportContext = {
  Context,
  Provider,
};

export default ExportContext;