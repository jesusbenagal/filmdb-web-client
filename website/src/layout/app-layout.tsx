import { Header, ThemeProvider } from '@filmdb/ui';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { setDarkMode } from '@/store/slices/themeSlice';

interface IAppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: IAppLayoutProps) {
  const { darkMode } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <ThemeProvider darkMode={darkMode}>
      <Header
        appName="FilmDb"
        darkMode={darkMode}
        setDarkMode={() => dispatch(setDarkMode())}
      />
      <main>{children}</main>
    </ThemeProvider>
  );
}
