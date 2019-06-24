import React, { createContext } from "react";
import Child from "./Child";

export const NameContext = createContext();

const Parent = () => {
  return (
    <NameContext.Provider value="Neil">
      <Child />
    </NameContext.Provider>
  );
};

export default Parent;
