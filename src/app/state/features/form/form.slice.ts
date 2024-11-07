"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  name: string;
  email: string;
  phone: string;
}

export interface FormState {
  registerData: Contact | null; // Change to `null` as the default state for better type safety
}

const initialState: FormState = {
  registerData: null, // Set to `null` as a default
};

const formSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    storeRegisterData: (state, action: PayloadAction<Contact>) => {
      state.registerData = action.payload;
    },
  },
});

export const { storeRegisterData } = formSlice.actions;

export default formSlice.reducer;
