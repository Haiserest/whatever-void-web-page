import {
  ExperimentOutlined,
  FilePdfOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

/**
 * Menu config สำหรับหน้า Home
 * - PATH: path ปลายทาง (relative จาก basename)
 * - ICON: @ant-design/icons component
 * - SHOW: true = แสดงในเมนู, false = ซ่อน (route ยังเข้าได้ตรงๆ)
 */
export const FEATURES = [
  {
    TITLE: "Sandbox",
    DESCRIPTION: "Playground for experiments and component tests",
    PATH: "/sandbox",
    ICON: ExperimentOutlined,
    SHOW: true,
  },
  {
    TITLE: "Document PDF",
    DESCRIPTION: "PDF viewer — supports password-protected files",
    PATH: "/sandbox/document-pdf",
    ICON: FilePdfOutlined,
    SHOW: true,
  },
  {
    TITLE: "Travel",
    DESCRIPTION: "Travel plans powered by Google Sheet",
    PATH: "/travel",
    ICON: GlobalOutlined,
    SHOW: true,
  },
];
