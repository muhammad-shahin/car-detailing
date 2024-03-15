'use client';
import Link from 'next/link';
import { Fade as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const NavItemsMobile = ({ navItems }) => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className='block lg:hidden'>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        size={28}
        color='#004540'
      />
      <ul
        className={`fixed md:top-[124px] top-[120px] ${
          isOpen ? 'right-0' : '-right-[100%]'
        } bg-neutral1 w-[70%] sm:w-1/2 h-full flex flex-col lg:hidden justify-start items-center gap-10 duration-300 pt-10`}
      >
        {navItems.map((navItem, index) => (
          <li key={index}>
            <Link
              className={`text-lg lg:text-xl ${
                pathname === navItem.href ? 'text-primary' : 'text-secondary'
              } hover:text-primary duration-200`}
              href={navItem.href}
            >
              {navItem?.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItemsMobile;
