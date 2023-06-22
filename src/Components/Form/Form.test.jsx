import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from '.';

describe('Form component', () => {
  test('Selects the correct method', () => {
    render(<Form />);
    const get = screen.getByTestId('get-test');
    const put = screen.getByTestId('put-test');
    const post = screen.getByTestId('post-test');
    const del = screen.getByTestId('del-test');

    expect(get).not.toHaveClass('active');
    expect(put).not.toHaveClass('active');
    expect(post).not.toHaveClass('active');
    expect(del).not.toHaveClass('active');

    fireEvent.click(post);

    expect(get).not.toHaveClass('active');
    expect(put).not.toHaveClass('active');
    expect(post).toHaveClass('active');
    expect(del).not.toHaveClass('active');
  });

  test('Submits the form with correct data', () => {
    const handleApiCall = jest.fn();
    render(<Form handleApiCall={handleApiCall} />);
    const urlInput = screen.getByLabelText('URL:');
    const submitButton = screen.getByText('GO!');
    const jsonInput = screen.getByPlaceholderText(/JSON/i);

    fireEvent.change(urlInput, { target: { value: 'https://example.com/api' } });
    fireEvent.change(jsonInput, { target: { value: '{"name": "John"}' } });
    fireEvent.click(submitButton);

    expect(handleApiCall).toHaveBeenCalledTimes(1);
    expect(handleApiCall).toHaveBeenCalledWith({
      method: 'GET',
      url: 'https://example.com/api',
      json: '{"name": "John"}',
    });
  });
});
