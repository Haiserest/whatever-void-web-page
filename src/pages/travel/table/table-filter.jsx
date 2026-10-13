import { Button } from "antd";
import TableComponent from "../../../components/table/table";
import TagLayout from "../../../components/tag/tag-layout";

const TableFilter = () => {
  const COLUMNS = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
      fixed: "start",
    },
    {
      key: "tags",
      title: "Tags",
      dataIndex: "tags",
      render: (tags) => (
        <TagLayout>
          {tags.map((tag) => (
            <TableComponent title={tag} />
          ))}
        </TagLayout>
      ),
    },
    {
      key: "description",
      title: "Description",
      dataIndex: "description",
    },
    {
      key: "location",
      title: "Location",
      dataIndex: "location",
      render: (_, record) => (
        <Button onClick={() => onNavigator(record)}>Location</Button>
      ),
    },
    {
      title: "Route",
      render: (_, record) => (
        <Button onClick={() => onAddRoute(record)}>Add To Route</Button>
      ),
    },
  ];

  return (
    <div className="travel-page-content-splitter-part">
      <div className="travel-page-splitter-title">Table Filter</div>
      <TableComponent columns={COLUMNS} />
    </div>
  );

  function onNavigator(record) {}

  function onAddRoute(record) {}
};

export default TableFilter;
