import { create } from "zustand";

type AppStore = {
  burger: boolean;
  setBurger: (boolean: boolean) => void;
  modal: boolean;
  contactModal: boolean;
  formSent: boolean;
  setModal: (boolean: boolean) => void;
  setContact: (boolean: boolean) => void;
  setFormSent: (boolean: boolean) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  burger: false,
  setBurger: (burger) => set({ burger }),
  modal: false,
  contactModal: false,
  formSent: false,
  setModal: (bool) => set({ modal: bool }),
  setContact: (boolean) => set({ contactModal: boolean }),
  setFormSent: (boolean) => set({ formSent: boolean }),
}));
