import React from 'react';
import style from '../styles/style.module.css';
import logo from '../public/logo.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Image className="mb-3" src={logo} alt="logo" />
      <br></br>
      <p className="d-inline-block w-50">Bersama memajukan bangsa dalam mengembangkan sumber daya manusia yang berkualitas.</p>
      <hr style={{ borderTop: '2px solid white' }} />
      <div className="d-flex justify-content-between">
        <p>2020 Pewworld. All right reserved</p>
        <div className="d-flex justify-content-end">
          <p>Telepon</p>
          <p style={{ marginLeft: '15px' }}>Email</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
