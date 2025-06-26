import { create } from 'zustand';

interface LocationState {
  city: string;
  pincode: string;
  setCity: (city: string) => void;
  setPincode: (pincode: string) => void;
  reset: () => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  city: '',
  pincode: '',
  setCity: (city) => set({ city }),
  setPincode: (pincode) => set({ pincode }),
  reset: () => set({ city: '', pincode: '' }),
}));
