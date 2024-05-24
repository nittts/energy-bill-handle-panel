import { Company } from "@/@types/company";
import useGetCompanies from "@/hooks/company/getCompanies";
import { useClientNumber, useUpdateClientNumber } from "@/stores/client";
import { Button, Dropdown, MenuProps } from "antd";

function SelectClient() {
  const clientNumber = useClientNumber();
  const updateClientNumber = useUpdateClientNumber();
  const { companies } = useGetCompanies();

  const items = companies.map((company: Company) => ({ key: company.clientNumber, label: company.name }));

  const onClick: MenuProps["onClick"] = (e) => {
    updateClientNumber(e.key);
  };

  const selectedLabel = companies.find((company: Company) => company.clientNumber === clientNumber)?.name;

  return (
    <Dropdown menu={{ items, onClick, selectable: true, selectedKeys: [clientNumber] }}>
      <Button style={{ width: "96%", margin: "2%", whiteSpace: "normal", height: "auto" }}>
        {selectedLabel ?? "Selecione o cliente"}
      </Button>
    </Dropdown>
  );
}

export default SelectClient;
