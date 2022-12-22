import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPen } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../styles/Profile.module.css';
import { Row, Col, Card, CardTitle, CardText, Button, ButtonGroup, Container } from 'reactstrap';
import Footer from '../../../components/Footer';
import tokopedia from '../../../public/tokopedia.jpg';
import axios from 'axios';

const userProfile = (props) => {
  const [data, setData] = useState(props.responeUser[0]);
  return (
    <>
      {/* <Nvbar /> */}
      <div className={styles.profileBackground}>
        <Row className={styles.contentMargin}>
          {data.map((item) => (
            <Col sm="3" className={styles.profileMargin}>
              <Card body style={{ borderRadius: '20px', boxShadow: '6px 7px 16px 4px rgba(0, 0, 0, 0.1)' }}>
                <img src={`${process.env.NEXT_PUBLIC_API_URL}/${item.photo}`} className={styles.imageProfile} style={{ width: '200px', height: '200px', backgroundImage: 'cover', border: '6px solid  #5E50A1' }} alt="..." />
                <CardTitle tag="h1">{item.name}</CardTitle>
                <p>{item.job}</p>
                <div className="text-muted">
                  <CardText>
                    <FontAwesomeIcon icon={faLocationDot} className="px-2" style={{ fontSize: 20, color: '#9EA0A5' }} />
                    {item.city}
                  </CardText>
                  <CardText>{item.description}</CardText>
                </div>
                <Link href={`/edit-profile/user/${item.id}`}>
                  <Button color="primary" outline className="mt-4 col-12" style={{ color: '#5E50A1 !important' }}>
                    <FontAwesomeIcon icon={faPen} style={{ fontSize: 20 }} />
                    Edit
                  </Button>
                </Link>

                <Link href={`/hire/${item.id}`}>
                  <Button color="primary" className="mt-2 col-12" style={{ backgroundColor: '#5E50A1' }}>
                    Hire
                  </Button>
                </Link>
                <CardTitle tag="h1" className="py-3">
                  Skills
                </CardTitle>
                <ButtonGroup className="py-3">
                  <Button className="me-3" style={{ backgroundColor: '#FBB017' }}>
                    {item.skil}
                  </Button>
                </ButtonGroup>

                <div className="text-muted py-4">
                  <CardText>
                    <Image src="/images/mail4.svg" width={23} height={23} />
                    &nbsp; {item.email}
                  </CardText>
                  <CardText>
                    <Image src="/images/instagram.svg" width={23} height={23} />
                    &nbsp; {item.instagram}
                  </CardText>
                  <CardText>
                    <Image src="/images/github.svg" width={23} height={23} />
                    &nbsp; {item.github}
                  </CardText>
                  <CardText>
                    <Image src="/images/gitlab.svg" width={23} height={23} />
                    &nbsp; {item.gitlab}
                  </CardText>
                </div>
              </Card>
            </Col>
          ))}

          <Col sm="8" className={styles.profileMargin}>
            <Card
              className={styles.ss}
              body
              style={{
                height: '600px',
              }}
            >
              <Container>
                <div className="recipe-navbar">
                  <div className="subnav">
                    <Button className="subnavbtn">Portofolio</Button>
                    <div className="subnav-content text-center">
                      <div className="box">
                        {data.map((item) => (
                          <Row>
                            <Col md={4}>
                              <Image src="/images/Rectangle637.jpg" className="card-img-top" width={219} height={148} />
                              <div className="text">
                                <p>{item.titleporto}</p>
                              </div>
                            </Col>
                          </Row>
                        ))}
                      </div>
                      <div className="box">
                        <Row>
                          <Col md={4}>
                            <Image src="/images/Rectangle640.jpg" className="card-img-top" width={219} height={148} />
                            <div className="text">
                              <p>Reminder App</p>
                            </div>
                          </Col>
                          <Col md={4}>
                            <Image src="/images/Rectangle641.jpg" className="card-img-top" width={219} height={148} />
                            <div className="text">
                              <p>Social Media App</p>
                            </div>
                          </Col>
                          <Col md={4}>
                            <Image src="/images/Rectangle642.jpg" className="card-img-top" width={219} height={148} />
                            <div className="text">
                              <p>Project Management Web</p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                  <div className="subnav">
                    <Button className="subnavbtn">Pengalaman Kerja</Button>
                    <div className="subnav-content text-center">
                      <div className="box">
                        {data.map((item) => (
                          <Row>
                            <Col className="text-start px-3">
                              <Image src={tokopedia} style={{ width: '100px', height: '100px' }} />
                              <span style={{ fontWeight: '700', fontSize: '36px' }}>{item.titleJob}</span>

                              <h5 style={{ fontWeight: '700' }}>{item.company}</h5>
                              <p className="text-muted">{item.datein}</p>
                              <p>{item.descriptionjob}</p>
                            </Col>
                          </Row>
                        ))}
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </Container>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

userProfile.layout = 'L';

//SSR
export async function getServerSideProps(context) {
  const id = context.params.id;
  let responeUser = [];

  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`);
    responeUser.push(data.data);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      responeUser,
    },
  };
}

export default userProfile;
