import { Box } from '@mui/system';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/UI/Header';
import PageNotFound from './pages/404/PageNotFound';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';




export default function App() {
  return (
    <React.Fragment>
      <Header></Header>

      <Box marginTop={5}>
        <Router>
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
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>

        </Router>
      </Box>
    </React.Fragment>
  );
}
