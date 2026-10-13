import { useState } from "react";
import { parseDataListModel } from "../../models/travel/travel-model";

export const useTravelData = () => {
  const [dataTable, setDataTable] = useState([]);

  function onUpdateDataTable({ data }) {
    const result = parseDataListModel(data);
    setDataTable(result);
  }

  return {
    dataTable,
    onUpdateDataTable,
  };
};
