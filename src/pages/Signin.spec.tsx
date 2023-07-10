import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Signin } from './Signin';

describe('Sign in page', () => {
  beforeEach(() => {
    render(<Signin />);
  });

  it('should be able to render all components', () => {
    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument();

    expect(screen.getByText(/Password/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should be able to enable button when all inputs are filled', async () => {
    fireEvent.change(screen.getByPlaceholderText(/E-mail/i), {
      target: {
        value: 'wil.macedo.sa@gmail.com',
      },
    });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target: {
        value: '123456',
      },
    });

    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('should not be able to enable button when one of the inputs is empty', async () => {
    fireEvent.change(screen.getByPlaceholderText(/E-mail/i), {
      target: {
        value: 'wil.macedo.sa@gmail.com',
      },
    });

    expect(screen.getByRole('button')).toBeDisabled();
  });
});
