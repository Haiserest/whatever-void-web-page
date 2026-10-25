import "./layout-page.css";

import ButtonBack from "../buttons/button-back";

const LayoutPage = ({ children }) => {
  return (
    <div className="layout-page-container">
      <div>
        <ButtonBack />
      </div>
      {children}
    </div>
  );
};

export default LayoutPage;
