"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface modalState {
  openRegisterModal: boolean;
  openQuestionaireModal: boolean;
  openSideModal: boolean;
}

const initialState: modalState = {
  openRegisterModal: false,
  openQuestionaireModal: false,
  openSideModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleSideModal: (state) => {
      state.openSideModal = !state.openSideModal;
    },
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

export const { toggleModal, resetModals,toggleSideModal } = modalSlice.actions;

export default modalSlice.reducer;
