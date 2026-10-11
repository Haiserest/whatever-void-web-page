import { Typography } from "antd";

import { FEATURES_SANDBOX } from "./config/feature";

import GridLayout from "../../components/grid/grid-layout";
import CardComponent from "../../components/card/card";

const { Title } = Typography;

const SandBoxPage = () => {
  const features = FEATURES_SANDBOX.filter((feature) => feature.show);

  return (
    <div className="sandbox-page">
      <Title>Sandbox</Title>
      <GridLayout
        items={features}
        render={(item) => <CardComponent data={item} />}
      />
    </div>
  );
};

export default SandBoxPage;
