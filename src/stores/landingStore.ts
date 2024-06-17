import { create } from 'zustand';

type LandingStore = {
  selectModalOpen: boolean;
  openSelectModal: () => void;
  closeSelectModal: () => void;
};
const initialState: LandingStore = {
  selectModalOpen: false,
};
create<LandingStore>((set) => ({
  ...initialState,
  openSelectModal: () => set({ selectModalOpen: true }),
  closeSelectModal: () => set({ selectModalOpen: false }),
}));
