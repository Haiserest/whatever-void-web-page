import { Table as TableLib } from "@mantine/core";
import TableHeader from "./table-header";
import TableBody from "./table-body";

const Table = ({ columns = [], dataSource = [] }) => {
  return (
    <TableLib.ScrollContainer>
      <TableLib striped highlightOnHover>
        <TableHeader columns={columns} />
        <TableBody columns={columns} dataSource={dataSource} />
      </TableLib>
    </TableLib.ScrollContainer>
  );
};

export default Table;
