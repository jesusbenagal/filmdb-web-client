import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useTheme } from '../../../src/core/hooks/useTheme';

describe('useTheme', () => {
  it('should return the current theme', () => {
    const customTheme = createTheme({
      palette: {
        primary: {
          main: '#1976d2',
        },
        white: '#fff',
        black: '#000',
      },
    });

    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
      ),
    });

    expect(result.current.palette.primary.main).toBe('#1976d2');
  });
});
