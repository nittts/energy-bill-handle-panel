import { UIModes } from "@/@types/preferences";
import { useUIMode, useUpdateUIMode } from "@/stores/preferences";
import { Button, Dropdown, MenuProps } from "antd";

function SelectUIMode() {
  const UIMode = useUIMode();
  const updateUIMode = useUpdateUIMode();

  const items = [
    { key: "DARK", label: "Modo Escuro" },
    { key: "LIGHT", label: "Modo Claro" },
    { key: "COMPACT_DARK", label: "Modo Escuro compacto" },
    { key: "COMPACT_LIGHT", label: "Modo Claro compacto" },
  ];

  const onClick: MenuProps["onClick"] = (e) => updateUIMode(e.key as UIModes);

  const selectedLabel = items.find(({ key }) => key === UIMode)?.label;

  return (
    <Dropdown menu={{ items, onClick, selectable: true }}>
      <Button>{selectedLabel}</Button>
    </Dropdown>
  );
}

export default SelectUIMode;
