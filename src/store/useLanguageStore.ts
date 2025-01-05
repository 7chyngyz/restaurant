import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LanguageState {
  language: "en" | "ru" | "kg";
  setLanguage: (language: "en" | "ru" | "kg") => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "en", 
      setLanguage: (language: "en" | "ru" | "kg") => set({ language }),
    }),
    {
      name: "language-store",
    }
  )
);
