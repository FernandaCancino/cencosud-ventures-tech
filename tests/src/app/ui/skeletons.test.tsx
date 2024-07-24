import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardSkeleton } from '../../../../src/app/ui/skeletons';

describe('CardSkeleton Component', () => {
  test('renders CardSkeleton correctly', () => {
    render(<CardSkeleton />);

    const container = screen.getByRole('presentation');
    expect(container).toBeInTheDocument();
  });

  test('applies shimmer class to main container', () => {
    const { container } = render(<CardSkeleton />);
    const mainDiv = container.querySelector('div');
    
    expect(mainDiv).toHaveClass('before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent');
  });
});
