import React from 'react';
import { Row, Col } from 'react-bootstrap';

const PhonePage = () => {
  return (
    <Row>
      <Col className='wrapper__col' md={4}>
        <Row><h3>Call us:</h3> </Row>
        <Row>
          +375(33)1234567 
          </Row>
        <Row>+375(17)7894561</Row>
      </Col>
      </Row>
    
  );
};

export default PhonePage;
