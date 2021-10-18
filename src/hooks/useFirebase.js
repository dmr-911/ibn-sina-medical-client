import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  OAuthProvider
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
const yahooProvider = new OAuthProvider("yahoo.com");

const useFirebase = () => {
    const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

    const emailSignUp = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          setError(error.message);
        });
    };

    const emailLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
              setUser(result.user);
          })
          .catch((error) => {
              setError(error.message);
          });
  }
  
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  }

  const facebookSignIn = () => {
    return signInWithPopup(auth, facebookProvider);
  }
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  }
  const yahooSignIn = () => {
    return signInWithPopup(auth, yahooProvider);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
      setIsLoading(false);
    });
  }, []);

  const logOut = () => {
    setIsLoading(true);
      signOut(auth)
        .then(() => {
          setUser({});
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(()=> setIsLoading(false));
    };

    return { user, error, setUser, setError, emailSignUp, emailLogin, logOut, googleSignIn, isLoading, setIsLoading, facebookSignIn, githubSignIn, yahooSignIn };
}

export default useFirebase;