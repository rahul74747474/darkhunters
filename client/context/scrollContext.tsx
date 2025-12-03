import { createContext, useContext, useState } from "react";

const ScrollContext = createContext(null);

export const ScrollProvider = ({ children }) => {
  const [showBrand, setShowBrand] = useState(false);

  return (
    <ScrollContext.Provider value={{ showBrand, setShowBrand }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
