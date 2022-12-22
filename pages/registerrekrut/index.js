/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import Swal from 'sweetalert2';
import styleAuth from '../../styles/decorationAuth.module.css';
import Decorauth from '../../components/decorationAuth';

export default function registerRec() {
  const router = useRouter();
  const [data, setData] = useState({
    name: '',
    email: '',
    company: '',
    department: '',
    phone: '',
    password: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    if (data.name === '' || data.email === '' || data.company === '' || data.department === '' || data.phone === '' || data.password === '') {
      Swal.fire({
        icon: 'error',
        title: 'Please fill all the field',
        showConfirmButton: false,
        timer: 1800,
      });
    } else {
      const body = {
        name: data.name,
        email: data.email,
        company: data.company,
        department: data.department,
        phone: data.phone,
        password: data.password,
      };
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/recruiter/register`, body)
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: 'Sucess register!',
            showConfirmButton: false,
            timer: 1800,
          });
          router.push('/loginrekrut/login');
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Gagal register!',
            showConfirmButton: false,
            timer: 1800,
          });
      
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
            <form onSubmit={(e) => onSubmit(e)}>
              <label className={styleAuth.inputLabel}>Name</label>
              <input onChange={(e) => setData({ ...data, name: e.target.value })} className={styleAuth.formInputType} type="text" placeholder="Name" />
              <label className={styleAuth.inputLabel}>Email</label>
              <input onChange={(e) => setData({ ...data, email: e.target.value })} className={styleAuth.formInputType} type="email" placeholder="Email Address" />
              <label className={styleAuth.inputLabel}>Perusahaan</label>
              <input onChange={(e) => setData({ ...data, company: e.target.value })} className={styleAuth.formInputType} type="text" placeholder="Email Address" />
              <label className={styleAuth.inputLabel}>Jabatan</label>
              <input onChange={(e) => setData({ ...data, department: e.target.value })} className={styleAuth.formInputType} type="text" placeholder="Email Address" />
              <label className={styleAuth.inputLabel}>No Handphone</label>
              <input onChange={(e) => setData({ ...data, phone: e.target.value })} className={styleAuth.formInputType} type="text" placeholder="Phone Number" />
              <label className={styleAuth.inputLabel}>Kata Sandi</label>
              <input onChange={(e) => setData({ ...data, password: e.target.value })} className={styleAuth.formInputType} type="password" placeholder="Password" />
              <label className={styleAuth.inputLabel}>Konfirmasi Kata Sandi</label>
              <input className={styleAuth.formInputType} type="password" placeholder="Confirm Password" />

              <button className={styleAuth.inputButton} type="submit">
                Daftar Perekrut
              </button>
            </form>
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
