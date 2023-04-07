import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import { userReducer } from "entinies/User";
import { loginReducer } from "features/AuthByUsername";

export function createReduxStore(initialState) {
  const rootReducers = {
    user: userReducer,
    loginForm:loginReducer
  };

  const store = configureStore({
    reducer:rootReducers,
  });

  return store;
}
