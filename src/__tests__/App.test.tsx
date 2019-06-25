import React from 'react';
import App from '../components/App';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

test('renders without crashing', () => {
  const { debug, queryByText } = render(<App />);
  expect(queryByText(/what is the weather like in.../i)).toBeTruthy();
  // debug();
})
