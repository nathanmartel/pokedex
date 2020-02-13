import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders text "UniWhal" in the body', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/UniWhal/i);
  expect(linkElement).toBeInTheDocument();
});
