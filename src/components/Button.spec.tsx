import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Button } from './Button';

describe('Input component', () => {
  beforeEach(() => {
    render(<Button label="Test" />);
  });

  it('should be able to render a button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should be a violet color', () => {
    expect(screen.getByText(/Test/i)).toHaveClass('bg-violet-500');
  });

  it('should be able to calls "onClick" prop on button click', () => {
    const onClick = vi.fn();
    const { getByText } = render(
      <Button label="Fire test" onClick={onClick} />,
    );

    fireEvent.click(getByText(/Fire test/i));
    expect(onClick).toHaveBeenCalled();
  });
});
