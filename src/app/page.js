import AboutCompany from '@/pages/home/AboutCompany/AboutCompany';
import Header from '@/pages/home/Header/Header';
import OurServices from '@/pages/home/OurServices/OurServices';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Header />
      <AboutCompany />
      <OurServices />
    </main>
  );
}
