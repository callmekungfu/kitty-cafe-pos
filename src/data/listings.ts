import { CafeListing } from '../model';

const KittyCafeListings: CafeListing[] = [
  {
    name: 'Americano',
    isMilkProduct: false,
    canBeIced: true,
    category: 'coffee',
  },
  {
    name: 'Latte',
    isMilkProduct: true,
    canBeIced: true,
    category: 'coffee',
  },
  {
    name: 'Canadiano',
    isMilkProduct: true,
    canBeIced: true,
    category: 'coffee',
  },
  {
    name: 'Pour over',
    isMilkProduct: false,
    canBeIced: false,
    category: 'coffee',
  },
];

export default KittyCafeListings;
