import { Table } from "@mantine/core";

const TableHeader = ({ columns = [] }) => {
  return (
    <Table.Thead>
      <Table.Tr>
        {columns.map((column) => {
          const item =
            typeof column === "string" ? { key: column, label: column } : column;
          return <Table.Th key={item.key}>{item.label ?? item.key}</Table.Th>;
        })}
      </Table.Tr>
    </Table.Thead>
  );
};

export default TableHeader;
