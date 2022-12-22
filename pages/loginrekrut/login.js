import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import Decorauth from '../../components/decorationAuth';
import styleAuth from '../../styles/decorationAuth.module.css';
import Swal from 'sweetalert2';


//CSR
export default function login() {
  const router = useRouter();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    if (data.email === '' || data.password === '') {
      alert('Please fill all the field');
    } else {
      const body = {
        email: data.email,
        password: data.password,
      };
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/recruiter/login`, body)
        .then((res) => {
          localStorage.setItem('token', res.data.token.token);
          localStorage.setItem('data', JSON.stringify(res.data.token.data));
          document.cookie = `token=${res.data.token.token}`;
          document.cookie = `data=${JSON.stringify(res.data.token.data)}`;
          Swal.fire({
            icon: 'success',
            title: 'Sucess Login!',
            showConfirmButton: false,
            timer: 1800,
          });
          
          router.push('/home/indexRec');
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Login Failed!',
            showConfirmButton: false,
            timer: 1800,
          });
  
        });
    }
  };

  return (
    <div className="row g-0">
      <Decorauth />
      <div className="col-md-6">
        <div className={styleAuth.formInput}>
          <div className={styleAuth.formGroup}>
            <h1 className={styleAuth.inputH1}>Halo, Pewpeople</h1>
            <small className={styleAuth.inputSmall}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</small>

            <form onSubmit={(e) => onSubmit(e)} method="get" action="/profile">
              <label className={styleAuth.inputLabel}>Email</label>
              <input onChange={(e) => setData({ ...data, email: e.target.value })} className={styleAuth.formInputType} type="text" placeholder="User Name" />
              <label className={styleAuth.inputLabel}>Password</label>
              <input onChange={(e) => setData({ ...data, password: e.target.value })} className={styleAuth.formInputType} type="password" placeholder="Password" />
              <button onClick={(e) => onSubmit(e)} className={styleAuth.inputButton} type="submit">
                Masuk
              </button>
              <Link href={'/loginrekrut/login'}>
                <button className={styleAuth.inputButton} type="button">
                  Masuk sebagai Perekrut
                </button>
              </Link>
              {/* <a className={styleAuth.inputAhref} href="">Forgot Password ?</a> */}
              <div className={styleAuth.formNoAccount}>
                <label className={styleAuth.inputLabel}>Dont&post have an account? </label>
                <div style={{ marginTop: '13px', marginLeft: '5px' }}>
                  <Link href="/register" style={{ marginTop: '50px' }} className={styleAuth.inputAhrefLink}>
                    Daftar disini
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
