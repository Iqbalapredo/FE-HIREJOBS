import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '../public/logo.png';
import mail from '../public/mail.png';
import bel from '../public/bel.png';
import user from '../public/cristian.png';
import styles from '../styles/Navbar.module.css';
import Swal from 'sweetalert2';

const navbar = () => {
  const router = useRouter();
  const [data, setData] = useState();
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState();

  useEffect(() => {
    const data = localStorage.getItem(`data`);
    const getName = localStorage.getItem('name');

    if (data) {
      console.log(data);
      setData(data);
      setIsActive(true);
      setName(getName);
    }
  }, []);
  console.log(name);

  const onLogout = (e) => {
    // e.prevenDefault();
    localStorage.clear();
    Swal.fire({
      icon: 'success',
      title: 'Sucess logout!',
      showConfirmButton: false,
      timer: 1800,
    });
    router.push('/login');
  };

  return (
    <>
      <nav className="navbar bg-none " style={{ height: '100px' }}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image src={logo} alt="Bootstrap" />
          </a>

          <a className={`${styles.margin} navbar-brand`} href="#">
            <Image className={styles.margin} src={bel} alt="Bootstrap" />
            <Image className={styles.margin} src={mail} alt="Bootstrap" />
            <Image src={user} alt="Bootstrap" className={styles.border} />
            {/* <span>ss</span> */}

            {isActive ? (
              <button onClick={onLogout} className="btn btn-danger ms-4">
                Logout
              </button>
            ) : (
              ''
            )}
          </a>
        </div>
      </nav>
    </>
  );
};

export default navbar;
