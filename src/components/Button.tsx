import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  label: string;
}

export function Button({ label, ...rest }: ButtonProps) {
  return (
    <button
      className="bg-violet-500 rounded font-semibold text-white h-10 hover:bg-violet-600 disabled:bg-violet-900 disabled:cursor-not-allowed disabled:text-zinc-400"
      {...rest}
    >
      {label}
    </button>
  );
}
