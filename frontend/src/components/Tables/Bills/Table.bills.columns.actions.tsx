import DescriptiveIcon from "@/components/DescriptiveIcon";
import { useDeleteBill } from "@/hooks/bills";
import { FeedbackUtils } from "@/utils/feedback";
import { Space } from "antd";
import { FaEye, FaTrash } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const ColumnActions = ({ id }: { id: string }) => {
  const [, setSearchParams] = useSearchParams();

  const { deleteBills } = useDeleteBill();

  const handleOpen = () => {
    setSearchParams({ billId: id }, { replace: true });
  };

  const handleDelete = () => {
    FeedbackUtils.promiseToast(deleteBills(id), {
      error: "Erro ao deletar Fatura",
      loading: "Deletando Fatura",
      success: "Fatura deletada com sucesso!",
    });
  };

  return (
    <Space>
      <DescriptiveIcon title="Mais detalhes" icon={<FaEye size={20} />} onClick={handleOpen} type="link" />
      <DescriptiveIcon title="Deletar" danger icon={<FaTrash size={20} />} onClick={handleDelete} type="link" />
    </Space>
  );
};

export default ColumnActions;
