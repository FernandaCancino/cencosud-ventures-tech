import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../../../src/app/header';
import { inter } from '../../../src/app/ui/fonts';

describe('Header', () => {
  test('renders the Header component', () => {
    render(<Header />);

    expect(screen.getByText('User List App')).toBeInTheDocument();
  });

  test('has the correct class names on header and h2 elements', () => {
    const { container } = render(<Header />);

    const headerElement = container.querySelector('header');
    expect(headerElement).toHaveClass('bg-gray-800', 'text-white', 'p-4');

    const h2Element = container.querySelector('h2');
    expect(h2Element).toHaveClass(inter.className);
  });

  test('has the correct class names on nav element', () => {
    const { container } = render(<Header />);

    const navElement = container.querySelector('nav');
    expect(navElement).toHaveClass('flex', 'justify-between');
  });
});