import "./search.css";

import { useState } from "react";
import { Button, Input } from "antd";

const SearchComponent = ({ onTypo = () => {}, onSubmit = () => {} }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="search-component-container">
      <Input
        allowClear
        autoComplete="off"
        value={search}
        onChange={onSearchChange}
        onPressEnter={onSearchSubmit}
      />
      <Button type="primary" onClick={onSearchSubmit}>
        Search
      </Button>
    </div>
  );

  function onSearchChange(event) {
    const currentTypo = event.target.value;
    setSearch(currentTypo);
    onTypo(currentTypo);
  }

  function onSearchSubmit() {
    onSubmit(search);
  }
};

export default SearchComponent;
