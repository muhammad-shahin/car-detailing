import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/arlington-car-detail.png';
import { MdCall } from 'react-icons/md';
import navItems from '@/db/navItems.json';
import NavItemsMobile from './NavItemsMobile';
import NavItemsDesktop from './NavItemsDesktop';

const Navbar = () => {
  return (
    <nav className='w-full'>
      {/* top nav */}
      <div className='py-1 bg-secondary'>
        <h6 className='text-white text-center text-sm px-4'>
          Car Detailing Services for Arlington, TX and Nearby Areas
        </h6>
      </div>

      {/* main nav */}
      <div className='py-5 w-full bg-neutral1 relative'>
        <div className='container mx-auto flex justify-between items-center'>
          {/* logo */}
          <div>
            <Image
              src={logo}
              alt='Arlington Car Detail Logo'
              className='w-[100px] md:w-[120px] lg:w-[160px] object-contain'
            />
          </div>
          {/* nav items desktop */}
          <NavItemsDesktop navItems={navItems} />

          {/* contact buttons */}
          <div className='flex gap-3'>
            <button className='primary-btn'>
              <MdCall className='text-white text-xl' />
              <Link href='tel:8176708720'>(817) 670-8720</Link>
            </button>
            {/* nav items mobile */}
            <NavItemsMobile navItems={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
