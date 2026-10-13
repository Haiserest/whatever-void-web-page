import "./page.css";

import { useIsMobile } from "../../hooks/dom/use-mobile";
import { useTravelData } from "../../hooks/travel/use-travel";

import TitleHeader from "../../components/header/title-header";
import SearchComponent from "../../components/search/search";
import SplitterLayout from "../../components/splitter/splitter-layout";
import TableResult from "./components/table-result";
import TableFilter from "./components/table-filter";
import ButtonDB from "./components/button-db";

const TravelPage = () => {
  const isMobile = useIsMobile();
  const { dataTable, onUpdateDataTable } = useTravelData();

  return (
    <div className="travel-page">
      <div className="travel-page-header">
        <TitleHeader title="Travel" />
        <div className="travel-page-header-search">
          <SearchComponent />
        </div>
      </div>
      <div className="travel-page-content">
        <SplitterLayout
          layout={isMobile ? "vertical" : "horizontal"}
          render={{
            left: <TableResult />,
            right: <TableFilter data={dataTable} />,
          }}
        />
      </div>
      <ButtonDB onUpdateDB={onUpdateDataTable} />
    </div>
  );
};

export default TravelPage;
