import { Empty } from "antd";

const TableResult = ({ list = [] }) => {
  const isEmpty = list.length <= 0;

  return (
    <div className="travel-page-content-splitter-part">
      <div className="travel-page-splitter-title">Route</div>
      {isEmpty ? (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      ) : (
        <div>
          {list.map((item) => (
            <div>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TableResult;
