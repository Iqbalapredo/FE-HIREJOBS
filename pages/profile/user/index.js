import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPen } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../styles/Profile.module.css';
import { Row, Col, Card, CardTitle, CardText, Button, ButtonGroup, Container } from 'reactstrap';
import Nvbar from '../../../components/navbar';
import Footer from '../../../components/Footer';
import tokopedia from '../../../public/tokopedia.jpg';

const userProfile = () => {
  return (
    <>
      <Nvbar />
      <div className={styles.profileBackground}>
        <Row className={styles.contentMargin}>
          <Col sm="3" className={styles.profileMargin}>
            <Card body>
              <Image src="/images/Rectangle683.jpg" className={styles.imageProfile} width={200} height={200} alt="..." />
              <CardTitle tag="h1">Louis Tomlinson</CardTitle>
              <p>Web Developer</p>
              <div className="text-muted">
                <CardText>
                  <FontAwesomeIcon icon={faLocationDot} className="px-2" style={{ fontSize: 20, color: '#9EA0A5' }} />
                  Purwokerto, Jawa Tengah
                </CardText>
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</CardText>
              </div>
              <a href="/edit-profile/user">
                <Button color="primary" outline className="mt-4 col-12" style={{ color: '#5E50A1 !important' }}>
                  <FontAwesomeIcon icon={faPen} style={{ fontSize: 20 }} />
                  Edit
                </Button>
              </a>
              <Button color="primary" className="mt-2 col-12" style={{ backgroundColor: '#5E50A1' }}>
                Hire
              </Button>
              <CardTitle tag="h1" className="py-3">
                Skills
              </CardTitle>
              <ButtonGroup className="py-3">
                <Button className="me-3" style={{ backgroundColor: '#FBB017' }}>
                  Python
                </Button>
                <Button className="me-3" style={{ backgroundColor: '#FBB017' }}>
                  Laravel
                </Button>
                <Button className="me-3" style={{ backgroundColor: '#FBB017' }}>
                  Golang
                </Button>
              </ButtonGroup>
              <ButtonGroup className="py-3">
                <Button className="me-3" style={{ backgroundColor: '#FBB017' }}>
                  JavaScript
                </Button>
                <Button className="me-3" style={{ backgroundColor: '#FBB017' }}>
                  PHP
                </Button>
                <Button className="me-3" style={{ backgroundColor: '#FBB017' }}>
                  HTML
                </Button>
              </ButtonGroup>
              <ButtonGroup className="py-3">
                <Button className="me-3" style={{ backgroundColor: '#FBB017' }}>
                  C++
                </Button>
                <Button className="me-3" style={{ backgroundColor: '#FBB017' }}>
                  Kotlin
                </Button>
                <Button className="me-3" style={{ backgroundColor: '#FBB017' }}>
                  Swift
                </Button>
              </ButtonGroup>
              <div className="text-muted py-4">
                <CardText>
                  <Image src="/images/mail4.svg" width={23} height={23} />
                  &nbsp; Louistommo@gmail.com
                </CardText>
                <CardText>
                  <Image src="/images/instagram.svg" width={23} height={23} />
                  &nbsp; @Louist91
                </CardText>
                <CardText>
                  <Image src="/images/github.svg" width={23} height={23} />
                  &nbsp; @Louistommo
                </CardText>
                <CardText>
                  <Image src="/images/gitlab.svg" width={23} height={23} />
                  &nbsp; @Louistommo91
                </CardText>
              </div>
            </Card>
          </Col>
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
                        <Row>
                          <Col md={4}>
                            <Image src="/images/Rectangle637.jpg" className="card-img-top" width={219} height={148} />
                            <div className="text">
                              <p>Reminder App</p>
                            </div>
                          </Col>
                          <Col md={4}>
                            <Image src="/images/Rectangle638.jpg" className="card-img-top" width={219} height={148} />
                            <div className="text">
                              <p>Social Media App</p>
                            </div>
                          </Col>
                          <Col md={4}>
                            <Image src="/images/Rectangle639.jpg" className="card-img-top" width={219} height={148} />
                            <div className="text">
                              <p>Project Management Web</p>
                            </div>
                          </Col>
                        </Row>
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
                        <Row>
                          <Col className="text-start px-3">
                            <Image src={tokopedia} style={{ width: '100px', height: '100px' }} />
                            <span style={{ fontWeight: '700', fontSize: '36px' }}>Engineer</span>

                            <h5 style={{ fontWeight: '700' }}>Tokopedia</h5>
                            <p className="text-muted">July 2019 - January 2020/6 Months</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                          </Col>
                        </Row>
                      </div>
                      <hr />
                      <div className="box">
                        <Row>
                          <Col className="text-start px-3">
                            <Image src={tokopedia} style={{ width: '100px', height: '100px' }} />
                            <span style={{ fontWeight: '700', fontSize: '36px' }}>Web Developer</span>

                            <h5 style={{ fontWeight: '700' }}>Tokopedia</h5>
                            <p className="text-muted">July 2019 - January 2020/6 Months</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                          </Col>
                        </Row>
                      </div>
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

userProfile.layout = 'L3';
export default userProfile;
