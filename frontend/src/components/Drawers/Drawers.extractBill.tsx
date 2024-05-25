import { Drawer, FloatButton, theme } from "antd";
import ExtractBillForm from "../Forms/Forms.extractBill";
import { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";

function ExtractBillDrawer() {
  const [open, setOpen] = useState(false);
  const { token } = theme.useToken();

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    window.addEventListener("keydown", (ev: KeyboardEvent) => {
      if (ev.ctrlKey && ev.shiftKey && ev.key === "F") {
        handleOpen();
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Drawer
        title="Enviar Fatura(s)"
        open={open}
        onClose={handleOpen}
        style={{ minHeight: "100vh", background: token.colorBgContainer }}
      >
        <ExtractBillForm />
      </Drawer>
      <FloatButton
        onClick={handleOpen}
        tooltip="Inserir nova fatura"
        shape="square"
        type="primary"
        icon={<MdAdd size={40} style={{ marginLeft: "-0.6em" }} />}
      />
    </>
  );
}

export default ExtractBillDrawer;
