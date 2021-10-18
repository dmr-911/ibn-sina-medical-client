import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SignUp.css';
import google from '../../images/logo/google-logo.png';
import facebook from '../../images/logo/facebook-logo.png';
import yahoo from '../../images/logo/yahoo-logo.png';
import github from '../../images/logo/github-logo.png';

const SignUp = () => {
  const { emailSignUp, error, user, googleSignIn } = useAuth();
  const onHandleSignUp = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    emailSignUp(email, password);
  }
  console.log(user);

    return (
      <div className="w-50 mx-auto my-5">
        <h2>Singn Up</h2>
        <Form onSubmit={onHandleSignUp}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3 login-input"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3 login-input"
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          {error.slice(22, -2)}
          <br />
          <Button variant="primary">Sign Up</Button>{" "}
        </Form>
        <p className="my-3">
          Already a member? <Link to="/login">Login</Link>{" "}
        </p>

        <div className="mt-5">
          <img
            className="additional-link"
            title="Google"
            height="35"
            src={google}
            alt=""
            onClick={googleSignIn}
          />
          <img
            className="additional-link"
            title="Facebook"
            height="50"
            src={facebook}
            alt=""
            // onClick={handleFacebookSignin}
          />
          <img
            className="additional-link"
            title="Yahoo"
            height="35"
            src={yahoo}
            alt=""
          //   onClick={handleYahooSignin}
          />
          <img
            className="additional-link"
            title="Github"
            height="50"
            src={github}
            alt=""
            // onClick={handleGithubSignin}
          />
        </div>
      </div>
    );
};

export default SignUp;