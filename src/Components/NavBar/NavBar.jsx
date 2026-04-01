import React from 'react';
import Link from './Link';

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
        <nav>
            <ul className='flex'>
                {
                    navLinks.map(item=><Link key={item.id} item={item}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;