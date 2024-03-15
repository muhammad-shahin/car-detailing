'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItemsDesktop = ({ navItems }) => {
  const pathname = usePathname();
  return (
    <ul className='hidden hidden-on-lg justify-center items-center gap-10'>
      {navItems.map((navItem, index) => (
        <li key={index}>
          <Link
            className={`text-sm md:text-lg lg:text-xl ${
              pathname === navItem.href ? 'text-primary' : 'text-secondary'
            } hover:text-primary duration-200`}
            href={navItem.href}
          >
            {navItem?.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItemsDesktop;
