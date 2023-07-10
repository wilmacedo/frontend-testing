import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Input } from './Input';

describe('Input component', () => {
  beforeEach(() => {
    render(<Input title="Test" />);
  });

  it('should be able to render a title', () => {
    expect(screen.getByText(/Test/i)).toBeDefined();
  });

  it('should be able to render a input', () => {
    expect(screen.getByRole('textbox').tagName).toEqual('INPUT');
  });
});
