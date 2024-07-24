import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../../src/app/page';

jest.mock('../../../src/app/ui/login-form', () => () => <div>Mock LoginForm</div>);

describe('Home Component', () => {
  test('renders Home with LoginForm', () => {
    render(<Home />);

    expect(screen.getByText('Mock LoginForm')).toBeInTheDocument();
  });
});
