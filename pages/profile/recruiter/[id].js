import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../styles/Profile.module.css';
import { CardTitle, CardText, Button } from 'reactstrap';
import Footer from '../../../components/Footer';

import { useRouter } from 'next/router';

// SSG
export async function getStaticProps(context) {
  try {
    const { id } = context.params;
    console.log(id);
    const response = await axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_API_URL}/recruiter/${id}`,
    });
    return {
      props: {
        data: response.data.data,
      },
      revalidate: 1,
      notFound: false,
    };
  } catch (err) {
    return {
      props: {
        data: null,
      },
      revalidate: 1,
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const response = await axios({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_API_URL}/recruiter`,
  });
  const data = response.data.data;
  const paths = data.map((item) => ({
    params: {
      id: item.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

const recruiterProfile = (props) => {
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem('data'));
    const id = data.id;
    router.push(`/edit-profile/recruiter/${id}`);
  };
  return (
    <>
      {props.data.map((item) => {
        return (
          <div key={item.id} className={styles.profileBackground}>
            <div
              className="text-center"
              style={{
                margin: '180px 140px',
              }}
            >
              <img src={`${process.env.NEXT_PUBLIC_API_URL}/${item.photo}`} width={100} height={100} alt="" className="rounded-circle border border-white" />

              <CardTitle tag="h1">{item.company}</CardTitle>
              <p>{item.business}</p>
              <div className="text-muted">
                <CardText>
                  <FontAwesomeIcon icon={faLocationDot} className="px-2" style={{ fontSize: 20, color: '#9EA0A5' }} />
                  {item.city}
                </CardText>
                <CardText>{item.description}</CardText>
              </div>

              <Button onClick={(e) => onSubmit(e)} color="primary" className="mt-2 col-2" style={{ backgroundColor: '#5E50A1' }}>
                Edit Profile
              </Button>

              <div className="text-muted py-4">
                <CardText>
                  <Image src="/images/mail4.svg" width={23} height={23} />
                  &nbsp;{item.email}
                </CardText>
                <CardText>
                  <Image src="/images/instagram.svg" width={23} height={23} />
                  &nbsp;{item.instagram}
                </CardText>
                <CardText>
                  <Image src="/images/phone.svg" width={23} height={23} />
                  &nbsp;{item.phone}
                </CardText>
                <CardText>
                  <Image src="/images/linkedin1.svg" width={23} height={23} />
                  &nbsp;{item.linkedin}
                </CardText>
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
    </>
  );
};

recruiterProfile.layout = 'L';
export default recruiterProfile;
