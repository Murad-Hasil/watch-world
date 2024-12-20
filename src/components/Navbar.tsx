"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosCart, IoIosClose, IoIosMenu } from 'react-icons/io';
import "@/app/styles/navbar.css";

const Navbar = ({ font }: { font: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`${font}`}>
      <div className="logo">
        <h1>Watch World</h1>
      </div>

      <ul className={`${isMenuOpen ? 'open' : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/watches">Watches</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <IoIosCart className='cart-icon' />
      </ul>

      <div className="menu-icons" onClick={toggleMenu}>
        {isMenuOpen ? <IoIosClose /> : <IoIosMenu />}
      </div>
    </nav>
  );
};

export default Navbar;