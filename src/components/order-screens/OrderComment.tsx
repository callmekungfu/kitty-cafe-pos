import { useState } from 'react';
import { useKittyCafeStore } from '../../client-store';
import Button from '../Button';
import Input from '../Input';

export interface OrderCommentProps {
  onNext: () => void;
}

function OrderComment({ onNext }: OrderCommentProps) {
  const store = useKittyCafeStore();
  const [note, setNote] = useState(store.noteForBarista);
  return (
    <div className="text-center">
      <div className="mt-10"></div>
      <h2 className="font-display text-5xl">notes for barista?</h2>
      <div className="my-10"></div>
      <Input onChange={(evt) => setNote(evt.target.value)} value={note} />
      <div className="my-10"></div>
      <Button
        disabled={!note}
        onClick={() => {
          store.setNote(note);
          onNext();
        }}
      >
        Continue
      </Button>
    </div>
  );
}

export default OrderComment;
