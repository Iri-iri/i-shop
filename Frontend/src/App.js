import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import PhonePage from './pages/PhonePage';
import FavoritesPage from './pages/FavoritesPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3 main__container'>
        <Container>
          <Route path='/' component={HomePage} exact />
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/cart/:id?' component={CartPage} />
          <Route path='/favorites/:id?' component={FavoritesPage} />
          <Route path='/phone' component={PhonePage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
