"use client";
import { Button } from "@/components";
import { useOpenModal } from "@/hooks";

export enum ButtonType {
  clear = "clear",
  green = "green",
}

const HeroButton = () => {
  const openModal = useOpenModal("register");

  return (
    <Button
      fn={openModal}
      type={ButtonType.clear}
      text="Join Our Waitlist"
      width="px-10"
    />
  );
};

export { HeroButton };
