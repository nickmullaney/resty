import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer component', () => {
  test('loads and displays initial state', () => {
    render(<Footer />);

    const p = screen.getByTestId('footer-p');
    expect(p).toHaveTextContent('© 2018');
  });
})
