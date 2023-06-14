import { describe, test, expect } from 'vitest';
import { render, screen } from './helpers/testUtils';
import App from './App';

describe('App component', () => {
  test('Search for "Hello world"', () => {
    render(<App />);
    expect(screen.getByText(/Hello world/i)).toBeInTheDocument();
  });
});
