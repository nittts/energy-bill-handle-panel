import BillInformationDrawer from "@/components/Drawers/Drawers.billInformation";
import { Space } from "antd";

const ColumnActions = ({ id }: { id: string }) => {
  return (
    <Space>
      <BillInformationDrawer id={id} />
    </Space>
  );
};

export default ColumnActions;
