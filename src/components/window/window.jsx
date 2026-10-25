import { Modal } from "@mantine/core";

const WindowModal = ({
  children,
  title = "window",
  visible = false,
  onClose = () => {},
}) => {
  return (
    <Modal
      centered
      fullScreen
      title={title}
      opened={visible}
      onClose={onClose}
      transitionProps={{ transition: "rotate-left", duration: 200 }}
    >
      {children}
    </Modal>
  );
};

export default WindowModal;
