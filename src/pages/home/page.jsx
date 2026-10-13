import "./page.css";

import { FEATURES } from "./config/features";

import CardComponent from "../../components/card/card";
import GridLayout from "../../components/grid/grid-layout";
import ReactRouterLink from "../../libs/react-router/components/react-router-link";
import TitleHeader from "../../components/header/title-header";

const HomePage = () => {
  const features = FEATURES.filter((feature) => feature.show);

  return (
    <div className="home-page">
      <TitleHeader title="Features" />
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
