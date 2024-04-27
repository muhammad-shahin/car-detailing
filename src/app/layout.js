import '../assets/css/style.css';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar/Navbar';
import { antonFont, sofiaSansFont } from './font/font';

export const metadata = {
  title: 'Car Detailing Arlington, TX',
  description:
    'Providing car detailing services in Arlington and nearby areas.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${antonFont.variable} ${sofiaSansFont.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
