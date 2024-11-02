"use client";

import Modal from "./Modal";
import Questionnaire from "@/sections/questionaire";
import { useSelector } from "react-redux";
import { RootState } from "@/app/state/store";

const QuestionaireModal = () => {
  const { openQuestionaireModal } = useSelector(
    (state: RootState) => state.modal
  );

  return (
    <Modal isOpen={openQuestionaireModal}>
      <Questionnaire />
    </Modal>
  );
};

export default QuestionaireModal;
