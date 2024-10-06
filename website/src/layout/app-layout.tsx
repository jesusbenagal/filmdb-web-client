import { Header, ThemeProvider } from '@filmdb/ui';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { setDarkMode } from '@/store/slices/themeSlice';

interface IAppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: IAppLayoutProps) {
  const navigate = useNavigate();

  const { darkMode } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <ThemeProvider darkMode={darkMode}>
      <Header
        appName="FilmDb"
        darkMode={darkMode}
        setDarkMode={() => dispatch(setDarkMode())}
        onClickTitle={() => navigate('/')}
      />
      <main
        style={{
          padding: '1.5rem',
        }}
      >
        {children}
      </main>
    </ThemeProvider>
  );
}
