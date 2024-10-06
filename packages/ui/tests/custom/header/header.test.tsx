import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import Header from '../../../src/custom/components/header/index';

describe('Header Component', () => {
  it('should render the app name correctly', () => {
    render(
      <Header
        appName="Test App"
        darkMode={false}
        setDarkMode={() => {}}
        onClickTitle={() => {}}
        totalFavourites={5}
      />
    );

    expect(screen.getByText('Test App')).toBeInTheDocument();
  });

  it('should call onClickTitle when the title is clicked', () => {
    const handleClickTitle = vi.fn();
    render(
      <Header
        appName="Test App"
        darkMode={false}
        setDarkMode={() => {}}
        onClickTitle={handleClickTitle}
        totalFavourites={5}
      />
    );

    const titleButton = screen.getByRole('button', { name: 'Test App' });
    fireEvent.click(titleButton);

    expect(handleClickTitle).toHaveBeenCalled();
  });

  it('should display the total number of favourites', () => {
    render(
      <Header
        appName="Test App"
        darkMode={false}
        setDarkMode={() => {}}
        onClickTitle={() => {}}
        totalFavourites={7}
      />
    );

    expect(screen.getByText('7')).toBeInTheDocument();
  });

  it('should call setDarkMode when theme switch is toggled', () => {
    const handleSetDarkMode = vi.fn();
    render(
      <Header
        appName="Test App"
        darkMode={false}
        setDarkMode={handleSetDarkMode}
        onClickTitle={() => {}}
        totalFavourites={5}
      />
    );

    const themeSwitch = screen.getByRole('checkbox');
    fireEvent.click(themeSwitch);

    expect(handleSetDarkMode).toHaveBeenCalledWith(true);
  });
});
