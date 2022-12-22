import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';
import axios from 'axios';
import { useRouter } from 'next/router';

const home = (props) => {
  const router = useRouter();
  const [data, setData] = useState(props.user[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState('id');
  const [asc, setAsc] = useState('asc');

  const [name, setName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (name != '') {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/name/${name}`).then((res) => {
        setData(res.data.data);
        router.push(`/home?name=${name}`);
      });
    }
  };

  const getData = (sort, asc, limit, page) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/user?sort=${sort}&asc=${asc}&limit=${limit}${page ? `&page=${page}` : ''}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    getData(sort, asc, 3, currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      getData(sort, asc, 3, currentPage - 1);
    }
  };

  const handleSort = () => {
    if (sort == 'id') {
      setSort('name');
    } else {
      setSort('id');
    }
    getData(sort, asc, 3, currentPage);
  };

  const handleAsc = () => {
    if (asc == 'asc') {
      setAsc('desc');
    } else {
      setAsc('asc');
    }
    getData(sort, asc, 3, currentPage);
  };
  return (
    <>
      <main className="bg-none">
        <section className="container-fluid">
          <div className="row mx-5">
            <div className="col-md-12 my-5 pt-1  shadow-md border border bg-light" style={{ borderRadius: '20px' }}>
              <div className="container-fluid">
                <form action="" onSubmit={(e) => onSubmit(e)}>
                  <div className="input-group mb-3 mt-2">
                    <input type="text" className="form-control border border-0 bg-light" placeholder="Search for any skill" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) => setName(e.target.value)} />
                    {/* dropdown kategory */}
                    <div className="dropdown mx-5 border-start">
                      <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Kategori
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" onClick={handleSort}>
                            Sort by {sort}aaqaz
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" onClick={handleAsc}>
                            Sort by {asc}
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* end dropdown kategory */}
                    <button className="btn btn-primary button rounded" type="button" id="button-addon2" style={{ height: '50px', backgroundColor: '#5E50A1', border: 'none' }}>
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-12 my-5 pt-1  shadow-md border border bg-light" style={{ borderRadius: '20px' }}>
              {data.length === 0 ? (
                <h1>Loading...</h1>
              ) : (
                data.map((item, index) => (
                  <div key={index}>
                    <div className="card mb-3 border-0 my-4">
                      <div className="row g-0">
                        <div className="col-md-2 d-flex align-items-center justify-content-center bg-light">
                          <img
                            src={`${process.env.NEXT_PUBLIC_API_URL}/${item.photo}`}
                            width={150}
                            // height={100}
                            className="img-fluid rounded-circle"
                            style={{ backgroundImage: 'cover', width: '160px', height: '160px', border: '6px solid #5E50A1' }}
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body bg-light">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text text-muted">{item.job}</p>
                            <p className="card-text">
                              <small className="text-muted">{item.city}</small>
                            </p>
                            <button type="button" className="btn button4 mx-1 my-1" style={{ fontWeight: '600', fontSize: '17px', fontStyle: 'italic' }}>
                              {item.skil}
                            </button>
                          </div>
                        </div>
                        <div className="col-md-2 d-flex align-items-center justify-content-center bg-light">
                          <Link href={`/profile/user/${item.id}`}>
                            <button type="button" className="btn btn-primary button mx-1 my-1" style={{ backgroundColor: '#5E50A1', height: '50px', border: 'none' }}>
                              Lihat Profile
                            </button>
                          </Link>
                        </div>
                        <div className="bg-light">
                          <hr className="mt-3 bg-light " />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="d-flex justify-content-center my-3 mb-5">
              <nav aria-label="Page navigation example">
                <ul
                  className="pagination
                  "
                >
                  <li className="page-item">
                    <button className="page-link" aria-label="Previous" onClick={() => handlePrev()}>
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                  <li className="page-item">
                    <a className="page-link">{currentPage}</a>
                  </li>
                  <li className="page-item">
                    <button className="page-link" aria-label="Next" disabled={data.data <= 0} onClick={() => handleNext()}>
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                  <li className="page-item">
                    <button className="page-link" aria-label="Next" onClick={() => handleSort()}>
                      <span aria-hidden="true">{sort}</span>
                    </button>
                  </li>
                  <li className="page-item">
                    <button className="page-link" aria-label="Next" onClick={() => handleAsc()}>
                      <span aria-hidden="true">{asc}</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

home.layout = 'L';

//SSR
export async function getServerSideProps(context) {
  const user = [];
  try {
    const data = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user?sort=name&asc=asc&limit=3&page=1
      }`
    );
    user.push(data.data.data);
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      user,
    },
  };
}

export default home;
