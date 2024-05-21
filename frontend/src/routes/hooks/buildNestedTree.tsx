import { IRoute } from "@/@types/routes";
import { Route } from "react-router-dom";
import PageElement from "../elements/page.element";

export default function buildNestedTree(routes: IRoute[], parentRoute = "") {
  return routes.map((route) => (
    <Route
      path={`${parentRoute}${route.path}`}
      element={<PageElement route={route} />}
    >
      {route.children &&
        buildNestedTree(route.children, `${parentRoute}${route.path}`)}
    </Route>
  ));
}
