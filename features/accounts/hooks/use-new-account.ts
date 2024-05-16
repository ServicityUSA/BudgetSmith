import { create } from "zustand";
import { devtools } from "zustand/middleware";

type NewAccountState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useNewAccount = create<NewAccountState>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  }))
);
