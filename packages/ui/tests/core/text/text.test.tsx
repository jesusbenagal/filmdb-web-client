import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Text from '../../../src/core/components/text/index';

describe('Text Component', () => {
  it('should render the text with the correct variant', () => {
    render(<Text text="Hello, World!" variant="h1" />);

    const textElement = screen.getByText('Hello, World!');

    expect(textElement).toBeInTheDocument();

    expect(textElement.tagName).toBe('H1');
  });

  it('should render the text with different variants', () => {
    render(<Text text="Hello, again!" variant="body1" />);

    const textElement = screen.getByText('Hello, again!');

    expect(textElement).toBeInTheDocument();

    expect(textElement.tagName).toBe('P');
  });
});
