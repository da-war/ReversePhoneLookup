import { create } from "zustand";

const useLanguageStore = create((set) => ({
  currentLanguage: "en", // Default language
  setLanguage: (language) => set({ currentLanguage: language }),
}));

export default useLanguageStore;
