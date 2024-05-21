import { LazyExoticComponent } from "react";
import { IconType } from "react-icons";

export type IRoute = {
  path: string;
  header: string;
  element: LazyExoticComponent;
  icon?: IconType;
  hideTransition?: boolean;
  children?: IRoute[];
};
