import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../../../../src/app/ui/button';

describe('test in Button Component', () => {
  test('renders button with children correctly', () => {
    render(<Button>Click me</Button>);

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('applies custom className correctly', () => {
    render(<Button className="custom-class">Click me</Button>);

    expect(screen.getByText('Click me')).toHaveClass('custom-class');
  });

  test('renders button with default styles', () => {
    const { container } = render(<Button>Click me</Button>);

    const button = container.querySelector('button');
    expect(button).toHaveClass('flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50');
  });

  test('passes other props to the button element', () => {
    render(<Button aria-label="submit button" disabled>Click me</Button>);

    const button = screen.getByText('Click me');
    expect(button).toHaveAttribute('aria-label', 'submit button');
    expect(button).toBeDisabled();
  });
});
