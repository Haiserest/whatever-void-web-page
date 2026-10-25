import { FileIcon } from "@phosphor-icons/react";
import DocumentPDFPage from "../document-pdf/page";

export const FEATURES_SANDBOX = [
  {
    key: "document-pdf",
    title: "Document PDF",
    description: "PDF viewer — supports password-protected files",
    component: DocumentPDFPage,
    path: "/sandbox/document-pdf",
    icon: FileIcon,
    show: true,
  },
];
