import { create } from "zustand";
import { devtools } from "zustand/middleware";

type OpenTransactionState = {
  id?: string;
  isOpen: boolean;
  onOpen: (id: string) => void;
  onClose: () => void;
};

export const useOpenTransaction = create<OpenTransactionState>()(
  devtools((set) => ({
    id: undefined,
    isOpen: false,
    onOpen: (id: string) => set({ isOpen: true, id }),
    onClose: () => set({ isOpen: false, id: undefined }),
  }))
);
