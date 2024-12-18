'use client';
import Link from 'next/link';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdShoppingCart } from 'react-icons/md';
import { useState } from 'react';
import '@/app/styles/navbar.css';

export default function Navbar({ font }: {font: string}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

  return (
    <>
        <nav className={`${font}`}>
            {/* Logo */}
            <div className="logo">
                <h1>Watch World</h1>
            </div>

            {/* Nav Links */}
            <ul className={`${isMenuOpen ? 'open' : ''}`}>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/watches'}>Watches</Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/contact'}>Contact</Link></li>
                <MdShoppingCart className='cart-icon' />
            </ul>

            {/* Hamburger Menu */}
            <div className="menu-icon" onClick={toggleMenu}>
                <GiHamburgerMenu />
            </div>
        </nav>
    </>
  )
}
