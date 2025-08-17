import { useKittyCafeStore } from '../../client-store';
import Button from '../Button';

export interface DrinkCustomizationScreenProps {
  onNext: () => void;
}

function IcedCustomization({ onNext }: DrinkCustomizationScreenProps) {
  const {
    setIced,
    selectedDrink,
    customizationOptions: { isIced },
  } = useKittyCafeStore();
  if (!selectedDrink) {
    return (
      <div className="text-center">
        <div className="mt-10"></div>
        <h2 className="font-display text-5xl">
          Yu hab not selected a dwink yet!! Yu shall not passs!
        </h2>
      </div>
    );
  }

  if (!selectedDrink.canBeIced) {
    onNext();
    return <div></div>;
  }

  return (
    <div className="text-center">
      <div className="mt-10"></div>
      <h2 className="font-display text-5xl">Wit Ice or Hawt?</h2>
      <div className="my-10"></div>
      <Button onClick={() => setIced(false)} highlighted={isIced === false}>
        Hawt
      </Button>
      <div className="my-4"></div>
      <Button onClick={() => setIced(true)} highlighted={isIced}>
        Iced
      </Button>
      <div className="my-4"></div>
      <div className="my-10"></div>
      <Button onClick={onNext} disabled={typeof isIced !== 'boolean'}>
        Continue!!
      </Button>
    </div>
  );
}

export default IcedCustomization;
