export type UIModes = "DARK" | "LIGHT" | "COMPACT_LIGHT" | "COMPACT_DARK";

export type Languages = "us" | "br";

export type Colors =
  | "blue"
  | "cyan"
  | "geekblue"
  | "gold"
  | "green"
  | "grey"
  | "lime"
  | "magenta"
  | "orange"
  | "purple"
  | "red"
  | "volcano"
  | "yellow";

export type IPreferences = {
  lang: Languages;
  mode: UIModes;
  accent: Colors;
  disablePageTransition: boolean;
};
