import { SnackbarProvider } from "notistack";
import { ReactNode } from "react";

function SnackBarProvider({ children }: { children: ReactNode }) {
  return <SnackbarProvider>{children}</SnackbarProvider>;
}

export default SnackBarProvider;
