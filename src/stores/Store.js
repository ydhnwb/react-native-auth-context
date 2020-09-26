import React, { createContext, useReducer } from 'react';
import Reducer from './../reducers/Reducer';

// INITIALISE ALL TYPES OF STATE YOUR APP
// INITIAL STATE IS OFFERED TO CONTEXT AS A MEANS TO KEEP TRACK OF
const initialState = {
  authToken: null
};

export const Context = createContext(initialState);

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default { Context, Store };