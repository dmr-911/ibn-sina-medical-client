import React from 'react';
import './Login.css';
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import google from "../../images/logo/google-logo.png";
import facebook from "../../images/logo/facebook-logo.png";
import yahoo from "../../images/logo/yahoo-logo.png";
import github from "../../images/logo/github-logo.png";

const Login = () => {
  const { emailLogin, error, googleSignIn, facebookSignIn, githubSignIn, yahooSignIn } = useAuth();
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    emailLogin(email, password);
  }

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || '/home';

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        history.push(redirect_url)
      })
  };

  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then(result => {
        history.push(redirect_url)
      })
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then(result => {
        history.push(redirect_url)
      })
  };


  const handleYahooSignIn = () => {
    yahooSignIn()
      .then(result => {
        history.push(redirect_url)
      })
  };

    return (
      <div className="w-50 mx-auto my-5">
        <h2>Please Login</h2>
        <Form onSubmit={onHandleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3 login-input"
          >
            <Form.Control
              id="email"
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3 login-input"
          >
            <Form.Control
              id="password"
              type="password"
              placeholder="Password"
            />
          </FloatingLabel>
          {error.slice(22, -2)}
          <br />
          <input variant="primary" type="submit" value="Login"></input>{" "}
        </Form>
        <p className="my-3">
          New to our site? <Link to="/signup">Signup here</Link>{" "}
        </p>
        <div className="mt-5">
          <img
            className="additional-link"
            title="Google"
            height="35"
            src={google}
            alt=""
            onClick={handleGoogleSignIn}
          />
          <img
            className="additional-link"
            title="Facebook"
            height="50"
            src={facebook}
            alt=""
            onClick= {handleFacebookSignIn}
          />
          <img
            className="additional-link"
            title="Yahoo"
            height="35"
            src={yahoo}
            alt=""
              onClick={handleYahooSignIn}
          />
          <img
            className="additional-link"
            title="Github"
            height="50"
            src={github}
            alt=""
            onClick={handleGithubSignIn}
          />
        </div>
      </div>
    );
};

export default Login;