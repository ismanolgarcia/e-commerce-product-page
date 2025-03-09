'use client';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Logo from '@/assets/logo.svg';
import iconAvatar from '@/assets/image-avatar.png';
import iconMenu from '@/assets/icon-menu.svg';
import { Menu } from './Menu';
import { Cart } from './Cart';

const NavBar = () => {
  return (
    <header className="mt-8 md:mt-2">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8  ">
        <div className="flex h-30 items-center justify-between md:border-b-2  gap-5  ">
          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <Image src={iconMenu} alt="Menu de Icono" />
            </button>
          </div>
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block" href="#">
              <span className="sr-only">Home</span>
              <Image alt="logo" src={Logo} />
            </a>
            <nav aria-label="Global" className="hidden md:block">
              <Menu />
            </nav>
          </div>
          <div className="md:flex md:items-center md:gap-12 flex gap-4">
            <Cart />
            <Avatar className="hover:border-orange-400 hover:border-2 cursor-pointer">
              <AvatarImage src={iconAvatar.src} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
