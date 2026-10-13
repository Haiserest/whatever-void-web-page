import "./document-pdf.css";

import { useEffect, useRef, useState } from "react";
import { isEmpty } from "lodash";
import { Document, Page, pdfjs } from "react-pdf";

import {
  getCanvasRenderService,
  getMetadataDocumentService,
} from "../services/document-pdf-service";

import DocumentPDFPassword from "./document-pdf-password";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/5.4.296/pdf.worker.min.mjs`;

const DocumentPDF = ({ base64 = "", currentPage = 1, onUpdate = () => {} }) => {
  const passwordRef = useRef();

  const [passwordOpen, setPasswordOpen] = useState(false);
  const [passwordReason, setPasswordReason] = useState(null);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

  const [metadata, setMetadata] = useState(null);
  const [canvas, setCanvas] = useState(null);

  const passwordError = isPasswordEmpty || passwordReason === 2;

  useEffect(resetMeta, [base64]);

  useEffect(onResponse, [metadata, canvas]);

  if (isEmpty(base64)) {
    return <div>Document not found</div>;
  }

  return (
    <div className="document-react-pdf-container">
      <DocumentPDFPassword
        visible={passwordOpen}
        showErrorInline={passwordError}
        onUpdate={onPasswordUpdate}
        onSubmit={onPasswordSubmit}
        onClose={onPasswordClose}
      />
      <Document
        file={base64}
        onLoadSuccess={onLoadSuccess}
        onLoadError={onLoadError}
        onPassword={onPassword}
      >
        <Page
          pageNumber={currentPage}
          renderTextLayer={false} // ปิดการเรนเดอร์ Text Layer (แก้ Warning เรื่อง TextLayer.css)
          renderAnnotationLayer={false} // ปิดการเรนเดอร์ Annotation Layer (แก้ Warning เรื่อง AnnotationLayer.css)
          onRenderSuccess={onRenderSuccess}
        />
      </Document>
    </div>
  );

  function onResponse() {
    if (metadata && canvas) {
      onUpdate({ metadata, canvas });
    }
  }

  function resetMeta() {
    setCanvas(null);
    setMetadata(null);
  }

  // document

  async function onLoadSuccess(document) {
    const result = await getMetadataDocumentService(document);
    setMetadata(result);
  }

  function onLoadError(error) {
    console.error("document load error: ", error);
  }

  function onRenderSuccess(page) {
    const result = getCanvasRenderService(page);
    setCanvas(result);
  }

  // password

  function onPasswordSubmit(password) {
    const callback = passwordRef.current;

    if (!callback) return;

    if (isEmpty(password)) {
      setIsPasswordEmpty(true);
      return;
    }

    passwordRef.current = null;
    setIsPasswordEmpty(false);
    callback(password);
  }

  function onPassword(callback, reason) {
    passwordRef.current = callback;
    setPasswordReason(reason);
    setIsPasswordEmpty(false);
    setPasswordOpen(true);
  }

  function onPasswordUpdate() {
    setIsPasswordEmpty(false);
    if (passwordReason === 2) {
      setPasswordReason(1);
    }
  }

  function onPasswordClose() {
    passwordRef.current = null;
    setPasswordOpen(false);
    setPasswordReason(null);
    setIsPasswordEmpty(false);
  }
};

export default DocumentPDF;
