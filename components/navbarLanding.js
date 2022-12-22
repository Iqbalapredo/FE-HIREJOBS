import React from 'react';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import logo from '../public/logo2.svg';
import Link from 'next/link';

export default function navbarLanding() {
  return (
    <div>
      <nav className="navbar bg-none fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image src={logo} alt="Bootstrap" />
          </a>
          <div>
            <Link href="/login">
              <button className={`${styles.color} btn btn-outline-primary me-3`}>Masuk</button>
            </Link>
            <Link href="/register">
              <button className={`${styles.colorA} btn btn-primary border-none`}>daftar</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
