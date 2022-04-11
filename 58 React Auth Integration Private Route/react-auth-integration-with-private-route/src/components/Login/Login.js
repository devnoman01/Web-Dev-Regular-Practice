import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <h3>Login Now</h3>
      <form>
        <input type="email" placeholder="enter email" />
        <br />
        <input type="password" placeholder="enter password" />
        <br />
        <button type="submit" value="Login">
          Login
        </button>
      </form>
      <br />
      <button onClick={handleGoogleSignIn}>Sign In using Google</button>
      {/* <button
        onClick={() => {
          signInWithGoogle();
        }}
      >
        Sign In using Google
      </button> */}
    </div>
  );
};

export default Login;
