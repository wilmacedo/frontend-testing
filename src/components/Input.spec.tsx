import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Input } from './Input';

describe('Input component', () => {
  beforeEach(() => {
    render(<Input title="Test" />);
  });

  it('should be able to render a title', () => {
    expect(screen.getByText(/Test/i)).toBeVisible();
  });

  it('should be able to render a input', () => {
    expect(screen.getByRole('textbox')).toBeVisible();
    expect(screen.getByRole('textbox').tagName).toEqual('INPUT');
  });

  it('should be able to calls "onChange" prop on input typing', () => {
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Test' },
    });

    expect((screen.getByRole('textbox') as HTMLInputElement).value).toBe(
      'Test',
    );
  });
});
