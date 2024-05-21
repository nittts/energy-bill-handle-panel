import { Menu, theme } from "antd";
import { Key } from "react";
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useUIMode } from "@/stores/preferences";
import { MdDashboard, MdLibraryBooks } from "react-icons/md";

function getMenuItem(
  label: ReactNode,
  key: Key,
  icon?: ReactNode,
  disabled?: boolean,
  danger?: boolean,
  children?: ReactNode[]
) {
  return { key, icon, children, label, disabled, danger };
}

function getMenuItems() {
  return [getMenuItem("Dashboard", "/", <MdDashboard />), getMenuItem("Biblioteca", "/library", <MdLibraryBooks />)];
}

function SidebarMenu() {
  const navigate = useNavigate();
  const UIMode = useUIMode();

  const { token } = theme.useToken();
  const { pathname, hash } = useLocation();

  const darkModeTheme = UIMode.includes("DARK") ? "dark" : "light";
  return (
    <Menu
      theme={darkModeTheme}
      mode="inline"
      selectedKeys={[`${pathname}${hash}`]}
      items={getMenuItems()}
      onSelect={({ key }) => navigate(key)}
      style={{ background: token.colorBgContainer }}
    />
  );
}

export default SidebarMenu;
