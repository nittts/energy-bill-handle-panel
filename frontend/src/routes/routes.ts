import { IRoute } from "@/@types/routes";
import { lazy } from "react";

const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Management = lazy(() => import("@/pages/Dashboard/Management"));
const Library = lazy(() => import("@/pages/Dashboard/Library"));

const NotFound = lazy(() => import("@/pages/Fallbacks/404"));

export const Routes: IRoute[] = [
  {
    header: "Dashboard",
    path: "/",
    element: Dashboard,
    hideTransition: true,
    children: [
      {
        header: "Gerenciamento",
        path: "/",
        element: Management,
      },
      {
        header: "Biblioteca de Faturas",
        path: "/library",
        element: Library,
      },
    ],
  },
  {
    header: "Não Encontrado",
    path: "*",
    element: NotFound,
    hideTransition: true,
  },
];
