import { Anton, Inter } from 'next/font/google';

export const antonFont = Anton({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--anton-font',
});

export const interFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter-font',
});
