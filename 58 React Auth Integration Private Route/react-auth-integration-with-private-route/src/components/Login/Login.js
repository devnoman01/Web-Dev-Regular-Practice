import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { singInWithGoogle } = useFirebase();
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
      <button onClick={singInWithGoogle}>Sign In using Google</button>
    </div>
  );
};

export default Login;
