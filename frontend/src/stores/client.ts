import { create } from "zustand";
import { LSUtils } from "@/utils/localStorage";

type IClientStore = {
  clientNumber: string;
  updateClientNumber: (id: string) => void;
};

const updateLSValue = (clientNumber: string) => {
  LSUtils.set(`@ENERGY_BILL_APP::clientNumber`, clientNumber);
  return clientNumber;
};

const useClientStore = create<IClientStore>((set) => ({
  clientNumber: LSUtils.get("@ENERGY_BILL_APP::clientNumber"),
  updateClientNumber: (clientNumber) => set((state) => ({ ...state, clientNumber: updateLSValue(clientNumber) })),
}));

// Methods
const useUpdateClientNumber = () => useClientStore(({ updateClientNumber }) => updateClientNumber);

// Variables
const useClientNumber = () => useClientStore(({ clientNumber }) => clientNumber);

export { useUpdateClientNumber, useClientNumber, useClientStore };
