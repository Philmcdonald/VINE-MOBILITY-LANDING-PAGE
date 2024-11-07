"use client";

import { RootState } from "@/app/state/store";
import { Drawer, Menu } from "antd";
import { useRouter } from "next/navigation";
import { ButtonType } from "./Button";
import styled from "styled-components";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { toggleSideModal } from "@/app/state/features/modal/modal.slice";
import { useSelector } from "react-redux";
import Image from "next/image";
import { ReactNode } from "react";

import {
  BulbOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

// Menu item type
type MenuItemType = {
  key: string;
  label: string;
  icon: ReactNode; // Adjust according to your icon types
  type?: never; // Prevent 'type' from being present in menu items
};

// Divider item type
type DividerItemType = {
  type: "divider"; // Explicitly set 'type' as a string literal for dividers
  key?: never; // Prevent 'key' from being present in divider items
  label?: never; // Prevent 'label' from being present in divider items
  icon?: never; // Prevent 'icon' from being present in divider items
};

type ItemType = MenuItemType | DividerItemType;

const SideModal = () => {
  const { openSideModal } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const router = useRouter();

  const handleNavigate = () => {
    dispatch(toggleSideModal());
    router.push("/calculator");
    console.log("clicking");
  };

  const items: ItemType[] = [
    {
      key: "Home",
      label: "Home",
      icon: <HomeOutlined />,
    },
    {
      type: "divider",
    },
    {
      key: "proposition",
      label: "Why vine mobility ",
      icon: <BulbOutlined />,
    },
    {
      type: "divider",
    },
    {
      key: "testimonial",
      label: "What are people saying",
      icon: <UsergroupAddOutlined />,
    },
  ];

  const onClose = () => {
    console.log("close");
    dispatch(toggleSideModal());
  };

  const onClick = () => {
    // const path = e.keyPath;
    // const name = e.key.toLowerCase();
    router.push(`/`);
    onClose();
  };

  const StyledMenu = styled(Menu)`
    .ant-menu-item-selected {
      background-color: transparent !important;
    }

    .ant-menu-item-selected a {
      color: black !important;
    }
  `;

  return (
    <>
      <Drawer
        onClose={onClose}
        open={openSideModal}
        width={300}
        extra={
          <div className="">
            <Image
              alt="Vine Mobility Logo"
              src="/vine-mobility/logoWhite.png"
              className="h-10 md:h-16 w-auto"
              height={150}
              width={200}
            />
          </div>
        }
        footer={
          <div className="mt-[-50px]">
            <Button
              fn={handleNavigate}
              type={ButtonType.green}
              textSize="text-lg"
              width="w-full"
              text="EV Calculator"
            />
          </div>
        }
      >
        <StyledMenu
          onClick={onClick}
          className="font-body"
          style={{
            width: "100%",
            borderRight: "none",
            borderLeft: "none",
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </Drawer>
    </>
  );
};
export default SideModal;
