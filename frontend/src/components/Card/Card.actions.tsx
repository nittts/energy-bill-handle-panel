import { useNavigate } from "react-router-dom";

import DescriptiveIcon from "@/components/DescriptiveIcon";
import { MdReadMore } from "react-icons/md";

function CardActions(id: string) {
  const navigate = useNavigate();

  const onClick = (key: "R" | "D") => {
    console.log(key, id, navigate);
  };

  const actions = [
    <DescriptiveIcon type="primary" title="Ver Fatura" icon={<MdReadMore size={20} />} onClick={() => onClick("R")} />,
  ];

  return actions;
}

export default CardActions;
