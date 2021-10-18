import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import NavbarCustom from './Pages/Home/Navbar/Navbar';
import Footer from './Pages/Common/Footer/Footer';
import Services from './Pages/Common/Services/Services';
import ServiceDetails from './Pages/DynamicRoute/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarCustom></NavbarCustom>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/service/:serviceId">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
