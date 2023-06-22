import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Welcome component', () => {
  test('loads and displays initial state', () => {
    render(<Header />);

    const h1 = screen.getByTestId('welcome-h1');
    expect(h1).toHaveTextContent('RESTy');
  });
})
