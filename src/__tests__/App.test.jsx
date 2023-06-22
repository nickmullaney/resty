import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react'
import App from '../App';

describe('App component integration', () => {
  it('allows form use and renders expected results', () => {
    render(<App/>);
    let urlInput = screen.getByTestId('form-input');
    let postTest = screen.getByTestId('post-test');
    let button = screen.getByTestId('form-button');

    fireEvent.change(urlInput, {target: {value: 'test.com'}});
    fireEvent.click(postTest);
    fireEvent.click(button);
    
    let pre = screen.getByTestId('results-pre');
    expect(pre).toHaveTextContent('fake thing 1');

    let methodDiv = screen.getByTestId('app-div-method');
    let urlDiv = screen.getByTestId('app-div-url');
    expect(methodDiv).toHaveTextContent('POST');
    expect(urlDiv).toHaveTextContent('test.com')
  });
});
