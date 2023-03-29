import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

describe('App', () => {
  let input: HTMLInputElement;
  let button: HTMLButtonElement;
  beforeEach(() => {
    render(<App />);
    input = screen.getByTestId('input');
    button = screen.getByTestId('button');
  });

  it('renders marksup', () => {
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button.innerHTML).toBe('click');
  });

  it('button is hidden if not value', async () => {
    expect(button).not.toBeVisible();
    await userEvent.type(input, 'text');
    expect(button).toBeVisible();
    await userEvent.clear(input);
    expect(button).not.toBeVisible();
  });

  it('text in paragraph after click button', async () => {
    await userEvent.type(input, 'new text');
    await userEvent.click(button);
    expect(screen.getAllByTestId('list-item').length).toBe(1);
    expect(input.value).toBe('');
  });

  it('render multiply elements', () => {
    render(
      <>
        <App />
        <App />
      </>
    );

    expect(screen.getAllByTestId('input').length).toBe(3);
  });

  it('button have background color', () => {
    expect(button).toHaveStyle({ backgroundColor: 'red' });
  });

  // it('button with userEvent', async () => {
  //   const onChangeMock = jest.fn()
  //   render(<Button onChange={onChangeMock}/>)

  //   await userEvent.click(button)
  //   expect(onChangeMock).toHaveBeenCalledTimes(1)
  // })

  // it('button async click', async () => {
  //   const onChangeMock = jest.fn()
  //   render(<Button onChange={onChangeMock}/>)

  //   await userEvent.click(button)
  //   await waitFor(() => expect(onChangeMock).toHaveBeenCalledTimes(1), {
  //     timeout: 5000
  //   })
  // })

  // it('examples', async () => {
  //   const checkbox = screen.getByRole('checkbox')
  //   await userEvent.dblClick(checkbox)
  //   expect(mockFunc).toHaveBeenCalledTimes(2)
  //   expect(checkbox).not.toBeChecked()
  // })
});
