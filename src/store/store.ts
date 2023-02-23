import { create } from 'zustand';

interface MyStore {
  name: string;
  setName: (name: string) => void;
}

export const useStore = create<MyStore>((set) => ({
  name: 'test',
  setName: (name) => set(() => ({ name })),
}));
