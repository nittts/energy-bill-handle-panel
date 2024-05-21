import { usePreferences } from "@/stores/preferences";
import { ConfigProvider, theme } from "antd";
import { ReactNode } from "react";
import { presetPrimaryColors } from "@ant-design/colors";

const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = theme;

const algorithmDict = {
  LIGHT: defaultAlgorithm,
  DARK: darkAlgorithm,
  COMPACT_LIGHT: compactAlgorithm,
  COMPACT_DARK: [compactAlgorithm, darkAlgorithm],
};

function AntdThemeProvider({ children }: { children: ReactNode }) {
  const { mode, accent } = usePreferences();

  const algorithm = algorithmDict[mode];
  const token = {
    colorPrimary: presetPrimaryColors[accent],
    colorText: mode.includes("DARK") ? "#FFF" : "#000",
    colorLink: presetPrimaryColors[accent],
  };
  const components = {
    Layout: { triggerBg: presetPrimaryColors[accent] },
    Menu: { darkPopupBg: "#2b2b2b", darkSubMenuItemBg: "#2b2b2b" },
  };

  return <ConfigProvider theme={{ algorithm, token, components }}>{children}</ConfigProvider>;
}

export default AntdThemeProvider;
