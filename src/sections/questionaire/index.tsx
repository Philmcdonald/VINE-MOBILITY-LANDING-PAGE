"use client";

import React, { useState } from "react";
import { Icon, Confetti } from "@/components";
import { useRouter } from "next/navigation";
import { resetModals } from "@/app/state/features/modal/modal.slice";
import { useDispatch } from "react-redux";

type Question = {
  id: number;
  text: string;
};

const questions: Question[] = [
  {
    id: 1,
    text: "Technologies like Smart EV Chargers would increase the value of your properties?",
  },
  {
    id: 2,
    text: "Are you considering the installation of EV charging stations?",
  },
  { id: 3, text: "Do you think EV chargers will attract more customers?" },
  // Add more questions here if needed
];

const Questionnaire: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const dispatch = useDispatch();
  const router = useRouter();
  const handleNavigate = () => {
    dispatch(resetModals());
    router.push("/");
  };

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));

    // Move to the next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    console.log(answers);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center md:h-[60%] w-[97%] md:w-[90%] pt-8 md:py-20  mx-auto">
      {currentQuestion ? (
        <div
          key={currentQuestion.id}
          className="w-full mb-8 md:p-4 py-10 md:py-20 rounded-lg border shadow-md"
        >
          <h3 className="text-center font-semibold mb-5 text-[20px] md:text-[24px]">
            Select the appropriate answer
          </h3>
          <p className="text-center text-[11px] md:text-[12px] w-[80%] md:w-[70%] mx-auto text-base mb-10">
            {currentQuestion.text}
          </p>
          <div className="flex justify-center space-x-10 mb-3">
            <button
              className={`px-10 py-1 font-medium text-md   border text-[#8FC03F] border-[#8FC03F] rounded `}
              onClick={() => handleAnswer(currentQuestion.id, "yes")}
            >
              YES
            </button>
            <button
              className={`px-10 py-1 font-medium text-md  text-[#D50000] border-[#D50000] border rounded `}
              onClick={() => handleAnswer(currentQuestion.id, "no")}
            >
              NO
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center w-[80%] ">
          <Confetti />
          <div className="mb-2">
            <Icon size="8rem" name="bxs-check-circle" color="#8FC03F" />
          </div>
          <h3 className="text-[16px] mb-14 w-[65%] mx-auto font-semibold">
            You have successfully been added to our waitlist
          </h3>

          <button
            className="bg-primary-main w-[60%] font-semibold text-white rounded-md  mx-auto py-[10px]"
            onClick={handleNavigate}
          >
            Back To Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
