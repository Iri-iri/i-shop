import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProductDetails } from '../actions/productActions';

const ProductPage = ({ history, match }) => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?count=${count}`)
  }

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
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
                <Col>
                  Price: <strong>${product.price}</strong>
                </Col>
              </ListGroup.Item>
              <ListGroup.Item>
                <Col>
                  Status: {product.countInStock > 0 ? 'In Stock' : 'On order'}
                </Col>
              </ListGroup.Item>

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Col>Count</Col>
                  <Col>
                    <Form.Control
                      as='select'
                      value={count}
                      onChange={(e) => setCount(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                onClick= {addToCartHandler}
                  className='btn-block'
                  type='button'
                  variant='warning'
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  variant='outline-warning'
                >
                  Add To Favorities
                </Button>
              </ListGroup.Item>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductPage;
