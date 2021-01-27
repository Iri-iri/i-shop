import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';

function LoginPage() {
  
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  return (
    <div>
      <Card style={{ width: '600px' }}>
        <Card.Header>
          { !login && 
            <FacebookLogin
              appId="231499798470716"
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook}
              icon="fa-facebook" />
          }
          { login &&
            <Image src={picture} roundedCircle />
          }
        </Card.Header>
        { login &&
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              {data.email}
            </Card.Text>
          </Card.Body>
        }
      </Card>
    </div>
  );
}

export default LoginPage;
