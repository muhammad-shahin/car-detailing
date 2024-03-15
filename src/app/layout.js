import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Car Detailing Arlington, TX',
  description:
    'Providing car detailing services in Arlington and nearby areas.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
