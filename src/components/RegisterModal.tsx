"use client";

import Modal from "./Modal";
import { useSelector } from "react-redux";
import { RootState } from "@/app/state/store";
import Image from "next/image";
import { Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { toggleModal } from "@/app/state/features/modal/modal.slice";
import { storeRegisterData } from "@/app/state/features/form/form.slice";
import { useState } from "react";
import postRecords from "@/utils/helpers/sheet.helper";

// interface FormAttributeI {
//   name: string;
//   email: string;
//   phone: string;
// }

const RegisterModal = () => {
  const { openRegisterModal } = useSelector((state: RootState) => state.modal);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const onFinish = async (values) => {
    const url =
      "https://script.google.com/macros/s/AKfycbz0vppZdm7yUzpBUqGtvVgvrHjy14KkFg2uYdHkQagRAgFJubkPe3D3MknbsrJ2iTom3w/exec";

    const loading = (value: boolean) => {
      setLoading(value);
    };

    const records = await postRecords(url, values, loading);

    dispatch(storeRegisterData(values));

    if (records) {
      dispatch(toggleModal({ type: "questions" }));
    }

    form.resetFields();
  };

  return (
    <Modal isOpen={openRegisterModal}>
      <div className="pt-5 md:pt-10 pd-10 md:pb-14 md:px-4">
        <div className="flex justify-between mb-7">
          <h2 className="font-semibold leading-[1.2] text-[30px] md:text-[40px]">
            Fill up your
            <br /> information
          </h2>

          <button
            className="mt-[10px] self-start"
            onClick={() => dispatch(toggleModal({ type: "register" }))}
          >
            <Image
              alt="close btn"
              src="/close.svg"
              className="h-6 md:h-9 w-auto"
              height={4}
              width={4}
            />
          </button>
        </div>

        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          className="grid grid-cols-1 "
        >
          <div className="w-full md:w-[80%] grid grid-cols-1 md:gap-9">
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

          <span className="mt-1 md:mt-14 text-[11px] leading-5 font-medium text-center w-[90%] md:w-[85%] mx-auto">
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
