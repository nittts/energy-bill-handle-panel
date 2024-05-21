import { Colors, IPreferences, Languages, UIModes } from "@/@types/preferences";
import { create } from "zustand";
import { LSUtils } from "@/utils/localStorage";

type IPreferencesStore = {
  preferences: IPreferences;
  updateLang: (lang: Languages) => void;
  updateUIMode: (mode: UIModes) => void;
  updateAccent: (color: Colors) => void;
  updateDisablePageTransition: () => void;
};

const basePreferences: IPreferences = {
  lang: "us",
  mode: "DARK",
  accent: "green",
  disablePageTransition: false,
};

const updateLSValue = (preferences: IPreferences) => {
  LSUtils.set(`@ENERGY_BILL_APP::Preferences`, preferences);
  return { preferences };
};

const usePreferencesStore = create<IPreferencesStore>((set) => ({
  preferences: LSUtils.get("@ENERGY_BILL_APP::Preferences") ?? basePreferences,
  updateLang: (lang: Languages) => set((state) => updateLSValue({ ...state.preferences, lang })),
  updateUIMode: (mode: UIModes) => set((state) => updateLSValue({ ...state.preferences, mode })),
  updateAccent: (accent: Colors) => set((state) => updateLSValue({ ...state.preferences, accent })),
  updateDisablePageTransition: () =>
    set((state) =>
      updateLSValue({ ...state.preferences, disablePageTransition: !state.preferences.disablePageTransition })
    ),
}));

// Variables
const usePreferences = () => usePreferencesStore(({ preferences }) => preferences);
const useLang = () => usePreferencesStore(({ preferences }) => preferences.lang);
const useUIMode = () => usePreferencesStore(({ preferences }) => preferences.mode);
const useAccent = () => usePreferencesStore(({ preferences }) => preferences.accent);
const useDisablePageTransition = () => usePreferencesStore(({ preferences }) => preferences.disablePageTransition);

// Methods
const useUpdateLang = () => usePreferencesStore(({ updateLang }) => updateLang);
const useUpdateUIMode = () => usePreferencesStore(({ updateUIMode }) => updateUIMode);
const useUpdateAccent = () => usePreferencesStore(({ updateAccent }) => updateAccent);
const useUpdateDisablePageTransition = () =>
  usePreferencesStore(({ updateDisablePageTransition }) => updateDisablePageTransition);

export {
  usePreferencesStore,
  usePreferences,
  useLang,
  useUIMode,
  useAccent,
  useDisablePageTransition,
  useUpdateLang,
  useUpdateUIMode,
  useUpdateAccent,
  useUpdateDisablePageTransition,
};
