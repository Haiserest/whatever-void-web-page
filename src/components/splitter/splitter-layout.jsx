import "./splitter-layout.css";

import { Splitter } from "antd";

const SplitterLayout = ({ layout = null, render = {} }) => {
  const left = render?.left ?? null;
  const right = render?.right ?? null;

  const orientation = layout ?? "horizontal";

  return (
    <Splitter className="splitter-layout-container" orientation={orientation}>
      <Splitter.Panel min="30%">{left}</Splitter.Panel>
      <Splitter.Panel min="30%">{right}</Splitter.Panel>
    </Splitter>
  );
};

export default SplitterLayout;
