import { useLocation, useNavigate } from "react-router-dom";

export const useButtonBackHook = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const disabled = pathname === "/";

  function goBack() {
    navigate(-1);
  }

  return { disabled, goBack };
};
