interface IAppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: IAppLayoutProps) {
  return <div>{children}</div>;
}
