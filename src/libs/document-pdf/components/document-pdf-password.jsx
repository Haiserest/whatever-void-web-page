import "./document-pdf-password.css";

import { useState } from "react";

const DocumentPDFPassword = ({
  visible = false,
  showErrorInline = false,
  onUpdate = () => {},
  onClose = () => {},
  onSubmit = () => {},
}) => {
  const title = "Document's Password";

  const [password, setPassword] = useState("");

  return null;
  // <Modal
  //   open={visible}
  //   closable={false}
  //   closeIcon={null}
  //   destroyOnHidden={true}
  //   onCancel={onClosePassword}
  //   onOk={onSubmitPassword}
  //   okText="Confirm"
  //   cancelText="Cancel"
  // >
  //   <div className="document-react-pdf-password-container">
  //     <div>{title}</div>
  //     <div>
  //       <Input.Password
  //         autoFocus
  //         autoComplete="off"
  //         value={password}
  //         onChange={onPasswordChange}
  //         onPressEnter={onSubmitPassword}
  //         status={showErrorInline ? "error" : ""}
  //       />
  //       {showErrorInline && <div>Password required or invalid Password</div>}
  //     </div>
  //   </div>
  // </Modal>

  function onPasswordChange(event) {
    setPassword(event.target.value);
    onUpdate();
  }

  function onSubmitPassword() {
    onSubmit(password);
    setPassword("");
  }

  function onClosePassword() {
    setPassword("");
    onClose();
  }
};

export default DocumentPDFPassword;
