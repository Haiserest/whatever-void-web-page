import "./page.css";

import { Typography } from "antd";

import { FEATURES } from "./config/features";

import CardComponent from "../../components/card/card";
import GridLayout from "../../components/grid/grid-layout";
import ReactRouterLink from "../../libs/react-router/components/react-router-link";

const { Title } = Typography;

const HomePage = () => {
  const features = FEATURES.filter((feature) => feature.show);

  return (
    <div className="home-page">
      <Title>Features</Title>
      <GridLayout
        items={features}
        render={(item) => (
          <ReactRouterLink path={item.path}>
            <CardComponent data={item} />
          </ReactRouterLink>
        )}
      />
    </div>
  );
};

export default HomePage;
