import { useKittyCafeStore } from '../../client-store';
import { type DairyChoice } from '../../server/model';
import Button from '../Button';

const dairyChoices: DairyChoice[] = ['almond', 'oat', 'whole'];

export interface DrinkCustomizationScreenProps {
  onNext: () => void;
}

function DairyCustomization({ onNext }: DrinkCustomizationScreenProps) {
  const { setMilkChoice, selectedDrink } = useKittyCafeStore();
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

  if (!selectedDrink.isMilkProduct) {
    onNext();
    return <div></div>;
  }

  return (
    <div className="text-center">
      <div className="mt-10"></div>
      <h2 className="font-display text-5xl">Yu wan mylk wit dat?</h2>
      <div className="my-10"></div>
      {dairyChoices.map((choice) => (
        <div key={choice}>
          <Button
            onClick={() => {
              setMilkChoice(choice);
              onNext();
            }}
          >
            {choice}
          </Button>
          <div className="my-4"></div>
        </div>
      ))}
    </div>
  );
}

export default DairyCustomization;
