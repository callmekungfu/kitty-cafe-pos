import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pulsing?: boolean;
}

function Button({ pulsing, children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${
        pulsing ? 'animate-pulse ' : ''
      } font-display text-5xl hover:cursor-pointer before:content-['('] before:mr-4 before:text-pink-500 after:content-[')'] after:ml-4 after:text-pink-500 disabled:animate-none disabled:text-gray-500 disabled:hover:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}

export default Button;
