import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '../components/Rating';

const Product = ({ product }) => {
  return (
    <Card border='secondary' className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>{product.name}</Card.Title>
        </a>

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
      </Card.Body>
    </Card>
  );
};

export default Product;
