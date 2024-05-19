import { create } from "zustand";
import { devtools } from "zustand/middleware";

type NewTransactionState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useNewTransaction = create<NewTransactionState>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  }))
);
