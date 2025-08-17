import { type CafeListing } from '../model';

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
  {
    name: 'Matcha Latte',
    isMilkProduct: true,
    canBeIced: true,
    category: 'tea-latte',
  },
  {
    name: 'Hoejicha Latte',
    isMilkProduct: true,
    canBeIced: true,
    category: 'tea-latte',
  },
  {
    name: 'Chai Latte',
    canBeIced: true,
    isMilkProduct: true,
    category: 'tea-latte',
  },
];

export default KittyCafeListings;
