import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../../../src/app/footer';

describe('test in Footer', () => {
  test('renders the Footer component', () => {
    render(<Footer />);

    expect(screen.getByText('Hecho con ❤️ por Fernanda Cancino')).toBeInTheDocument();
    expect(screen.getByText('© 2024 Cencosud Ventures Tech Test. All rights reserved.')).toBeInTheDocument();
  });

  test('has the correct class names', () => {
    const { container } = render(<Footer />);

    expect(container.firstChild).toHaveClass('bg-gray-800', 'flex-col', 'text-white', 'p-4', 'text-center');
  });
});