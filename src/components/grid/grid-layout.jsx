import { useMemo } from "react";
import { Col, Row, Typography } from "antd";
import { isFunction } from "lodash";

const { Title } = Typography;

const GridLayout = ({ render = null, items = [] }) => {
  const isRender = useMemo(() => {
    return isFunction(render);
  }, [render]);

  return (
    // ระยะห่างแนวนอน/แนวตั้ง 16px
    <Row gutter={[16, 16]}>
      {items.map((item, index) => (
        //  responsive: 1/2/3 คอลัมน์
        <Col key={item?.key ?? index} xs={24} sm={12} md={8}>
          {isRender ? render(item) : <ItemComponent data={item} />}
        </Col>
      ))}
    </Row>
  );
};

const ItemComponent = ({ data = {} }) => {
  return (
    <div className="grid-item-component">
      <Title>{data?.title}</Title>
      <div>{data?.description}</div>
    </div>
  );
};

export default GridLayout;
