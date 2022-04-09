import React from "react";

const Register = () => {
  return (
    <div>
      <h3>Please Register Now</h3>
      <form>
        <input type="text" placeholder="enter full name" />
        <br />
        <input type="email" placeholder="enter email" />
        <br />
        <input type="password" placeholder="enter password" />
        <br />
        <button type="submit" value="Register">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
