import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SignUp.css';
import google from '../../images/logo/google-logo.png';
import facebook from '../../images/logo/facebook-logo.png';
import yahoo from '../../images/logo/yahoo-logo.png';
import github from '../../images/logo/github-logo.png';

const SignUp = () => {
  const { googleSignIn, setIsLoading, facebookSignIn, githubSignIn, yahooSignIn } = useAuth();

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
  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then(result => {
        history.push(redirect_url);
    }).finally(() => setIsLoading(false))
  }
  const handleGithubSignIn = () => {
    githubSignIn()
      .then(result => {
        history.push(redirect_url);
    }).finally(() => setIsLoading(false))
  }
  const handleYahooSignIn = () => {
    yahooSignIn()
      .then(result => {
        history.push(redirect_url);
    }).finally(() => setIsLoading(false))
  }

    return (
      <div className="w-50 mx-auto my-5">
        <h2>Singn Up</h2>
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
            onClick={handleFacebookSignIn}
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
        <p className="my-3">
          Already a member? <Link to="/login">Login</Link>{" "}
        </p>
      </div>
    );
};

export default SignUp;