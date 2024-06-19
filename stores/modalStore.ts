import { create } from 'zustand';

export type Modal = 'CONNECT_WALLET';

interface ModalStore {
  dialogs: Partial<Record<Modal, boolean>>;
  openDialog: (modal: Modal) => void;
  closeDialog: (modal: Modal) => void;
  closeAllDialogs: () => void;
}

export const useModalStore = create<ModalStore>(set => ({
  dialogs: {},
  openDialog: (dialogId: Modal) =>
    set(state => ({
      dialogs: { ...state.dialogs, [dialogId]: true },
    })),

  closeDialog: (dialogId: Modal) =>
    set(state => ({
      dialogs: { ...state.dialogs, [dialogId]: false },
    })),

  closeAllDialogs: () =>
    set(state => ({
      dialogs: Object.keys(state.dialogs).reduce(
        (acc: Record<string, boolean>, dialogId) => {
          acc[dialogId] = false;
          return acc;
        },
        {}
      ),
    })),
}));
