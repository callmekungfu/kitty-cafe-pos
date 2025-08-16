import { useState } from 'react';
import { useKittyCafeStore } from '../../client-store';
import Button from '../Button';
import Input from '../Input';

export interface OpeningScreenProps {
  onNext: () => void;
}

function CustomerName({ onNext }: OpeningScreenProps) {
  const store = useKittyCafeStore();
  const [customerName, setCustomerName] = useState(store.customerName);
  return (
    <div className="text-center">
      <div className="mt-10"></div>
      <h2 className="font-display text-5xl">Wats your naem?</h2>
      <div className="my-10"></div>
      <Input
        onChange={(evt) => setCustomerName(evt.target.value)}
        placeholder="Enter your name here pawlease"
        value={customerName}
      />
      <div className="my-10"></div>
      <Button
        pulsing
        disabled={!customerName}
        onClick={() => {
          store.setCustomerName(customerName);
          onNext();
        }}
      >
        Continue
      </Button>
    </div>
  );
}

export default CustomerName;
