import './globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en'>
      <head />
      <body>{children}</body>
    </html>
  );
}
