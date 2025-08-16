import { useKittyCafeStore, type DrinkFilter } from '../../client-store';
import Button from '../Button';

const options: { label: string; value: DrinkFilter }[] = [
  { label: 'Koffwee', value: 'coffee' },
  { label: 'Tee watte', value: 'tea-latte' },
  { label: 'Tee', value: 'tea' },
  { label: 'Shhoww mi ewwyffing', value: 'everything' },
];

export interface CategoryScreenProps {
  onNext: () => void;
}

function CategorySelection({ onNext }: CategoryScreenProps) {
  const { setDrinkFilter } = useKittyCafeStore();
  return (
    <div className="text-center">
      <div className="mt-10"></div>
      <h2 className="font-display text-5xl">Ur dwink?</h2>
      <div className="my-10"></div>
      {options.map((opt) => (
        <div key={opt.label}>
          <Button
            onClick={() => {
              setDrinkFilter(opt.value);
              onNext();
            }}
          >
            {opt.label}
          </Button>
          <div className="my-4"></div>
        </div>
      ))}
    </div>
  );
}

export default CategorySelection;
