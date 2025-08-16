import { useKittyCafeStore } from '../client-store';
import CategorySelection from './order-screens/CategorySelection';
import CustomerName from './order-screens/CustomerName';
import DrinkSelection from './order-screens/DrinkSelection';
import OpeningScreen from './order-screens/Opening';
import PawgressBar from './PawgressBar';
import WindowControl from './WindowControl';

const TOTAL_STEPS = 8;

function OrderDialog() {
  const store = useKittyCafeStore();
  const handleNext = () => {
    store.nextStep();
  };
  let activeScreen = <OpeningScreen onNext={handleNext} />;

  if (store.activeStepIndex === 2) {
    activeScreen = <CustomerName onNext={handleNext} />;
  }

  if (store.activeStepIndex === 3) {
    activeScreen = <CategorySelection onNext={handleNext} />;
  }

  if (store.activeStepIndex === 4) {
    activeScreen = <DrinkSelection onNext={handleNext} />;
  }

  return (
    <div className="w-3xl p-2 border-8 border-amber-500 bg-amber-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-display text-4xl">Bongo Cafe</h1>
        <div className="flex items-end mr-1">
          <WindowControl controlType="restart" onClick={store.restart} />
          <div className="mx-1"></div>
          <WindowControl controlType="minimize" />
          <div className="mx-1"></div>
          <WindowControl controlType="close" />
        </div>
      </div>
      {/* Content */}
      <div className="border-8 border-amber-500 bg-pink-100 p-3">
        {activeScreen}
        <PawgressBar
          current={store.activeStepIndex}
          total={TOTAL_STEPS}
          onStepClick={store.setStep}
        />
      </div>
    </div>
  );
}

export default OrderDialog;
