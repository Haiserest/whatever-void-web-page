import "./page.css";

import TitleHeader from "../../components/header/title-header";
import SearchComponent from "../../components/search/search";
import SplitterLayout from "../../components/splitter/splitter-layout";
import TableResult from "./table/table-result";
import TableFilter from "./table/table-filter";
import { useIsMobile } from "../../hooks/dom/use-mobile";

const TravelPage = () => {
  const isMobile = useIsMobile();

  return (
    <div className="travel-page">
      <TitleHeader title="Travel" />
      <div className="travel-page-content">
        <SearchComponent />
        <SplitterLayout
          layout={isMobile ? "vertical" : "horizontal"}
          render={{
            left: <TableResult />,
            right: <TableFilter />,
          }}
        />
      </div>
    </div>
  );
};

export default TravelPage;
