import { useState } from "react";
import { FloatButton } from "antd";

import ModalDB from "./modal-db";

const ButtonDB = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <ModalDB
        visible={modalOpen}
        onClose={onCloseDB}
        onSuccess={(data) => console.log(data)}
      />
      <FloatButton style={{ left: 20 }} onClick={onOpenDB} />
    </>
  );

  function onOpenDB() {
    setModalOpen(true);
  }

  function onCloseDB() {
    setModalOpen(false);
  }
};

export default ButtonDB;
