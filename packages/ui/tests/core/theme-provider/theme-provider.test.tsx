import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Typography from '@mui/material/Typography';

import ThemeProviderComponent from '../../../src/core/components/theme-provider/index';
import { lightTheme, darkTheme } from '../../../src/core/style/theme/theme';

describe('ThemeProviderComponent', () => {
  it('should render children correctly', () => {
    render(
      <ThemeProviderComponent darkMode={false}>
        <Typography>Test Child</Typography>
      </ThemeProviderComponent>
    );

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('should apply light theme when darkMode is false', () => {
    render(
      <ThemeProviderComponent darkMode={false}>
        <Typography>Light Theme</Typography>
      </ThemeProviderComponent>
    );

    const typographyElement = screen.getByText('Light Theme');
    expect(typographyElement).toHaveStyle(
      `color: ${lightTheme.palette.text.primary}`
    );
  });

  it('should apply dark theme when darkMode is true', () => {
    render(
      <ThemeProviderComponent darkMode={true}>
        <Typography>Dark Theme</Typography>
      </ThemeProviderComponent>
    );

    const typographyElement = screen.getByText('Dark Theme');
    expect(typographyElement).toHaveStyle(
      `color: ${darkTheme.palette.text.primary}`
    );
  });
});
