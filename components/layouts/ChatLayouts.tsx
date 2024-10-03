"use client";

import {
  MessageOutlined,
  RobotOutlined,
  UserOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Input, Modal, Tooltip } from "antd";
import Link from "next/link";
import { useState } from "react";

export default function ChatLayouts() {
  const [open, setOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState<string>("");

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-2">
      <div className="text-3xl cursor-pointer" onClick={() => setOpen(true)}>
        <Tooltip title="Chat Live">
          <MessageOutlined />
        </Tooltip>
      </div>
      <div className="text-3xl">
        <Link
          href={"https://wa.me/+62881022157439"}
          title="Whatsapp SyamGaffi Store"
          target="_blank"
        >
          <Tooltip title="Chat Whatsapp">
            <WhatsAppOutlined />
          </Tooltip>
        </Link>
      </div>
      <Modal
        title={
          <div className="flex flex-col">
            <span>Live Chat</span>
            <span className="text-xs italic opacity-60">
              Ticket ID : {Date.now()}
            </span>
          </div>
        }
        open={open}
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
        footer={[
          <div className="flex gap-2 items-center" key={1}>
            <Input.TextArea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <div className="text-xs font-bold text-white flex gap-1 flex-col items-center">
              <button className="bg-blue-500 hover:bg-blue-600 rounded shadow py-1 px-3 italic">
                KIRIM
              </button>
              <button className="bg-red-500 hover:bg-red-600 rounded shadow py-1 px-2 italic">
                TUTUP
              </button>
            </div>
          </div>,
        ]}
      >
        <div
          style={{
            height: 250,
            overflowY: "scroll",
          }}
          className="border border-blue-200 rounded p-1"
        >
          <div
            className="flex gap-2 rounded bg-gray-100 p-1 my-1"
            style={{ width: "70%" }}
          >
            <span>
              <RobotOutlined />
            </span>
            <span>Hai!. ada yang bisa saya bantu?</span>
          </div>
          <div
            className="flex gap-2 rounded bg-gray-50 p-1 my-1"
            style={{ width: "70%", marginLeft: "30%" }}
          >
            <span>
              <UserOutlined />
            </span>
            <span>
              Hai!. ada yang bisa saya bantu? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Natus, unde.
            </span>
          </div>
          <div
            className="flex gap-2 rounded bg-gray-100 p-1 my-1"
            style={{ width: "70%" }}
          >
            <span>
              <RobotOutlined />
            </span>
            <span>Hai!. ada yang bisa saya bantu?</span>
          </div>
          <div
            className="flex gap-2 rounded bg-gray-100 p-1 my-1"
            style={{ width: "70%" }}
          >
            <span>
              <RobotOutlined />
            </span>
            <span>Hai!. ada yang bisa saya bantu?</span>
          </div>
          <div
            className="flex gap-2 rounded bg-gray-50 p-1 my-1"
            style={{ width: "70%", marginLeft: "30%" }}
          >
            <span>
              <UserOutlined />
            </span>
            <span>
              Hai!. ada yang bisa saya bantu? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Natus, unde.
            </span>
          </div>
          <div
            className="flex gap-2 rounded bg-gray-50 p-1 my-1"
            style={{ width: "70%", marginLeft: "30%" }}
          >
            <span>
              <UserOutlined />
            </span>
            <span>
              Hai!. ada yang bisa saya bantu? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Natus, unde.
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
}
