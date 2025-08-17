import { useState } from 'react';
import { useKittyCafeStore } from '../../client-store';
import Button from '../Button';
import Input from '../Input';
import { trpc } from '../../trpc-client';

export interface OrderCommentProps {
  onNext: () => void;
}

function OrderComment({ onNext }: OrderCommentProps) {
  const {
    noteForBarista,
    setNote,
    selectedDrink,
    customizationOptions: { isIced, milkChoice },
    ...store
  } = useKittyCafeStore();
  const { mutateAsync } = trpc.createOrder.useMutation();
  const [note, setNoteInternal] = useState(noteForBarista);
  return (
    <div className="text-center">
      <div className="mt-10"></div>
      <h2 className="font-display text-5xl">notes for barista?</h2>
      <div className="my-10"></div>
      <Input
        onChange={(evt) => setNoteInternal(evt.target.value)}
        value={note}
      />
      <div className="my-10"></div>
      <Button
        onClick={async () => {
          setNote(note);
          await mutateAsync({
            customerName: store.customerName,
            item: {
              isIced: isIced ?? false,
              productName: selectedDrink?.name ?? '',
              milkChoice,
            },
          });
          onNext();
        }}
      >
        Submit Order!
      </Button>
      <div className="font-display mt-8">
        You ordered: {isIced && 'Iced'} {selectedDrink?.name} with{' '}
        {milkChoice && milkChoice}
      </div>
    </div>
  );
}

export default OrderComment;
