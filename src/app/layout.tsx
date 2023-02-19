import './globals.css';

import { Nunito_Sans } from '@next/font/google';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '600', '800'],
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en' className={nunitoSans.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
