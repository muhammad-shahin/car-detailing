import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/arlington-car-detail.png';
import { MdCall } from 'react-icons/md';
import navItems from '@/db/navItems.json';
import NavItemsMobile from './NavItemsMobile';
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
              className='w-[100px] md:w-[120px] lg:[150px]'
            />
          </div>
          {/* nav items desktop */}
          <ul className='hidden hidden-on-lg justify-center items-center gap-10'>
            {navItems.map((navItem, index) => (
              <li key={index}>
                <Link
                  className='text-sm md:text-lg lg:text-xl text-secondary hover:text-primary duration-200'
                  href={navItem.link}
                >
                  {navItem?.item}
                </Link>
              </li>
            ))}
          </ul>

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
