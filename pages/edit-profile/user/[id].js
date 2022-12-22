import React, { useState, useRef, useEffect } from 'react';
import Footer from '../../../components/Footer';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import style from '../../../styles/Edituser.module.css';
import Swal from 'sweetalert2';

const detail = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    const id = data.id;
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      .put(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`, formData)
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

  const deleted = () => {
    const data = JSON.parse(localStorage.getItem('data'));
    const id = data.id;
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`)
      .then((res) => {
        console.log(res);
        alert('Delete Success');
        router.push('/login');
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
      <div className="">
        <div className="col-md-12 backgroundFlower"></div>
        <div className="col-md-12 bg-light">
          <div className="container ">
            <div className="row">
              <div className="col-md-3 data">
                <div className="col-md-12 bg-white p-2 px-4 mb-3 " style={{ borderRadius: '20px' }}>
                  <div className="col-md-12 my-2">
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}/${
                        Object.keys(data).length ? (
                          data.isLoading ? (
                            <p>Loading...</p>
                          ) : (
                            data.map((data) => {
                              return data.photo;
                            })
                          )
                        ) : null
                      }`}
                      width="100"
                      alt=""
                      className="mx-auto d-block rounded-circle"
                    />
                    {/* edit */}
                    <div className="col-md-12 text-center ">
                      <button style={{ color: 'white' }} className="btn  button mt-2" onClick={handleClick}>
                        &#9998; Edit Image
                      </button>
                      <input type="file" ref={hiddenFileInput} id="formFile" name="photo" onChange={(e) => handleChange(e)} style={{ display: 'none' }} />
                    </div>
                  </div>
                  <div className="col-md-12 my-2 mt-4">
                    <h5>
                      {Object.keys(data).length ? (
                        data.isLoading ? (
                          <p>Loading...</p>
                        ) : (
                          data.map((data) => {
                            return data.name;
                          })
                        )
                      ) : null}
                    </h5>
                  </div>
                  <div className="col-md-12 my-2 mt-2">
                    <p>
                      {Object.keys(data).length ? (
                        data.isLoading ? (
                          <p>Loading...</p>
                        ) : (
                          data.map((data) => {
                            return data.job;
                          })
                        )
                      ) : null}
                    </p>
                  </div>

                  <div className="col-md-12 my-2 mt-2">
                    <div className="row">
                      <div className="col-md-1">
                        <i className="fa fa-map-marker"></i>
                      </div>
                      <div className="col-md-10">
                        <p className="text-muted">
                          {Object.keys(data).length ? (
                            data.isLoading ? (
                              <p>Loading...</p>
                            ) : (
                              data.map((data) => {
                                return data.city;
                              })
                            )
                          ) : null}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 my-2 mt-2">
                    <p className="text-muted">
                      {Object.keys(data).length ? (
                        data.isLoading ? (
                          <p>Loading...</p>
                        ) : (
                          data.map((data) => {
                            return data.description;
                          })
                        )
                      ) : null}
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <Link href="/home">
                    <button type="button" className="btn button3 mb-2">
                      Simpan
                    </button>
                  </Link>
                  <button type="button" className="btn button2 w-100">
                    Batal
                  </button>
                </div>
              </div>

              <div className={`col-lg-8 col-12 ${style.edit}`}>
                {/* card edit profile */}
                <form onSubmit={(e) => handleUpdate(e)}>
                  <div className={`card ${style.card}`} style={{ borderRadius: '20px' }}>
                    <div className="card-body d-flex flex-column">
                      <label className={style.dataDiri}>Data diri</label>
                      <label className={style.input}>Nama lengkap</label>
                      <input
                        className={style.input1}
                        type="text"
                        id="name"
                        placeholder="Nama"
                        name="name"
                        defaultValue={
                          Object.keys(data).length ? (
                            data.isLoading ? (
                              <p>Loading...</p>
                            ) : (
                              data.map((data) => {
                                return data.name;
                              })
                            )
                          ) : null
                        }
                      />
                      <label className={style.input}>Job Desk</label>
                      <input
                        className={style.input1}
                        type="text"
                        id="job"
                        placeholder="Jobdesk"
                        name="job"
                        defaultValue={
                          Object.keys(data).length ? (
                            data.isLoading ? (
                              <p>Loading...</p>
                            ) : (
                              data.map((data) => {
                                return data.job;
                              })
                            )
                          ) : null
                        }
                      />
                      <label className={style.input}>Domisili</label>
                      <input
                        className={style.input1}
                        type="text"
                        id="city"
                        placeholder="Domisili"
                        name="city"
                        defaultValue={
                          Object.values(data).length ? (
                            data.isLoading ? (
                              <p>Loading...</p>
                            ) : (
                              data.map((data) => {
                                return data.city;
                              })
                            )
                          ) : null
                        }
                      />
                      <label className={style.input}>Phone</label>
                      <input
                        className={style.input1}
                        type="text"
                        id="phone"
                        placeholder="+62"
                        name="phone"
                        defaultValue={
                          Object.values(data).length ? (
                            data.isLoading ? (
                              <p>Loading...</p>
                            ) : (
                              data.map((data) => {
                                return data.phone;
                              })
                            )
                          ) : null
                        }
                      />
                      <label className={style.input}>Instagram</label>
                      <input
                        className={style.input1}
                        type="text"
                        id="instagram"
                        placeholder="@instagram"
                        name="instagram"
                        defaultValue={
                          Object.values(data).length ? (
                            data.isLoading ? (
                              <p>Loading...</p>
                            ) : (
                              data.map((data) => {
                                return data.instagram;
                              })
                            )
                          ) : null
                        }
                      />
                      <label className={style.input}>github</label>
                      <input
                        className={style.input1}
                        type="text"
                        id="github"
                        placeholder="@github"
                        name="github"
                        defaultValue={
                          Object.values(data).length ? (
                            data.isLoading ? (
                              <p>Loading...</p>
                            ) : (
                              data.map((data) => {
                                return data.github;
                              })
                            )
                          ) : null
                        }
                      />
                      <label className={style.input}>gitlab</label>
                      <input
                        className={style.input1}
                        type="text"
                        id="gitlab"
                        placeholder="@gitlab"
                        name="gitlab"
                        defaultValue={
                          Object.values(data).length ? (
                            data.isLoading ? (
                              <p>Loading...</p>
                            ) : (
                              data.map((data) => {
                                return data.gitlab;
                              })
                            )
                          ) : null
                        }
                      />
                      <label className={style.input}>Deskripsi singkat</label>
                      <input
                        className={style.input1}
                        id="description"
                        rows="5"
                        placeholder="Tuliskan Secara Singkat"
                        name="description"
                        defaultValue={
                          Object.keys(data).length ? (
                            data.isLoading ? (
                              <p>Loading...</p>
                            ) : (
                              data.map((data) => {
                                return data.description;
                              })
                            )
                          ) : null
                        }
                      />
                    </div>
                  </div>

                  {/* card add Skill */}
                  <div className={`card mt-5 mb-5 ${style.card}`} style={{ borderRadius: '20px' }}>
                    <div className="card-body d-flex flex-column">
                      <label className={style.profile}>Skill</label>
                      <div className={style.skill} />
                      <input
                        className={style.input1}
                        type="text"
                        id="skil"
                        name="skil"
                        placeholder="Java"
                        defaultValue={
                          Object.keys(data).length ? (
                            data.isLoading ? (
                              <p>Loading...</p>
                            ) : (
                              data.map((data) => {
                                return data.skil;
                              })
                            )
                          ) : null
                        }
                      />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <label className={style.profile}>Pengalaman kerja</label>
                      <label className={style.input}>Posisi</label>
                      <input
                        className={style.input1}
                        id="titlejob"
                        placeholder="job"
                        name="titlejob"
                        defaultValue={
                          Object.keys(data).length ? (
                            data.isLoading ? (
                              <p>Loading...</p>
                            ) : (
                              data.map((data) => {
                                return data.titlejob;
                              })
                            )
                          ) : null
                        }
                      />
                      <div className="d-flex w-100">
                        <div className={`d-flex flex-column w-100 ${style.input2}`}>
                          <label className={style.input}>Nama Perusahaan</label>
                          <input
                            className={style.input1}
                            type="input"
                            id="company"
                            placeholder="company"
                            name="company"
                            defaultValue={
                              Object.keys(data).length ? (
                                data.isLoading ? (
                                  <p>Loading...</p>
                                ) : (
                                  data.map((data) => {
                                    return data.company;
                                  })
                                )
                              ) : null
                            }
                          />
                        </div>
                        <div className={style.spa} />
                        <div className={`d-flex flex-column w-100 ${style.input2}`}>
                          <label className={style.input}>Bulan/tahun</label>
                          <input
                            id="datein"
                            className={style.tanggal}
                            type="text"
                            placeholder="date in and date out"
                            name="datein"
                            defaultValue={
                              Object.keys(data).length ? (
                                data.isLoading ? (
                                  <p>Loading...</p>
                                ) : (
                                  data.map((data) => {
                                    return data.datein;
                                  })
                                )
                              ) : null
                            }
                          />
                        </div>
                      </div>
                      <label className={style.input}>Deskripsi singkat</label>
                      <textarea
                        className={style.text}
                        id="descriptionjob"
                        placeholder="description"
                        name="descriptionjob"
                        defaultValue={
                          Object.keys(data).length ? (
                            data.isLoading ? (
                              <p>Loading...</p>
                            ) : (
                              data.map((data) => {
                                return data.descriptionjob;
                              })
                            )
                          ) : null
                        }
                      />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <label className={style.profile}>Portofolio</label>
                      <label className={style.input}>Nama Aplikasi</label>
                      <input
                        className={style.input1}
                        type="text"
                        id="titleporto"
                        placeholder="porto"
                        name="titleporto"
                        defaultValue={
                          Object.keys(data).length ? (
                            data.isLoading ? (
                              <p>Loading...</p>
                            ) : (
                              data.map((data) => {
                                return data.titleporto;
                              })
                            )
                          ) : null
                        }
                      />
                      <label className={style.input}>Link Repository</label>
                      <input
                        className={style.input1}
                        type="text"
                        id="link"
                        placeholder="Link repo"
                        name="link"
                        defaultValue={
                          Object.keys(data).length ? (
                            data.isLoading ? (
                              <p>Loading...</p>
                            ) : (
                              data.map((data) => {
                                return data.link;
                              })
                            )
                          ) : null
                        }
                      />
                      <label className={style.input}>Type Portofolio</label>
                      <input
                        className={style.input1}
                        type="text"
                        id="type"
                        placeholder="type app"
                        name="type"
                        defaultValue={
                          Object.keys(data).length ? (
                            data.isLoading ? (
                              <p>Loading...</p>
                            ) : (
                              data.map((data) => {
                                return data.type;
                              })
                            )
                          ) : null
                        }
                      />
                      <button type="submit" className={style.button5}>
                        Update Data
                      </button>
                      <div>
                        <button type="button" className="btn hapus mt-2" onClick={(e) => deleted(e)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
detail.layout = 'L';
export default detail;
