import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const Navbar = () => {
  const refLinks = useRef([
    { name: '台灣景點', href: '/', color: 'text-primary', img: 'before:content-triangle' },
    { name: '美食住宿', href: '/', color: 'text-secondary', img: 'before:content-square' },
    { name: '景點交通', href: '/', color: 'text-green', img: 'before:content-circle' },
  ]);

  return (
    <div className="bg-background pb-14">
      <nav className="h-[104px] bg-white">
        <div className="container flex h-full items-end justify-center pb-[18px] md:justify-between">
          <h1>
            <Link href={'/'}>
              <a className="block h-14 overflow-hidden whitespace-nowrap bg-logo bg-no-repeat indent-[101%]">
                Taiwan Tourguide
              </a>
            </Link>
          </h1>
          <ul className="hidden gap-x-7 md:flex">
            {refLinks.current.map(({ name, href, color, img }) => (
              <li key={name}>
                <Link href={href}>
                  <a className={`${color} before:mr-2 ${img} flex items-center hover:underline`}>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="bg-white p-3">
        <Image
          src="/images/home.png"
          alt="hero"
          width={'100%'}
          height={'40%'}
          layout="responsive"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Navbar;
