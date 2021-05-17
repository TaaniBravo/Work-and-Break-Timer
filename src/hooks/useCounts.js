import React, { createContext, useContext, useState } from "react";

const CountContext = createContext();
const { Provider } = CountContext;

const CountsProvider = ({ value = [], ...props }) => {
  const [counts, setCounts] = useState({
    workCount: 1500,
    breakCount: 300,
    onBreak: false,
    timerOn: false,
    countdown: 0
  });

  return <Provider value={[counts, setCounts]} {...props} />;
};

const useCountsContext = () => {
  return useContext(CountContext);
};

export { CountsProvider, useCountsContext };
