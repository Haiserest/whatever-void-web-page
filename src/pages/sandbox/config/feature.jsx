import { FilePdfOutlined } from "@ant-design/icons";

import DocumentPDFPage from "../document-pdf/page";

export const FEATURES_SANDBOX = [
  {
    key: "document-pdf",
    title: "Document PDF",
    description: "PDF viewer — supports password-protected files",
    component: DocumentPDFPage,
    path: "/sandbox/document-pdf",
    icon: FilePdfOutlined,
    show: true,
  },
];
