import { useState } from 'react';
import { useKittyCafeStore } from '../../client-store';
import Button from '../Button';
import Input from '../Input';

function CustomerName() {
  const [customerName, setCustomerName] = useState('');
  const store = useKittyCafeStore();
  return (
    <div className="text-center">
      <div className="mt-10"></div>
      <h2 className="font-display text-5xl">Welcome to papa's cafe!</h2>
      <div className="my-10"></div>
      <Input
        onChange={(evt) => setCustomerName(evt.target.value)}
        value={customerName}
      />
      <div className="my-10"></div>
      <Button pulsing onClick={() => store.setCustomerName(customerName)}>
        Start
      </Button>
    </div>
  );
}

export default CustomerName;
