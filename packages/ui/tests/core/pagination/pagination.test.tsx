import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Pagination from '../../../src/core/components/pagination/index';

describe('Pagination Component', () => {
  it('should render the pagination component', () => {
    render(<Pagination count={10} />);

    // Verifica que el componente Pagination se renderiza
    const paginationElement = screen.getByRole('navigation');
    expect(paginationElement).toBeInTheDocument();
  });

  it('should render the correct number of pages', () => {
    render(<Pagination count={5} />);

    const pageButtons = screen.getAllByRole('button');
    expect(pageButtons.length).toBeGreaterThanOrEqual(5);
  });
});
