import { Drawer, Flex, theme } from "antd";
import BillInformation from "../BillInformation";
import { useSearchParams } from "react-router-dom";

export default function BillInformationDrawer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { token } = theme.useToken();

  const handleOpen = () => {
    setSearchParams({}, { replace: true });
  };

  return (
    <>
      <Drawer
        title="Visualização de Fatura"
        open={!!searchParams.get("billId")}
        onClose={handleOpen}
        size="large"
        style={{ minHeight: "100vh", background: token.colorBgContainer }}
      >
        <Flex justify="center" style={{ minHeight: "100%" }}>
          <BillInformation id={searchParams.get("billId")} />
        </Flex>
      </Drawer>
    </>
  );
}
