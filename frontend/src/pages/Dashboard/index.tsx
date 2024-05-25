import BillInformationDrawer from "@/components/Drawers/Drawers.billInformation";
import ExtractBillDrawer from "@/components/Drawers/Drawers.extractBill";
import Sidebar from "@/components/Sidebar";

import { Flex, Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const containerStyles = { margin: "2vh 1vw 1vw 48px" };

function Dashboard() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Content style={{ maxHeight: "100vh", overflow: "auto" }}>
          <Flex style={containerStyles} gap="middle" vertical>
            <Outlet />
          </Flex>
        </Content>
      </Layout>
      <ExtractBillDrawer />
      <BillInformationDrawer />
    </Layout>
  );
}

export default Dashboard;
