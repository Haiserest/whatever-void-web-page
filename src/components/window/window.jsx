import "./window.css";
import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const Window = ({
  visible = false,
  title = "Window",
  onClose = () => {},
  children,
}) => {
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
          onClick={onCloseWindow}
        >
          <CloseOutlined />
        </button>
      </div>
      <div className="app-window-title">{title}</div>
    </div>
  );
};

export default Window;
