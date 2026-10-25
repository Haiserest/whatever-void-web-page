import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTERS } from "../config/routers";
import LayoutPage from "../../../components/layouts/layout-page";

const ReactRouter = () => {
  return (
    <BrowserRouter basename="/whatever-void-web-page">
      <LayoutPage>
        <Routes>
          {ROUTERS.map((router) => {
            // กรณีมี Sub-menu (Nested Routes)
            if (router?.MENU) {
              return (
                <Route key={router.PATH} path={router.PATH}>
                  {router.MENU.map((route) => {
                    const Component = route.COMPONENT;
                    if (route?.PATH) {
                      return (
                        <Route
                          key={route.PATH}
                          path={route.PATH}
                          element={<Component />}
                        />
                      );
                    }

                    return (
                      <Route
                        index
                        key={`${router.PATH}-main`}
                        element={<Component />}
                      />
                    );
                  })}
                </Route>
              );
            }
            const Component = router.COMPONENT;
            return (
              <Route
                key={router.PATH}
                path={router.PATH}
                element={<Component />}
              />
            );
          })}
        </Routes>
      </LayoutPage>
    </BrowserRouter>
  );
};

export default ReactRouter;
