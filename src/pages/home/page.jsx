import "./page.css";

import { FEATURES } from "./config/features";

import TitleHeader from "../../components/header/title-header";
import ReactRouterLink from "../../libs/react-router/components/react-router-link";
import Card from "../../components/card/card";

const HomePage = () => {
  const features = FEATURES.filter((feature) => feature.show);

  return (
    <div className="home-page">
      <TitleHeader title="Features" />
      <div>v0.0.1</div>
      <div className="home-page-feature">
        {features.map((item) => (
          <ReactRouterLink path={item.path}>
            <Card metadata={item} />
          </ReactRouterLink>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
