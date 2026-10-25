import { useState } from "react";

import { FEATURES_SANDBOX } from "./config/feature";

import TitleHeader from "../../components/header/title-header";
import Card from "../../components/card/card";
import { useWindowModalHook } from "../../components/window/window-hook";
import WindowModal from "../../components/window/window";

const SandBoxPage = () => {
  const { visible, onOpen, onClose } = useWindowModalHook();
  const [currentData, setCurrentData] = useState(null);

  const features = FEATURES_SANDBOX.filter((feature) => feature.show);

  const Component = currentData?.component ?? "feature unknow";

  return (
    <div className="sandbox-page">
      <TitleHeader title="Sandbox" />
      {features.map((item) => (
        <Card metadata={item} onClick={onOpenFeature} />
      ))}
      <WindowModal
        title={currentData?.title}
        visible={visible}
        onClose={onCloseFeature}
      >
        {Component}
      </WindowModal>
    </div>
  );

  function onOpenFeature(data) {
    setCurrentData(data);
    onOpen();
  }

  function onCloseFeature() {
    onClose();
    setCurrentData();
  }
};

export default SandBoxPage;
