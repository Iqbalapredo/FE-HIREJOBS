/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import Swal from 'sweetalert2';
import styleAuth from '../../styles/decorationAuth.module.css';
import Decorauth from '../../components/decorationAuth';

export default function register() {
  const router = useRouter();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    confirm: '',
  });

  const onChange = (e, field) => {
    setData({
      ...data,
      [field]: e.target.value,
    });
  };

  const onClick = (e) => {
    e.preventDefault();
    if (data.password === data.confirm) {
      const body = {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
      };
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/register`, body, {})
        .then((res) => {
          res;
          Swal.fire({
            icon: 'success',
            title: 'Sucess register!',
            showConfirmButton: false,
            timer: 1800,
          });
          router.push('/login');
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Gagal register',
            showConfirmButton: false,
            timer: 1800,
          });
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Password harus sama!',
        showConfirmButton: false,
        timer: 1800,
      });
    }
  };

  return (
    <div className={`row g-0 ${styleAuth.contain}`}>
      <Decorauth />
      <div className={`col-md-6 ${styleAuth.overflowRegisterScroll}`}>
        <div className={styleAuth.formInputRegisterWorker}>
          <div className={styleAuth.formGroup}>
            <h1 style={{ marginLeft: '120px' }} className={styleAuth.inputH1}>
              Halo, Pewpeople
            </h1>
            <small style={{ marginLeft: '120px', width: '65%' }} className={styleAuth.inputSmall}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
            </small>
            <form>
              <label className={styleAuth.inputLabel}>Name</label>
              <input onChange={(e) => onChange(e, 'name')} className={styleAuth.formInputType} type="text" placeholder="Name" />
              <label className={styleAuth.inputLabel}>Email</label>
              <input onChange={(e) => onChange(e, 'email')} className={styleAuth.formInputType} type="email" placeholder="Email Address" />
              <label className={styleAuth.inputLabel}>No Handphone</label>
              <input onChange={(e) => onChange(e, 'phone')} className={styleAuth.formInputType} type="text" placeholder="Phone Number" />
              <label className={styleAuth.inputLabel}>Kata Sandi</label>
              <input onChange={(e) => onChange(e, 'password')} className={styleAuth.formInputType} type="password" placeholder="Password" />
              <label className={styleAuth.inputLabel}>Konfirmasi Kata Sandi</label>
              <input onChange={(e) => onChange(e, 'confirm')} className={styleAuth.formInputType} type="password" placeholder="Confirm Password" />
              <button onClick={(e) => onClick(e)} className={styleAuth.inputButton} type="submit">
                Daftar Pencari kerja
              </button>
            </form>
            <Link href="/registerrekrut">
              <button className={styleAuth.inputButton}>Daftar Perekrut</button>
            </Link>
            {/* <a className={styleAuth.inputAhref} href="">Forgot Password ?</a> */}
            <div className={styleAuth.formNoAccount}>
              <label className={styleAuth.inputLabel}>Don&apos;t have an account? </label>
              <div style={{ marginTop: '13px', marginLeft: '5px' }}>
                <Link href="/login" style={{ marginTop: '50px' }} className={styleAuth.inputAhrefLink}>
                  Masuk disini
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
