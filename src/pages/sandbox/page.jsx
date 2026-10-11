import { useState } from "react";
import { Typography } from "antd";

import { FEATURES_SANDBOX } from "./config/feature";

import GridLayout from "../../components/grid/grid-layout";
import CardComponent from "../../components/card/card";
import Window from "../../components/window/window";

const { Title } = Typography;

const SandBoxPage = () => {
  const [openWindow, setOpenWindow] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const features = FEATURES_SANDBOX.filter((feature) => feature.show);

  const Component = currentData?.component ?? "feature unknow";

  return (
    <div className="sandbox-page">
      <Title>Sandbox</Title>
      <GridLayout
        items={features}
        render={(item) => <CardComponent data={item} onClick={onOpenFeature} />}
      />
      <Window
        visible={openWindow}
        title={currentData?.title}
        onClose={onCloseFeature}
      >
        <Component />
      </Window>
    </div>
  );

  function onOpenFeature(data) {
    setCurrentData(data);
    setOpenWindow(true);
  }

  function onCloseFeature() {
    setOpenWindow(false);
  }
};

export default SandBoxPage;
