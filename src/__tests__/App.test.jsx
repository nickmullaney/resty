import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

const server = setupServer(
  rest.post('/test', (req, res, ctx) => {
    return res(
      ctx.json({ result: 'fake thing 1' }),
      ctx.status(200)
    );
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App component integration', () => {
  it('allows form use and renders expected results', async () => {
    render(<App />);

    let urlInput = screen.getByTestId('form-input');
    let postTest = screen.getByTestId('post-test');
    let button = screen.getByTestId('form-button');

    fireEvent.change(urlInput, { target: { value: 'test.com' } });
    fireEvent.click(postTest);
    fireEvent.click(button);

    await screen.findByTestId('results-pre');

    let pre = screen.getByTestId('results-pre');
    expect(pre).toHaveTextContent('fake thing 1');

    let methodDiv = screen.getByTestId('app-div-method');
    let urlDiv = screen.getByTestId('app-div-url');
    expect(methodDiv).toHaveTextContent('POST');
    expect(urlDiv).toHaveTextContent('test.com');
  });
});
