import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import { todoSlice } from "./TodoSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, todoSlice.reducer);
export const store = configureStore({
  reducer: {
    todos: persistedReducer,
  },
});
export const persistor = persistStore(store)