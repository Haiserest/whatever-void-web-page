import "./window.css";

import { useState } from "react";
import { Modal } from "antd";

const Window = ({
  visible = false,
  title = "Window",
  onClose = () => {},
  children,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Modal
      open={visible}
      centered
      footer={null}
      closable={false}
      mask={false}
      closeIcon={null}
      destroyOnHidden={true}
      keyboard={false}
      className="app-window-modal modal-full-screen"
      classNames={{ container: "modal-full-screen" }}
      styles={{ header: { padding: 0, marginBottom: 0 } }}
      title={<HeaderWindow title={title} onCloseWindow={onClose} />}
    >
      {children}
    </Modal>
  );
};

const HeaderWindow = ({ title = "", onCloseWindow = () => {} }) => {
  return (
    <div className="app-window-title-bar">
      <div className="app-window-controls">
        <button
          type="button"
          className="traffic-light close"
          aria-label="Close"
          onClick={onCloseWindow}
        >
          <span aria-hidden>×</span>
        </button>
      </div>
      <div className="app-window-title">{title}</div>
    </div>
  );
};

export default Window;
