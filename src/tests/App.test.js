import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

it('should render app corectly', () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});
