import { Table } from "@mantine/core";

const TableBody = ({ columns = [], dataSource = [] }) => {
  return (
    <Table.Tbody>
      {dataSource.map((item) => (
        <Table.Tr key={item.key ?? item.name}>
          {columns.map((column) => {
            const config =
              typeof column === "string" ? { key: column } : column;
            const value = item?.[config.key];
            return (
              <Table.Td key={config.key}>
                {config.render ? config.render(value, item) : value}
              </Table.Td>
            );
          })}
        </Table.Tr>
      ))}
    </Table.Tbody>
  );
};

export default TableBody;
