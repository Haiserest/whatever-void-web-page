import { Table } from "antd";

const TableComponent = ({ columns = [], data = [] }) => {
  return <Table columns={columns} dataSource={data} />;
};

export default TableComponent;
