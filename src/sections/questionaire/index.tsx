"use client";

import React, { useState } from "react";
import { Icon, Confetti } from "@/components";
import { useRouter } from "next/navigation";
import { resetModals } from "@/app/state/features/modal/modal.slice";
import { useDispatch, useSelector } from "react-redux";
import { questions } from "../../data";
import { RootState } from "@/app/state/store";
import postRecords from "@/utils/helpers/sheet.helper";

const Questionnaire: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [loading, setLoading] = useState(false);

  console.log(loading)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const { registerData } = useSelector((state: RootState) => state.form);

  const dispatch = useDispatch();
  const router = useRouter();
  const handleNavigate = () => {
    dispatch(resetModals());
    router.push("/");
  };

  const handleAnswer = async (question: string, answer: string) => {
    setAnswers((prevAnswers) => {
      const answers = { ...prevAnswers, [question]: answer };
      return answers;
    });

    // Move to the next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    if (Object.keys(answers).length === 10) {
      const data = {
        name: registerData.name,
        email: registerData.email,
        ...answers,
      };

      const url =
        "https://script.google.com/macros/s/AKfycbwxu57s8w2Pk2Hxj26aXQtnrDpXM4JJcR-QuKpi1PkC17nfaCUnbTEbzvAnNvcB-33YRA/exec";

      const loading = (value: boolean) => {
        setLoading(value);
      };

      const records = await postRecords(url, data, loading);

      console.log(records);
    }
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
              onClick={() => handleAnswer(currentQuestion.question, "yes")}
            >
              YES
            </button>
            <button
              className={`px-10 py-1 font-medium text-md  text-[#D50000] border-[#D50000] border rounded `}
              onClick={() => handleAnswer(currentQuestion.question, "no")}
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
