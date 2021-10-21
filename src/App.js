import * as React from 'react';
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





export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Layout>
          <Router>
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
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
          </Router>
        </Layout>
        <Footer></Footer>



      </CartProvider>


    </AuthProvider>
  );
}
