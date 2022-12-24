import { useReducer } from 'react';

const forceUpdateReducer = (i) => i + 1;

export const useForceUpdate = () => {
  const [, forceUpdate] = useReducer(forceUpdateReducer, 0);
  return forceUpdate;
};
