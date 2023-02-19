import './globals.css';

import { Nunito_Sans } from '@next/font/google';
import { BaseChildren } from '@/types/common';
import Providers from './Providers';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '600', '800'],
});

export default function RootLayout({ children }: BaseChildren) {
  return (
    <html lang='en' className={nunitoSans.className}>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
