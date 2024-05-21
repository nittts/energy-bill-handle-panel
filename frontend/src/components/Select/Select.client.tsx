import { useClientId, useUpdateClientId } from "@/stores/client";
import { Button, Dropdown, MenuProps } from "antd";

function SelectClient() {
  const clientId = useClientId();
  const updateClientId = useUpdateClientId();

  const items = [{ key: "cliente-1", label: "12389712" }];
  const onClick: MenuProps["onClick"] = (e) => updateClientId(e.key);

  const selectedLabel = items.find(({ key }) => key === clientId)?.label;

  return (
    <Dropdown menu={{ items, onClick, selectable: true }}>
      <Button style={{ width: "96%", margin: "2%" }}>{selectedLabel ?? "Selecione o cliente"}</Button>
    </Dropdown>
  );
}

export default SelectClient;
