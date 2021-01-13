import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductPage = ({ match }) => {
  const [product, setProducts] = useState({})

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`)

      setProducts(data)
    }

    fetchProducts()
  }, [match])

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={4}>
          <Card.Body>
            <Card.Title as='h4'>{product.name}</Card.Title>
            <Card.Text as='div'>
              <div className='my-3'>Article: {product.article}</div>
            </Card.Text>

            <Card.Text as='div'>
              <Rating
                value={product.rating}
                reviews={`${product.numReviews} reviews`}
              ></Rating>
            </Card.Text> 

            <Card.Text as='h3'>${product.price}</Card.Text>

            <Card.Text as='div'>{product.description}</Card.Text>
          </Card.Body>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup.Item>
            <Col>Price: <strong>${product.price}</strong></Col>
            </ListGroup.Item>
            <ListGroup.Item>
            <Col>Status: {product.countInStock > 0 ? 'In Stock' : 'On order'}</Col>
            </ListGroup.Item>
            <ListGroup.Item>
            <Button className='btn-block' type='button' variant="warning">Add To Cart</Button>
            </ListGroup.Item>
            <ListGroup.Item>
            <Button className='btn-block' type='button' variant="outline-warning">Add To Favorities</Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
