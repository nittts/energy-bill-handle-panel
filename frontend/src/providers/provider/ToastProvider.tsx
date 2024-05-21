import { useUIMode } from "@/stores/preferences";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

function ToastProvider({ children }: { children: ReactNode }) {
  const mode = useUIMode();

  const toastOptions = {
    style: {
      backgroundColor: mode.includes("DARK") ? "#141414" : "#FFFFFF",
      color: mode.includes("DARK") ? "#FFFFFF" : "#141414",
    },
  };

  return (
    <>
      <Toaster toastOptions={toastOptions} />
      {children}
    </>
  );
}

export default ToastProvider;
