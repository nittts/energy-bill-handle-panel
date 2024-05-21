import { useDisablePageTransition, useUpdateDisablePageTransition } from "@/stores/preferences";
import { Button } from "antd";

function SelectTransition() {
  const disablePageTransition = useDisablePageTransition();
  const updateDisableTransition = useUpdateDisablePageTransition();

  return (
    <Button
      block
      type={disablePageTransition ? "primary" : "default"}
      onClick={() => {
        updateDisableTransition();
      }}
    >
      {disablePageTransition ? "Ativar Transação" : "Desativar Transação"}
    </Button>
  );
}

export default SelectTransition;
