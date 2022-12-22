import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/Hire.module.css';
import { Row, Col, Card, CardTitle, CardText, Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';
import Nvbar from '../../components/navbar';
import Footer from '../../components/Footer';

const Hire = () => {
  return (
    <div
      style={{
        backgroundColor: '#E5E5E5',
      }}
    >
      <Nvbar />
      <Row className={styles.contentMargin}>
        <Col sm="3" className={styles.profileMargin}>
          <Card body>
            <Image src="/images/Rectangle683.jpg" className={styles.imageProfile} width={200} height={200} alt="..." />
            <CardTitle tag="h1">Louis Tomlinson</CardTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci.</p>
            <div className="text-muted">
              <CardText>
                <FontAwesomeIcon icon={faLocationDot} className="px-2" style={{ fontSize: 20, color: '#9EA0A5' }} />
                Purwokerto, Jawa Tengah
              </CardText>
              <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</CardText>
            </div>
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
          </Card>
        </Col>
        <Col sm="8" className={styles.profileMargin}>
          <h1>
            <b>Hubungi Louis Tomlinson</b>
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
          <Form>
            <FormGroup className="py-3">
              <Label for="fullname" className="text-muted">
                Nama Lengkap
              </Label>
              <Input id="fullname" name="fullname" placeholder="Masukkan nama lengkap" />
            </FormGroup>
            <FormGroup className="py-3">
              <Label for="email" className="text-muted">
                E-mail
              </Label>
              <Input id="email" name="email" placeholder="Masukkan e-mail" type="email" />
            </FormGroup>
            <FormGroup className="py-3">
              <Label for="phone_number" className="text-muted">
                No. Handphone
              </Label>
              <Input id="phone_number" name="phone_number" placeholder="Masukkan nomor handphone" />
            </FormGroup>
            <FormGroup className="py-3">
              <Label for="short_description" className="text-muted">
                Deskripsi Singkat
              </Label>
              <Input id="short_description" name="short_description" placeholder="Tuliskan deskripsi singkat" type="textarea" rows="5" />
            </FormGroup>
            <div className="py-3">
              <Button color="warning" className="col-12 text-white">
                Hire
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

Hire.layout = 'L3';
export default Hire;
