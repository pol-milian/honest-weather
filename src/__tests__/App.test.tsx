import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import App, { LocationDisplay } from '../components/App';
import { render, cleanup, fireEvent, wait } from '@testing-library/react';

afterEach(cleanup);

function renderWithRouter(
  ui: React.ReactChild,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  }
}

test('renders without crashing', () => {
  const route = '/'
  const { getByTestId, debug } = renderWithRouter(<App />, { route })
  expect(getByTestId('location-display').textContent).toBeTruthy();
})

test('landing on a bad page', () => {
  const { container, debug } = renderWithRouter(<App />, {
    route: '/something-that-does-not-match',
  })
  expect(container.innerHTML).toMatch('No match')
})

test('rendering a component that uses withRouter', () => {
  const route = '/forecast'
  const { getByTestId } = renderWithRouter(<LocationDisplay />, { route })
  expect(getByTestId('location-display').textContent).toBe(route)
})



