import { ComponentProps } from 'react';

export function Button({ ...rest }: ComponentProps<'button'>) {
  return (
    <button
      className="bg-violet-500 rounded font-semibold text-white h-10 hover:bg-violet-600"
      {...rest}
    >
      Sign in
    </button>
  );
}
