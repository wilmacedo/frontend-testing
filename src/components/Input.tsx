import { ComponentProps } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  title: string;
}

export function Input({ title, ...rest }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label>{title}</label>
      <input
        className="p-2 border border-zinc-200 shadow-sm rounded h-10 focus:outline-violet-300"
        {...rest}
      />
    </div>
  );
}
