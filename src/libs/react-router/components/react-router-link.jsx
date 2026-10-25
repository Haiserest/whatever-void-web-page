import "./react-router-link.css";

import { Link } from "react-router-dom";

const ReactRouterLink = ({ path, children }) => {
  return (
    <div className="reject-router-link-style">
      <Link to={path}>{children}</Link>
    </div>
  );
};

export default ReactRouterLink;
