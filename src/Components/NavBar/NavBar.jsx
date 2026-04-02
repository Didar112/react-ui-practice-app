import React from 'react';
import Link from './Link';
import { Menu } from 'lucide-react';

const NavBar = () => {

    const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];
    return (
        <nav className='flex justify-between mx-10'>
            <span className='flex justify-between gap-2.5'>
              <Menu />
              <h3>Home Page</h3>
            </span>
            <ul className='flex'>
                {
                    navLinks.map(item=><Link key={item.id} item={item}></Link>)
                }
            </ul>

            <button className='btn'>Sign in</button>
        </nav>
    );
};

export default NavBar;