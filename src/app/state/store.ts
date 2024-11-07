"use client";

import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modal.slice";
import formReducer from "./features/form/form.slice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
