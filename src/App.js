/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './components/UI/Footer/Footer';
import Header from './components/UI/Header/Header';
import PageNotFound from './pages/404/PageNotFound';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Layout from './components/UI/Layout/Layout';
import AuthProvider from './store/AuthProvider';
import CartProvider from './store/Cart/CartProvider';
import { Cart } from './pages/Cart/Cart';
import { BookDetail } from './pages/BookDetail/BookDetail';
import ScroolToTop from './components/ScroolToTop';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import CartContext from './store/Cart/CartContext';
import { getStoredCart } from './utils/localStorage';
import useBooks from './hooks/useBooks';


export default function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <Layout>
          <Router>
            <ScroolToTop>
              <Header></Header>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/shop">
                  <Shop />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/cart">
                  <Cart />
                </Route>
                <Route path="/book/:id">
                  <BookDetail />
                </Route>
                <Route path="*">
                  <PageNotFound />
                </Route>
              </Switch>
            </ScroolToTop>
          </Router>
        </Layout>
        <Footer></Footer>




      </CartProvider>


    </AuthProvider >
  );
}
