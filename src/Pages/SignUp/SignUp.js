import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SignUp.css';
import google from '../../images/logo/google-logo.png';
import facebook from '../../images/logo/facebook-logo.png';
import yahoo from '../../images/logo/yahoo-logo.png';
import github from '../../images/logo/github-logo.png';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

const SignUp = () => {
  const {
    googleSignIn,
    setIsLoading,
    // facebookSignIn,
    // githubSignIn,
    // yahooSignIn,
    getName,
    getPhoto,
    signup,
    getEmail,
    getPassword
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || '/home';
  console.log(redirect_url);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        history.push(redirect_url);
    }).finally(() => setIsLoading(false))
  }
  // const handleFacebookSignIn = () => {
  //   facebookSignIn()
  //     .then(result => {
  //       history.push(redirect_url);
  //   }).finally(() => setIsLoading(false))
  // }
  // const handleGithubSignIn = () => {
  //   githubSignIn()
  //     .then(result => {
  //       history.push(redirect_url);
  //   }).finally(() => setIsLoading(false))
  // }
  // const handleYahooSignIn = () => {
  //   yahooSignIn()
  //     .then(result => {
  //       history.push(redirect_url);
  //   }).finally(() => setIsLoading(false))
  // }

    return (
      <div className="w-50 mx-auto my-5">
        <h2>Singn Up</h2>
        <Form onSubmit={signup}>
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Name
              </Form.Label>
              <InputGroup className="mb-2">
                <FormControl
                  required
                  type="text"
                  placeholder="Enter your name"
                  onBlur={getName}
                  id="name"
                  autoComplete="current-name"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Email Address
              </Form.Label>
              <InputGroup className="mb-2">
                <FormControl
                  required
                  type="email"
                  placeholder="Enter email"
                  onBlur={getEmail}
                  id="email"
                  autoComplete="current-email"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Password
              </Form.Label>
              <InputGroup className="mb-2">
                <FormControl
                  type="password"
                  placeholder="Enter Password"
                  onBlur={getPassword}
                  id="password"
                  autoComplete="current-password"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="text-start">
              <Form.Label htmlFor="name" visuallyHidden>
                Your Profile Photo Url
              </Form.Label>
              <InputGroup className="mb-2">
                <FormControl
                  type="text"
                  placeholder="Enter valid photo url"
                  onBlur={getPhoto}
                  id="photo"
                  autoComplete="current-text"
                />
              </InputGroup>
            </Col>
          </Row>

          <button type="submit" className="btn btn-primary mt-2 w-100">
            Sign Up
          </button>
        </Form>
        <div className="mt-5">
          <div
            className="mb-3 border border-2 border-primary d-inline-block p-2 rounded"
            onClick={handleGoogleSignIn}
            style={{ cursor: "pointer" }}
          >
            <img
              className="additional-link"
              title="Google"
              height="35"
              src={google}
              alt=""
            />
            <span>Google SignIn</span>
          </div>
          <br />
          <img
            className="additional-link"
            title="Facebook"
            height="50"
            src={facebook}
            alt=""
            // onClick={handleFacebookSignIn}
          />
          <img
            className="additional-link"
            title="Yahoo"
            height="35"
            src={yahoo}
            alt=""
            // onClick={handleYahooSignIn}
          />
          <img
            className="additional-link"
            title="Github"
            height="50"
            src={github}
            alt=""
            // onClick={handleGithubSignIn}
          />
        </div>
        <p className="my-3">
          Already a member? <Link to="/login">Login</Link>{" "}
        </p>
      </div>
    );
};

export default SignUp;