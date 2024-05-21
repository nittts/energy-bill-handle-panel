import { Drawer, FloatButton, theme } from "antd";
import ExtractBillForm from "./Forms/Forms.extractBill";
import { useState } from "react";
import { MdAdd } from "react-icons/md";

function ExtractBillDrawer() {
  const [open, setOpen] = useState(false);
  const { token } = theme.useToken();

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Drawer open={open} onClose={handleOpen} style={{ minHeight: "100vh", background: token.colorBgContainer }}>
        <ExtractBillForm />
      </Drawer>
      <FloatButton
        onClick={handleOpen}
        tooltip="Inserir nova fatura"
        shape="square"
        type="primary"
        icon={<MdAdd size={20} />}
      />
    </>
  );
}

export default ExtractBillDrawer;
