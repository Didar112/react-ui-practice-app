import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const NavBar = () => {

  const [open, setOpen] = useState(false);

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

const links =  navLinks.map(item=><Link key={item.id} item={item}></Link>)
    return (
        <nav className='flex justify-between mx-10'>
            <span className='flex justify-between gap-2.5'>
              <span onClick={()=>setOpen(!open)}>
              {open? <X className='md:hidden'></X>:<Menu className='md:hidden'></Menu>}
              
              </span>
              <ul className={`md:hidden ${open?"left-11 top-6":"-left-100 top-6"} duration-200  absolute bg-slate-500`}>
                {
                  links
                }
              </ul>
              <h3>My Website</h3>
            </span>
            <ul className='md:flex hidden'>
                {links}
            </ul> 

            <button className='btn'>Sign in</button>
        </nav>
    );
};

export default NavBar;