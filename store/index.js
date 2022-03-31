import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from "./reducers/";

const persistConfig = {
  key: "root",
  storage,
};

const initialState = {};
const middleware = [thunk];

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  initialState,
  compose(
    applyMiddleware(...middleware),
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      compose
  )
);
export const persistor = persistStore(store);
