import React from 'react';
import Search from '../components/Search';
import { render, cleanup, fireEvent } from '@testing-library/react';

afterEach(cleanup);

const handleSubmit = jest.fn();

test('<Search />', () => {
  const { debug, getByTestId, getByText } = render(<Search onSubmit={handleSubmit} />);
  expect(getByTestId('search')).toBeTruthy();  
  fireEvent.change(getByTestId('search'), {
    target: { value: 'london' },
  });
  
  fireEvent.click(getByText(/search!/i));
  // debug();
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith(
    'london');
  
})