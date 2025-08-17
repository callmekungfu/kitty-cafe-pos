import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pulsing?: boolean;
  highlighted?: boolean;
}

function Button({ pulsing, highlighted, children, ...rest }: ButtonProps) {
  return (
    <>
      <button
        {...rest}
        className={`${pulsing ? 'animate-pulse' : ''} ${
          highlighted
            ? 'shadow-[inset_0px_-10px_0px_0px_rgba(255,_0,_0,_0.7)]'
            : ''
        } font-display text-5xl hover:cursor-pointer before:content-['('] before:mr-4 before:text-pink-500 after:content-[')'] after:ml-4 after:text-pink-500 disabled:animate-none disabled:text-gray-500 disabled:hover:cursor-not-allowed`}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
