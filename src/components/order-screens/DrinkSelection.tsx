import { useQuery } from '@tanstack/react-query';
import { useKittyCafeStore } from '../../client-store';
import Button from '../Button';
import { trpc } from '../../trpc-client';

export interface CategoryScreenProps {
  onNext: () => void;
}

function DrinkSelection({ onNext }: CategoryScreenProps) {
  const { drinkTypeFilter, setCoffeeSelection } = useKittyCafeStore();
  const { data: products } = useQuery({
    queryKey: ['drink-listings'],
    queryFn: () => trpc.getProducts.query(),
  });
  return (
    <div className="text-center">
      <div className="mt-10"></div>
      <h2 className="font-display text-5xl">
        {drinkTypeFilter === 'everything'
          ? 'Sho many opthions :O'
          : `Pik ur ${drinkTypeFilter}`}
      </h2>
      <div className="my-10"></div>
      {products
        ?.filter(
          (product) =>
            drinkTypeFilter === 'everything' ||
            product.category === drinkTypeFilter,
        )
        .map((product) => (
          <>
            <Button
              onClick={() => {
                setCoffeeSelection(product);
                onNext();
              }}
            >
              {product.name}
            </Button>
            <div className="my-4"></div>
          </>
        ))}
    </div>
  );
}

export default DrinkSelection;
