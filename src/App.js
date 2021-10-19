import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import NavbarCustom from './Pages/Home/Navbar/Navbar';
import Services from './Pages/Common/Services/Services';
import ServiceDetails from './Pages/DynamicRoute/ServiceDetails/ServiceDetails';
import SignUp from './Pages/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from '../src/Pages/PrivateRoute/PrivateRoute';
import DoctorDetails from './Pages/Home/DoctorDetails/DoctorDetails';
import Footer from './Pages/Common/Footer/Footer/Footer';
import Doctors from './Pages/Home/Doctors/Doctors';
import Stuffs from './Pages/Stuffs/Stuffs/Stuffs';

function App() {
  return (
    <div className="App">
        <AuthProvider>
        <Router>
          <NavbarCustom></NavbarCustom>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <PrivateRoute path="/doctor/:doctorId">
              <DoctorDetails></DoctorDetails>
            </PrivateRoute>
            <Route path="/stuffs">
              <Stuffs></Stuffs>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
    </AuthProvider>
      </div>
  );
}

export default App;
