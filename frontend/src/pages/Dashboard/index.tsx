import Sidebar from "@/components/Sidebar";

import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

function Dashboard() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Content style={{ maxHeight: "100vh", overflow: "auto" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
