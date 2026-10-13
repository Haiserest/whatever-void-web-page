import "./modal-db.css";

import { useState } from "react";
import { Button, Input, Result, Spin } from "antd";

import { useGoogleSheet } from "../../../libs/google-sheet/google-sheet";

import TitleHeader from "../../../components/header/title-header";
import Window from "../../../components/window/window";

const STATE = {
  NONE: "none",
  PASS: "pass",
  FAILED: "failed",
};

const ModalDB = ({
  visible = false,
  onSuccess = () => {},
  onLoad = () => {},
  onClose = () => {},
}) => {
  const [text, setText] = useState("");
  const [uri, setUri] = useState("");

  const [loading, setLoading] = useState(false);
  const [icon, setIcon] = useState(STATE.NONE);
  const [isRead, setIsRead] = useState(false);

  useGoogleSheet({
    isRead: isRead,
    url: uri,
    onLoad: onLoading,
    onSuccess: onLoadSuccess,
    onFailed: onLoadFailed,
  });

  return (
    <Spin spinning={loading}>
      <Window title="Sync DB" visible={visible} onClose={onCloseModal}>
        <div className="modal-db-content">
          <TitleHeader title="Google sheet url" />
          <Input value={text} onChange={onTextChange} onPressEnter={onSync} />
          <Button type="primary" onClick={onSync}>
            Sync
          </Button>
          {icon === STATE.PASS && (
            <Result status="success" title="Data Sync Complete" />
          )}
          {icon === STATE.FAILED && (
            <Result status="warning" title="Data Sync Failed" />
          )}
        </div>
      </Window>
    </Spin>
  );

  function onTextChange(event) {
    setText(event.target.value);
  }

  function onSync() {
    setUri(text);
    setIsRead(true);
  }

  function onCloseModal() {
    setIsRead(false);
    setIcon(STATE.NONE);
    onClose();
  }

  function onLoading(state) {
    setLoading(state);
    onLoad(state);
  }

  function onLoadFailed(result) {
    setIcon(STATE.FAILED);
    onSuccess(result);
  }

  function onLoadSuccess(result) {
    setIcon(STATE.PASS);
    onSuccess(result);
  }
};

export default ModalDB;
