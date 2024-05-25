import DescriptiveIcon from "@/components/DescriptiveIcon";
import { useDeleteBill } from "@/hooks/bills";
import { IoMdTrash } from "react-icons/io";
import { MdReadMore } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

function CardActions(id: string) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { deleteBills } = useDeleteBill();

  const onClick = () => {
    if (searchParams.get("billId")) return setSearchParams({}, { replace: true });

    setSearchParams({ billId: id }, { replace: true });
  };

  const onDelete = () => deleteBills(id);

  const actions = [
    <DescriptiveIcon type="primary" title="Ver Fatura" icon={<MdReadMore size={20} />} onClick={onClick} />,
    <DescriptiveIcon type="primary" danger title="Deletar Fatura" icon={<IoMdTrash size={20} />} onClick={onDelete} />,
  ];

  return actions;
}

export default CardActions;
