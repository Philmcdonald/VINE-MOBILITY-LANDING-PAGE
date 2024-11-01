"use client";
import Button from "./Button";
import Section from "./Section";
import { ButtonType } from "./Button";
import Image from "next/image";
import Icon from "./Icon";

import { useOpenModal } from "@/hooks";

const Footer = () => {
  const openModal = useOpenModal();
  return (
    <footer className="bg-black pb-1">
      <Section>
        <div className="text-center pt-10">
          <h2 className="text-4xl text-white mb-3">
            Secure your spot in Nigeria’s EV evolution!
          </h2>

          <p className="text-lg text-white mb-7">
            Join our Waitlist today and enjoy exclusive benefits
          </p>

          <Button
            fn={openModal}
            type={ButtonType.clear}
            text="Join Our Waitlist"
          />
        </div>
      </Section>

      <Section classes=" border-t border-t-primary-main py-5">
        <div className="grid grid-cols-3 text-white">
          <div>
            <div className="w-[200px] mb-7">
              <Image
                alt=""
                src="/vine-mobility/logoWhite.png"
                className="h-auto w-[15rem]"
                height={250}
                width={200}
              ></Image>
              <span className="mt-[-25px] text-[15px] text-right block">
                where tech bridges mobility
              </span>
            </div>

            <div>
              <p className="text-[20px] mb-1">Subscribe to our Newsletter</p>
              <span className="text-[12px] block">
                Get notified about project update and educational tips
              </span>
            </div>

            <div className="h-[40px]  w-[80%] flex mt-2">
              <input className="bg-transparent px-5 *:flex-1 border-primary-main border text-[11px] rounded-bl-sm  rounded-tl-sm"></input>
              <button className="bg-primary-main text-black w-[30%] text-[12px] px-3 rounded-tr-sm  rounded-br-sm">
                Subscribe
              </button>
            </div>
          </div>

          <div className="text-center text-[16px] mt-6 flex flex-col gap-9">
            <div>
              <a href="">Home</a>
            </div>
            <div>
              <a href="#proposition">Why Vine Mobility?</a>
            </div>
            <div>
              <a href="#testimonial">What are people saying</a>
            </div>
          </div>

          <div className="flex  flex-col mt-6 items-end">
            <div className="w-1/2">
              <p className="text-[16px] mb-4 leading-tight">
                Contact us <br />
                for more information
              </p>

              <div className="flex gap-5">
                <a>
                  <Icon name="bx-phone-call" size="18px" />
                </a>
                <a>
                  <Icon name="bx-envelope" size="18px" />
                </a>
                <a>
                  <Icon name="bxl-instagram" size="18px" />
                </a>
                <a>
                  <Icon name="bxl-twitter" size="18px" />
                </a>
                <a>
                  <Icon name="bxl-linkedin " size="18px" />
                </a>
              </div>
            </div>
            <p className="text-sm mr-10  mt-auto mb-4">
              All rights Reserved © 2024 Vine Mobility.
            </p>
          </div>
        </div>
      </Section>
    </footer>
  );
};
export default Footer;
