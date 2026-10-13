import { Flex } from "antd";

const TagLayout = ({ children }) => {
  return (
    <Flex gap="small" align="center" wrap>
      {children}
    </Flex>
  );
};

export default TagLayout;
