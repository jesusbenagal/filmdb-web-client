import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Spinner from '../../../src/core/components/spinner/index';

describe('Spinner Component', () => {
  it('should render the spinner', () => {
    render(<Spinner />);

    const spinnerElement = screen.getByRole('progressbar');
    expect(spinnerElement).toBeInTheDocument();
  });
});
