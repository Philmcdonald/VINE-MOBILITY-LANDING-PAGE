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

    console.log(values);

    const userInputs: CalculatorInputs = {
      vehicleType: "sedan",
      dailyTravelDistance: values.dailyTravelDistance,
      petrolPricePerLitre: Number(values.petrolPricePerLitre),
      electricityPricePerKwh: Number(values.electricityPricePerKwh),
    };

    const results = calculateCostComparison(userInputs);

    setSavings(results.monthlySavings);
    form.resetFields();
  };

  return (
    <Section>
      <div>
        <Form onFinish={onFinish} form={form} className="grid grid-cols-1 ">
          {/* ================ Form ==================== */}
          <div className="w-[55%] grid grid-cols-1 gap-9">
            <>
              <h1 className="text-4xl">Discover your savings with an EV</h1>
              <p className="text-[16px]">
                Get a quick estimate of how much you can save by switching to an
                electric vehicle and using our state-of-the-art EV chargers
              </p>
            </>

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

          {/* ================ Calculator ==================== */}
          <div className="mt-20">
            <p className="text-lg mb-4 font-semibold">
              Use this to calculate your EV energy cost
            </p>

            <p className="text-lg mb-4 font-semibold">
              Current Vehicle Information:
            </p>

            <div className="border rounded-tl-3xl rounded-tr-3xl  overflow-hidden">
              <div className="grid grid-cols-4 text-lg text-center text-white py-5 bg-primary-main">
                <p>Current Car Type</p>
                <p>Average Daily KM Traveled</p>
                <p>Petrol Cost (per litre)</p>
                <p>Electricity cost (Kwh)</p>
              </div>

              <div className="grid grid-cols-4 py-8 place-items-center">
                <Form.Item
                  className="w-[80%]"
                  name="carType"
                  rules={[
                    { required: true, message: "Please select an option!" },
                  ]}
                >
                  <Select
                    allowClear
                    className="font-normal text-[11px] border-black"
                    size="large"
                    options={tankSize}
                    placeholder="Daily Miles Traveled"
                  ></Select>
                </Form.Item>

                <Form.Item
                  className="w-[80%]"
                  name="dailyTravelDistance"
                  rules={[{ required: true, message: "Please select a model" }]}
                >
                  <Select
                    allowClear
                    className="font-normal text-[11px] border-black"
                    size="large"
                    options={travelDistanceOptions}
                    placeholder="Daily KM Traveled"
                  ></Select>
                </Form.Item>

                <Form.Item name="petrolPricePerLitre" className="w-[80%]">
                  <Input
                    className="py-3 font-normal text-[12px] border border-black"
                    type="number"
                    size="middle"
                    required={true}
                    placeholder="Input petrol cost"
                  ></Input>
                </Form.Item>

                <Form.Item name="electricityPricePerKwh" className="w-[80%]">
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
            <div className=" mt-6 grid grid-cols-1">
              {savings !== 0 && (
                <h1 className=" mx-auto mb-14">{`₦${savings} saved monthly`}</h1>
              )}

              <div className="grid place-items-center">
                <Button
                  loading={loading}
                  width="w-[40%]"
                  type={ButtonType.green}
                  text="Submit"
                  textSize="text-[24px]"
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
