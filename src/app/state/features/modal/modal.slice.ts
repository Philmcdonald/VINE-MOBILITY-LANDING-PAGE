"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface modalState {
  openRegisterModal: boolean;
  openQuestionaireModal: boolean;
}

const initialState: modalState = {
  openRegisterModal: false,
  openQuestionaireModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    resetModals: (state) => {
      state.openQuestionaireModal = false;
      state.openRegisterModal = false;
    },
    toggleModal: (state, action) => {
      const { type } = action.payload;

      if (type === "register") {
        state.openRegisterModal = !state.openRegisterModal;
        state.openQuestionaireModal = false;
      }

      if (type === "questions") {
        state.openQuestionaireModal = !state.openQuestionaireModal;
        state.openRegisterModal = false;
      }
    },
  },
});

export const { toggleModal, resetModals } = modalSlice.actions;

export default modalSlice.reducer;
