import { Link } from "react-router-dom";

const ReactRouterLink = ({ path, children }) => {
  return <Link to={path}>{children}</Link>;
};

export default ReactRouterLink;
