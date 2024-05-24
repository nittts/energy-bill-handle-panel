import { Drawer, Flex, theme } from "antd";
import BillInformation from "../BillInformation";
import DescriptiveIcon from "../DescriptiveIcon";
import { useState } from "react";
import { FaEye } from "react-icons/fa";

export default function BillInformationDrawer({ id }: { id: string }) {
  const [openId, setOpenId] = useState<null | string>(null);
  const { token } = theme.useToken();

  const handleOpen = () => {
    if (openId) return setOpenId(null);

    setOpenId(id);
  };

  return (
    <>
      <Drawer
        title="Visualização de Fatura"
        open={!!openId}
        onClose={handleOpen}
        size="large"
        style={{ minHeight: "100vh", background: token.colorBgContainer }}
      >
        <Flex justify="center" style={{ minHeight: "100%" }}>
          <BillInformation id={id} />
        </Flex>
      </Drawer>
      <DescriptiveIcon title="Mais detalhes" icon={<FaEye size={20} />} onClick={handleOpen} type="link" />
    </>
  );
}
