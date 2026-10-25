import { AirplaneIcon, CodesandboxLogoIcon } from "@phosphor-icons/react";

/**
 * Menu config สำหรับหน้า Home
 * - PATH: path ปลายทาง (relative จาก basename)
 * - ICON: @ant-design/icons component
 * - SHOW: true = แสดงในเมนู, false = ซ่อน (route ยังเข้าได้ตรงๆ)
 */
export const FEATURES = [
  {
    key: "sandbox",
    title: "Sandbox",
    description: "Playground for experiments and component tests",
    path: "/sandbox",
    icon: CodesandboxLogoIcon,
    show: true,
  },
  {
    key: "travel",
    title: "Travel",
    description: "Travel plans powered by Google Sheet",
    path: "/travel",
    icon: AirplaneIcon,
    show: true,
  },
];
