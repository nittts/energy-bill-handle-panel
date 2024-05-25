import DescriptiveIcon from "@/components/DescriptiveIcon";
import { MdReadMore } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

function CardActions(id: string) {
  const [searchParams, setSearchParams] = useSearchParams();

  const onClick = () => {
    if (searchParams.get("billId")) return setSearchParams({}, { replace: true });

    setSearchParams({ billId: id }, { replace: true });
  };

  const actions = [
    <DescriptiveIcon type="primary" title="Ver Fatura" icon={<MdReadMore size={20} />} onClick={onClick} />,
  ];

  return actions;
}

export default CardActions;
