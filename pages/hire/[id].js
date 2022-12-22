import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/Hire.module.css';
import { Row, Col, Card, CardTitle, CardText, Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';
import Nvbar from '../../components/navbar';
import Footer from '../../components/Footer';
import axios from 'axios';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

const Hire = (props) => {
  const router = useRouter();
  const [data, setData] = useState(props.resData[0]);
  const { id } = router.query;

  const handleClick = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Sucess Hire!',
      showConfirmButton: false,
      timer: 1800,
    });
    router.push('/home');
  };

  return (
    <div
      style={{
        backgroundColor: '#E5E5E5',
      }}
    >
      <Nvbar />
      <Row className={styles.contentMargin}>
        {data.map((item) => (
          <Col sm="4" className={styles.profileMargin}>
            <Card style={{ height: '76vh', borderRadius: '20px' }} body>
              <img src={`${process.env.NEXT_PUBLIC_API_URL}/${item.photo}`} className={styles.imageProfile} width={200} height={200} style={{ backgroundImage: 'cover', border: '6px solid  #5E50A1' }} alt="..." />
              <CardTitle tag="h1">{item.name}</CardTitle>
              <p>{item.jobk}</p>
              <div className="text-muted">
                <CardText>
                  <FontAwesomeIcon icon={faLocationDot} className="px-2" style={{ fontSize: 20, color: '#9EA0A5' }} />
                  {item.city}
                </CardText>
                <CardText>{item.description}</CardText>
              </div>
              <CardTitle tag="h1" className="py-3">
                Skills
              </CardTitle>
              <ButtonGroup className="py-3">
                <Button className="me-3" style={{ backgroundColor: '#5E50A1', height: '50px' }}>
                  {item.skil}
                </Button>
              </ButtonGroup>
            </Card>
          </Col>
        ))}

        <Col sm="8" className={styles.profileMargin}>
          <Form>
            <h1>
              <b>Hubungi Saya</b>
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
          </Form>

          {data.map((item) => (
            <Form>
              <FormGroup>
                <Label for="fullname" className="text-muted">
                  Nama Lengkap
                </Label>
                <Input style={{ height: '50px' }} defaultValue={item.name} id="fullname" name="fullname" placeholder="masukkan nama" />
              </FormGroup>
              <FormGroup>
                <Label for="email" className="text-muted">
                  E-mail
                </Label>
                <Input style={{ height: '50px' }} defaultValue={item.email} id="email" name="email" placeholder="masukkan email" type="email" />
              </FormGroup>
              <FormGroup>
                <Label for="phone_number" className="text-muted">
                  No. Handphone
                </Label>
                <Input style={{ height: '50px' }} defaultValue={item.phone} id="phone_number" name="phone_number" placeholder="masukkan phone" />
              </FormGroup>
              <FormGroup>
                <Label for="short_description" className="text-muted">
                  Deskripsi Singkat
                </Label>
                <Input style={{ height: '140px' }} defaultValue={item.description} id="short_description" name="short_description" placeholder="masukkan deskripsi" type="textarea" rows="5" />
              </FormGroup>
              <div className="py-3">
                <Button onClick={(e) => handleClick(e)} style={{ height: '50px', backgroundColor: '#5E50A1' }} className="col-12 text-white">
                  Hire
                </Button>
              </div>
            </Form>
          ))}
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

Hire.layout = 'L3';

//SSR
export async function getServerSideProps(context) {
  const id = context.params.id;
  let resData = [];

  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`);
    resData.push(data.data);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      resData,
    },
  };
}

export default Hire;
