import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Button,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToFavorites, removeFromFavorites } from '../actions/favoritesActions';

const FavoritesPage = ({ match, location, history }) => {
  const productId = match.params.id;

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);
  const { favoritesItems } = favorites;

  console.log(favoritesItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToFavorites(productId));
    }
  }, [dispatch, productId]);

  const removeFromCartHandler = (id) => {
      dispatch(removeFromFavorites(id))
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Favorites List</h1>
        {favoritesItems.length === 0 ? (
          <Message>
            Your favorites list is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {favoritesItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col className='wrapper__col' md={2}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col className='wrapper__col' md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col className='wrapper__col' md={2}>${item.price}</Col>
                  
                  <Col md={2}>
                    <Button className='wrapper__btn' type='button' variant='danger' onClick={()=> removeFromCartHandler(item.product)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}></Col>
    </Row>
  );
};

export default FavoritesPage;