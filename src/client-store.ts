import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { CafeListing } from './server/model';

export type DrinkFilter = 'coffee' | 'tea-latte' | 'tea' | 'everything';

interface CafeState {
  customerName: string;
  activeStepIndex: number;
  drinkTypeFilter: DrinkFilter;
  selectedDrink?: CafeListing;
  setStep: (activeStep: number) => void;
  setCustomerName: (name: string) => void;
  nextStep: () => void;
  setDrinkFilter: (filter: DrinkFilter) => void;
  restart: () => void;
  setCoffeeSelection: (selection: CafeListing) => void;
}

export const useKittyCafeStore = create<CafeState>()(
  immer((set, _, store) => ({
    customerName: '',
    activeStepIndex: 1,
    drinkTypeFilter: 'everything',
    setStep: (activeStep) =>
      set((state) => {
        state.activeStepIndex = activeStep;
      }),
    setCustomerName: (name) =>
      set((state) => {
        state.customerName = name;
      }),
    nextStep: () =>
      set((state) => {
        state.activeStepIndex = state.activeStepIndex + 1;
      }),
    setDrinkFilter: (type) =>
      set((state) => {
        state.drinkTypeFilter = type;
      }),
    setCoffeeSelection: (selection) =>
      set((state) => {
        state.selectedDrink = selection;
      }),
    restart: () => set(() => store.getInitialState()),
  })),
);
