import { ThemeProvider } from '@filmdb/ui';

interface IAppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: IAppLayoutProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
