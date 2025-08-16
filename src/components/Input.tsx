import type { InputHTMLAttributes } from 'react';

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <Input {...props} className="p-3" />;
}

export default Input;
