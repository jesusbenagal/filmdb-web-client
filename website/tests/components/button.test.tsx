import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import Button from '../../src/components/button/index';

describe('Button Component', () => {
  it('should render the button with the correct label', () => {
    render(<Button label="Click me" onClick={() => {}} color="primary" />);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should call onClick when the button is clicked', () => {
    const handleClick = vi.fn();
    render(<Button label="Click me" onClick={handleClick} color="primary" />);
    const buttonElement = screen.getByText('Click me');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render the correct class based on color and mode', () => {
    render(
      <Button label="Click me" onClick={() => {}} color="success" darkMode />
    );
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toHaveClass('button--success--dark');
  });

  it('should display "(*)" when isActive is true', () => {
    render(
      <Button label="Click me" onClick={() => {}} color="primary" isActive />
    );
    const buttonElement = screen.getByText('Click me (*)');
    expect(buttonElement).toBeInTheDocument();
  });
});
