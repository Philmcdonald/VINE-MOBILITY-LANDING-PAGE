"use client";

import { Section } from "@/components";
import { Form, Input, Select } from "antd";
import { Button } from "@/components";
import { ButtonType } from "@/components/Button";
import { travelDistanceOptions, tankSize } from "@/data";
import { useState } from "react";
import postRecords from "@/utils/helpers/sheet.helper";
import calculateCostComparison from ".";
import { CalculatorInputs } from ".";
import { useMediaQuery } from "@/hooks";
// import sendMail from "@/utils/helpers/mail.helper";
import axios from "axios";

interface FormAttributeI {
  email: string;
  name: string;
  phone: string;

  vehicleType: string;
  dailyTravelDistance:
    | "veryShort"
    | "short"
    | "medium"
    | "long"
    | "extended"
    | "veryLong"
    | "superLong";
  petrolPricePerLitre: string;
  electricityPricePerKwh: string;
}

const Calculator = () => {
  const [savings, setSavings] = useState(0);
  const [loading, setLoading] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [form] = Form.useForm();

  const onFinish = async (values: FormAttributeI) => {
    const url =
      "https://script.google.com/macros/s/AKfycbzMBKl2MWR9HcJWjBMhadL4SO4Cty318FqCqeScN-XXP9rK_wZQHLfl6UlcktADaIJOng/exec";

    const loading = (value: boolean) => {
      setLoading(value);
    };

    await postRecords(
      url,
      { name: values.name, email: values.email, phone: values.phone },
      loading
    );

    const userInputs: CalculatorInputs = {
      vehicleType: "sedan",
      dailyTravelDistance: values.dailyTravelDistance,
      petrolPricePerLitre: Number(values.petrolPricePerLitre),
      electricityPricePerKwh: Number(values.electricityPricePerKwh),
    };

    const results = calculateCostComparison(userInputs);

    const payload = {
      to: values.email,
      subject: "Discover Your Potential Savings with Vine Mobility!",
      templateName: "thankYou",
      replacements: {
        userName: values.name,
        dailyIceCost: results.dailyIceCost.toLocaleString(),
        monthlyIceCost: results.monthlyIceCost.toLocaleString(),
        dailyEvCost: results.dailyEvCost.toLocaleString(),
        monthlyEvCost: results.monthlyEvCost.toLocaleString(),
        monthlySavings: results.monthlySavings.toLocaleString(),
      },
    };

    const api = "https://www.vine-mobility.com/api/mail";

    try {
      const data = await axios.post(api, payload);
      return data.data;
    } catch (error) {
      console.log(error);
    }

    // await sendMail(payload);

    setSavings(results.monthlySavings);

    form.resetFields();
  };

  return (
    <Section>
      <div>
        <Form onFinish={onFinish} form={form} className="grid grid-cols-1 ">
          {/* ================ Form ==================== */}
          <div className="text-center md:text-left w-full md:w-[55%] grid grid-cols-1 gap-2 md:gap-9">
            <>
              <h1 className="text-4xl mb-4 md:mb-0">
                Discover your savings with an EV
              </h1>

              <p className="mb-3 md:mb-0">
                Get a quick estimate of how much you can save by switching to an
                electric vehicle and using our state-of-the-art EV chargers
              </p>
            </>

            <Form.Item
              className="font-medium sm:font-bold"
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
              className="font-medium sm:font-bold"
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
              className="font-medium sm:font-bold"
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

          {/* ================ Calculator ==================== */}
          <div className="mt-5 md:mt-20">
            <p className="text-lg text-center md:text-left mb-4 font-semibold uppercase md:capitalize">
              Use this to calculate your EV energy cost
            </p>

            <p className="text-lg hidden md:block text-center md:text-left  mb-4 font-semibold">
              Current Vehicle Information:
            </p>

            <div className="border rounded-tl-3xl rounded-tr-3xl  overflow-hidden">
              <div className=" md:grid md:grid-cols-4 grid-cols-1 text-lg text-center text-white py-5 bg-primary-main">
                <p className="md:hidden text-lg">Energy Saving Calculator</p>
                <p className="hidden md:block">Current Car Type</p>
                <p className="hidden md:block">Average Daily KM Traveled</p>
                <p className="hidden md:block">Petrol Cost (per litre)</p>
                <p className="hidden md:block">Electricity cost (Kwh)</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 py-8 place-items-center">
                <Form.Item
                  className="w-[90%] md:w-[80%]"
                  label={isMobile ? "Car type" : null} // Only show label on mobile
                  name="carType"
                  rules={[
                    {
                      required: true,
                      message: "Please select an option!",
                    },
                  ]}
                >
                  <Select
                    allowClear
                    className="font-normal text-[11px] border-black"
                    size="large"
                    options={tankSize}
                    placeholder="Select Car Type"
                  ></Select>
                </Form.Item>

                <Form.Item
                  className="w-[90%] md:w-[80%]"
                  label={isMobile ? "Average Daily KM Traveled" : null} // Only show label on mobile
                  name="dailyTravelDistance"
                  rules={[
                    {
                      required: true,
                      message: "Please select a model",
                    },
                  ]}
                >
                  <Select
                    allowClear
                    className="font-normal text-[11px] border-black"
                    size="large"
                    options={travelDistanceOptions}
                    placeholder="Daily KM Traveled"
                  ></Select>
                </Form.Item>

                <Form.Item
                  name="petrolPricePerLitre"
                  label={isMobile ? "Petrol Cost (per litre)" : null}
                  className="w-[90%] md:w-[80%]"
                >
                  <Input
                    className="py-3 font-normal text-[12px] border border-black"
                    type="number"
                    size="middle"
                    required={true}
                    placeholder="Input petrol cost"
                  ></Input>
                </Form.Item>

                <Form.Item
                  name="electricityPricePerKwh"
                  label={isMobile ? "Electricity cost (Kwh)" : null}
                  className="w-[90%] md:w-[80%]"
                >
                  <Input
                    className="py-3 font-normal text-[12px] border border-black"
                    type="number"
                    size="middle"
                    required={true}
                    placeholder="Input electricity cost"
                  ></Input>
                </Form.Item>
              </div>
            </div>

            {/* <p className="text-lg mt-10 mb-4 font-semibold">
              Current Vehicle Information:
            </p> */}

            {/* <div className="border rounded-tl-3xl rounded-tr-3xl w-[25%]  overflow-hidden">
              <div className="grid grid-cols-1 text-lg text-center text-white py-5 bg-primary-main">
                <p>Vehicle Type</p>
              </div>

              <div className="grid grid-cols-1 py-5 place-items-center mt-10">
                <Form.Item className="w-[70%]">
                  <Select
                    className="font-normal text-[11px] border-black"
                    size="large"
                    options={[{ value: "sample", label: <span>sample</span> }]}
                    placeholder="Input Charger Type"
                  ></Select>
                </Form.Item>
              </div>
            </div> */}
          </div>

          {/* ================ Submit and Result ==================== */}
          <Section classes="pt-5 border-t border-t-[#8FC03FB2]">
            <div className="mt-2 md:mt-6 grid grid-cols-1">
              {savings !== 0 && (
                <h1 className=" mx-auto text-center text-[2rem] md:text-[3rem] mb-[2rem] md:mb-[3rem]">
                  <span>{`₦${savings.toLocaleString()}`}</span>
                  <br />
                  <span className="text-sm md:text-lg block mt-[5px] md:mt-[12px]">
                    Saved Monthly
                  </span>
                </h1>
              )}

              <div className="grid place-items-center">
                <Button
                  loading={loading}
                  width="w-full md:w-[40%]"
                  type={ButtonType.green}
                  text="Submit"
                  textSize="text-[17px] md:text-[24px]"
                  fn={() => {
                    console.log("working well");
                  }}
                ></Button>
              </div>
            </div>
          </Section>
        </Form>
      </div>
    </Section>
  );
};
export default Calculator;
