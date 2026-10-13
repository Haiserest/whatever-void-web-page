import { Typography } from "antd";

const { Title } = Typography;

const TitleHeader = ({ title }) => {
  return <Title level={4}>{title}</Title>;
};

export default TitleHeader;
