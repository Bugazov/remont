import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import { userReducer } from "entinies/User";
import { loginReducer } from "features/AuthByUsername";

export function createReduxStore(navigate) {
  const rootReducers = {
    user: userReducer,
    loginForm:loginReducer
  };
  const extraArgs = {
    navigate
  }

  const store = configureStore({
    reducer:rootReducers,
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({
      thunk:{
        extraArgument:extraArgs
      }
    })
  });

  return store;
}
