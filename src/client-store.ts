import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { CafeListing, DairyChoice } from './server/model';

export type DrinkFilter = 'coffee' | 'tea-latte' | 'tea' | 'everything';

type CustomizationOptions = {
  isIced: boolean;
  milkChoice: DairyChoice;
};

type CafeState = {
  customerName: string;
  activeStepIndex: number;
  drinkTypeFilter: DrinkFilter;
  selectedDrink?: CafeListing;
  customizationOptions: Partial<CustomizationOptions>;
  noteForBarista: string;
  setStep: (activeStep: number) => void;
  setCustomerName: (name: string) => void;
  nextStep: () => void;
  setDrinkFilter: (filter: DrinkFilter) => void;
  restart: () => void;
  setCoffeeSelection: (selection: CafeListing) => void;
  setIced: (isIced: boolean) => void;
  setMilkChoice: (choice: DairyChoice) => void;
  setNote: (note: string) => void;
};

export const useKittyCafeStore = create<CafeState>()(
  immer((set, _, store) => ({
    customerName: '',
    activeStepIndex: 1,
    drinkTypeFilter: 'everything',
    customizationOptions: {},
    noteForBarista: '',
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
    setIced: (isIced: boolean) =>
      set((state) => {
        state.customizationOptions.isIced = isIced;
      }),
    setMilkChoice: (choice) =>
      set((state) => {
        state.customizationOptions.milkChoice = choice;
      }),
    setNote: (note) =>
      set((state) => {
        state.noteForBarista = note;
      }),
  })),
);
