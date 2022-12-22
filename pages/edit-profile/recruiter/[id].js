import React, { useRef, useState, useEffect } from 'react';
import Footer from '../../../components/Footer';
import axios from 'axios';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

const Index = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    const id = data.id;

    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/loginrekrut/login');
    }

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/recruiter/${id}`)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem('data'));
    const id = data.id;
    console.log(id);
    let formData = new FormData(e.target);
    if (photo !== '') {
      formData.append('photo', photo);
    }
    formData.append('id', id);
    axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/recruiter/${id}`, formData)
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Sucess Update',
          showConfirmButton: false,
          timer: 1800,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem('data'));
    const id = data.id;
    router.push(`/profile/recruiter/${id}`);
  };

  const deleted = () => {
    const data = JSON.parse(localStorage.getItem('data'));
    const id = data.id;
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/recruiter/${id}`, {
        headers: {
          token: localStorage.getItem('token'),
        },
      })
      .then((res) => {
        console.log(res);
        alert('Delete Success');
        router.push('/loginrekrut/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    console.log(event);
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    setPhoto(fileUploaded);
  };

  return (
    <>
      <div>
        <div className="">
          <div className="col-md-12 backgroundFlower"></div>
          <div className="col-md-12 bg-light">
            <div className="container ">
              <div className="row">
                <div className="col-md-3 mb-2 data">
                  <div className="col-md-12 bg-white mb-3 rounded p-2 px-4 ">
                    <div className="col-md-12 my-2">
                      <img src={`${process.env.NEXT_PUBLIC_API_URL}/${data.map((item) => item.photo)}`} width="100" alt="" className="mx-auto d-block rounded-circle" />
                      {/* edit */}
                      <div className="col-md-12 text-center ">
                        <button className="btn text-muted" onClick={handleClick}>
                          &#9998; Edit
                        </button>
                        <input type="file" ref={hiddenFileInput} id="formFile" name="photo" onChange={(e) => handleChange(e)} style={{ display: 'none' }} />
                      </div>
                    </div>
                    <div className="col-md-12 my-2 mt-4">
                      <h5>
                        {data.map((item) => {
                          return item.company;
                        })}
                      </h5>
                    </div>
                    <div className="col-md-12 my-2 mt-2">
                      <p>
                        {data.map((item) => {
                          return item.business;
                        })}
                      </p>
                    </div>
                    {/* alamat */}
                    <div className="col-md-12 my-2 mt-2">
                      <div className="row">
                        <div className="col-md-1">
                          <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="col-md-10">
                          <p className="text-muted">
                            {data.map((item) => {
                              return item.city;
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 ">
                    <button onClick={(e) => onSubmit(e)} type="button" className="btn button3 mb-2">
                      Simpan
                    </button>
                  </div>
                </div>

                <div className="col-md-8 bg-white mb-5 ms-4 rounded dataDiri">
                  <form action="" onSubmit={(e) => handleUpdate(e)}>
                    <h4 className="mt-3">Data diri</h4>
                    <hr />
                    <div className="col-md-12 my-3 text-muted px-2">
                      <label htmlFor="namaPanjang">Nama Panjang</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Masukkan nama panjang"
                        name="name"
                        defaultValue={data.map((item) => {
                          return item.name;
                        })}
                      />
                    </div>

                    <div className="col-md-12 my-3 text-muted px-2">
                      <label htmlFor="namaPerusahaan">Nama Perusahaan</label>
                      <input
                        type="text"
                        className="form-control"
                        id="company"
                        placeholder="Masukkan nama perusahaan"
                        name="company"
                        defaultValue={data.map((item) => {
                          return item.company;
                        })}
                      />
                    </div>
                    <div className="col-md-12 my-3 text-muted px-2">
                      <label htmlFor="business">Bidang</label>
                      <input
                        type="text"
                        className="form-control"
                        id="business"
                        placeholder="Masukkan bidang"
                        name="business"
                        defaultValue={data.map((item) => {
                          return item.business;
                        })}
                      />
                    </div>
                    <div className="col-md-12 my-3 text-muted px-2">
                      <label htmlFor="city">Kota</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="Masukkan kota"
                        name="city"
                        defaultValue={data.map((item) => {
                          return item.city;
                        })}
                      />
                    </div>
                    <div className="col-md-12 my-3 text-muted px-2">
                      <label htmlFor="description">Deskripsi</label>
                      <textarea
                        className="form-control"
                        id="description"
                        rows="5"
                        name="description"
                        defaultValue={data.map((item) => {
                          return item.description;
                        })}
                      ></textarea>
                    </div>
                    <div className="col-md-12 my-3 text-muted px-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Masukkan email"
                        name="email"
                        defaultValue={data.map((item) => {
                          return item.email;
                        })}
                      />
                    </div>
                    <div className="col-md-12 my-3 text-muted px-2">
                      <label htmlFor="instagram">Instagram</label>
                      <input
                        type="text"
                        className="form-control"
                        id="instagram"
                        placeholder="Masukkan instagram"
                        name="instagram"
                        defaultValue={data.map((item) => {
                          return item.instagram;
                        })}
                      />
                    </div>
                    <div className="col-md-12 my-3 text-muted px-2">
                      <label htmlFor="phone">No Telpon</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Masukkan no telpon"
                        name="phone"
                        defaultValue={data.map((item) => {
                          return item.phone;
                        })}
                      />
                    </div>
                    <div className="col-md-12 my-3 text-muted px-2">
                      <label htmlFor="linkedin">Linkedin</label>
                      <input
                        type="text"
                        className="form-control"
                        id="linkedin"
                        placeholder="Masukkan linkedin"
                        name="linkedin"
                        defaultValue={data.map((item) => {
                          return item.linkedin;
                        })}
                      />
                    </div>
                    <button type="submit" className="btn tambah">
                      Update
                    </button>
                    <button type="button" className="btn hapus mt-2" onClick={(e) => deleted(e)}>
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
Index.layout = 'L';
export default Index;
