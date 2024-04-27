import { Anton, Inter, Sofia_Sans } from 'next/font/google';

export const antonFont = Anton({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--anton-font',
});

export const interFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter-font',
});

export const sofiaSansFont = Sofia_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--sofia-sans-font',
});
