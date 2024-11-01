"use client";

import Modal from "./Modal";
import { useSelector } from "react-redux";
import { RootState } from "@/app/state/store";
import Image from "next/image";
import { Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { toggleModal } from "@/app/state/features/modal/modal.slice";
import { useState } from "react";

const RegisterModal = () => {
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const onFinish = async (values) => {
    const url =
      "https://script.google.com/macros/s/AKfycbz0vppZdm7yUzpBUqGtvVgvrHjy14KkFg2uYdHkQagRAgFJubkPe3D3MknbsrJ2iTom3w/exec";

    setLoading(true);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setLoading(false);

      console.log(data);
    } catch (err) {
      console.error("Fetch error:", err);

      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen}>
      <div className="pt-10 pb-14 px-4">
        <div className="flex justify-between mb-7">
          <h2 className="font-semibold leading-[1.2] text-[40px]">
            Fill up your
            <br /> information
          </h2>

          <button
            className="mt-[10px] self-start"
            onClick={() => dispatch(toggleModal())}
          >
            <Image
              alt="close btn"
              src="/close.svg"
              className="h-9 w-auto"
              height={4}
              width={4}
            />
          </button>
        </div>

        <Form name="register" onFinish={onFinish} className="grid grid-cols-1 ">
          <div className="w-[80%] grid grid-cols-1 gap-9">
            <Form.Item
              className="font-bold"
              layout="vertical"
              label="Full Name"
              name="name"
            >
              <Input
                className="py-3 font-normal text-sm border border-black"
                type="text"
                size="middle"
                required={true}
                placeholder="Enter your full name"
              ></Input>
            </Form.Item>

            <Form.Item
              layout="vertical"
              className="font-bold"
              label="Email"
              name="email"
            >
              <Input
                className="py-3 font-normal text-sm border border-black"
                type="text"
                size="middle"
                required={true}
                placeholder="Enter your email address"
              ></Input>
            </Form.Item>

            <Form.Item
              className="font-bold"
              layout="vertical"
              label="Phone Number"
              name="phone"
            >
              <Input
                className="py-3 font-normal text-[12px] border border-black"
                type="number"
                size="middle"
                required={true}
                placeholder="Enter your phone number"
              ></Input>
            </Form.Item>
          </div>

          <span className="mt-14 text-[14px] leading-5 font-medium text-center w-[85%] mx-auto">
            Before you sign up to our waitlist, kindly help us answer the
            following questionnaire. Thank you!
          </span>

          <button className="bg-primary-main font-semibold text-md text-white w-[60%] mt-4 mx-auto py-3 rounded-lg">
            {loading ? "loading..." : "Proceed"}
          </button>
        </Form>
      </div>
    </Modal>
  );
};

export default RegisterModal;
