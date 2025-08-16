import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface CafeState {
  customerName: string;
  activeStepIndex: number;
  setStep: (activeStep: number) => void;
  setCustomerName: (name: string) => void;
}

export const useKittyCafeStore = create<CafeState>()(
  immer((set) => ({
    customerName: '',
    activeStepIndex: 0,
    setStep: (activeStep) =>
      set((state) => {
        state.activeStepIndex = activeStep;
      }),
    setCustomerName: (name) =>
      set((state) => {
        state.customerName = name;
      }),
  })),
);
