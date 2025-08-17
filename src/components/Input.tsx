import type { InputHTMLAttributes } from 'react';

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="p-3 bg-white w-6/12 border-4 border-black font-display text-2xl"
    />
  );
}

export default Input;
