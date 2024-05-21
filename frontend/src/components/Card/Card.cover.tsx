import { Flex, theme } from "antd";
import DescriptiveIcon from "../DescriptiveIcon";
import { MdAdd } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

type CardCoverProps = {
  onSelect: () => void;
  selected: boolean;
};

function CardCover({ onSelect, selected }: CardCoverProps) {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        height: "3em",
        backgroundColor: token.colorPrimary,
        paddingInline: 6,
      }}
    >
      <Flex align="center" justify="flex-end" style={{ height: "100%" }}>
        <DescriptiveIcon
          type={selected ? "dashed" : "primary"}
          title={selected ? "Remover" : "Selecionar"}
          icon={selected ? <IoMdTrash /> : <MdAdd />}
          onClick={onSelect}
        />
      </Flex>
    </div>
  );
}

export default CardCover;
