import "./card.css";

import { Card } from "antd";

const CardComponent = ({ data = {}, onClick = () => {} }) => {
  const Icon = data?.icon ?? null;
  return (
    <Card
      hoverable
      className="feature-card"
      onClick={() => {
        onClick(data);
      }}
    >
      <Card.Meta
        avatar={<Icon style={{ fontSize: 28 }} />}
        title={data?.title ?? ""}
        description={data?.description ?? ""}
      />
    </Card>
  );
};

export default CardComponent;
