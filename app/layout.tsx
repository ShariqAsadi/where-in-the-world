import './globals.css';

import { Nunito_Sans } from '@next/font/google';
import { BaseChildren } from '@/types/common';
import Providers from './Providers';
import Navbar from '@/components/Navbar';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '600', '800'],
});

export const metadata = {
  title: 'Where in the world',
  description:
    'A list of all the countries in the world with all their details',
};

export default function RootLayout({ children }: BaseChildren) {
  return (
    <html lang='en' className={nunitoSans.className}>
      <head />
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
