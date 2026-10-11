import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTERS } from "../config/routers";

const ReactRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTERS.map((router) => {
          // กรณีมี Sub-menu (Nested Routes)
          if (router?.MENU) {
            return (
              <Route path={router.PATH}>
                {router.MENU.map((route) => {
                  const Component = route.COMPONENT;
                  if (route?.PATH) {
                    return <Route path={route.PATH} element={<Component />} />;
                  }

                  return <Route index element={<Component />} />;
                })}
              </Route>
            );
          }
          const Component = router.COMPONENT;
          return <Route path={router.PATH} element={<Component />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default ReactRouter;
