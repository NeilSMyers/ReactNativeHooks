import { useState } from "react";

export const useCounter = startingValue => {
  const [count, setCount] = useState(startingValue);
  const crement = amt => setCount(count + amt);

  return {
    count,
    crement
  };
};
