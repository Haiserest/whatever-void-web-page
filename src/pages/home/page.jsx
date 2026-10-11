import "./page.css";

import { Card, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

import { FEATURES } from "./config/features";

const { Title } = Typography;

const HomePage = () => {
  const features = FEATURES.filter((feature) => feature.SHOW);

  return (
    <div className="home-page">
      <Title>Features</Title>
      <Row gutter={[16, 16]}>
        {features.map((feature) => {
          const Icon = feature.ICON;
          return (
            <Col key={feature.PATH} xs={24} sm={12} md={8}>
              <Link to={feature.PATH}>
                <Card hoverable className="home-feature-card">
                  <Card.Meta
                    avatar={<Icon style={{ fontSize: 28 }} />}
                    title={feature.TITLE}
                    description={feature.DESCRIPTION}
                  />
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default HomePage;
