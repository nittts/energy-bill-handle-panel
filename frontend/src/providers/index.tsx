import { ReactNode } from "react";
import AntdThemeProvider from "./provider/AntdThemeProvider";
import SnackBarProvider from "./provider/SnackBarProvider";
import ToastProvider from "./provider/ToastProvider";
import TanStackProvider from "./provider/TanStackProvider";

function Providers({ children }: { children: ReactNode }) {
  return (
    <AntdThemeProvider>
      <ToastProvider>
        <SnackBarProvider>
          <TanStackProvider>{children}</TanStackProvider>
        </SnackBarProvider>
      </ToastProvider>
    </AntdThemeProvider>
  );
}

export default Providers;
