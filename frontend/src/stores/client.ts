import { create } from "zustand";
import { LSUtils } from "@/utils/localStorage";

type IClientStore = {
  clientId: string;
  updateClientId: (id: string) => void;
};

const updateLSValue = (clientId: string) => {
  LSUtils.set(`@ENERGY_BILL_APP::clientID`, clientId);
  return clientId;
};

const useClientStore = create<IClientStore>((set) => ({
  clientId: LSUtils.get("@ENERGY_BILL_APP::clientID"),
  updateClientId: (clientId) => set((state) => ({ ...state, clientId: updateLSValue(clientId) })),
}));

// Methods
const useUpdateClientId = () => useClientStore(({ updateClientId }) => updateClientId);

// Variables
const useClientId = () => useClientStore(({ clientId }) => clientId);

export { useUpdateClientId, useClientId, useClientStore };
