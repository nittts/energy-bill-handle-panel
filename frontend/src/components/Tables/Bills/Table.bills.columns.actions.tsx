import DescriptiveIcon from "@/components/DescriptiveIcon";
import { Space } from "antd";
import { FaEye } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const ColumnActions = ({ id }: { id: string }) => {
  const [, setSearchParams] = useSearchParams();

  const handleOpen = () => {
    setSearchParams({ billId: id }, { replace: true });
  };

  return (
    <Space>
      <DescriptiveIcon title="Mais detalhes" icon={<FaEye size={20} />} onClick={handleOpen} type="link" />
    </Space>
  );
};

export default ColumnActions;
