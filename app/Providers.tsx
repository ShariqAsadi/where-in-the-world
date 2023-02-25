'use client';
import { ThemeProvider } from 'next-themes';
import { BaseChildren } from '@/types/common';

export default function Providers({ children }: BaseChildren) {
  return (
    <ThemeProvider attribute='class' enableSystem={true}>
      {children}
    </ThemeProvider>
  );
}
