import { Flex, Layout, Typography, theme } from "antd";

import SidebarMenu from "./Sidebar.menu";
import SidebarSettingsButton from "./Sidebar.settingsButton";
import { MdEnergySavingsLeaf } from "react-icons/md";
import SelectClient from "../Select/Select.client";

const { Sider } = Layout;
const { Title } = Typography;

function Sidebar() {
  const { token } = theme.useToken();

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        minHeight: "100vh",
        background: token.colorBgContainer,
      }}
      zeroWidthTriggerStyle={{ background: token.colorPrimary }}
    >
      <Flex vertical align="center" gap={6} style={{ background: token.colorPrimary, paddingTop: 3, paddingBottom: 3 }}>
        <MdEnergySavingsLeaf size={50} />
        <Title level={5} style={{ margin: 0 }}>
          Energy Gen.
        </Title>
        <SidebarSettingsButton />
        <SelectClient />
      </Flex>
      <SidebarMenu />
    </Sider>
  );
}

export default Sidebar;
