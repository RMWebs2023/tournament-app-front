import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
  return (
    <>
      <div>Wally its gay</div>
      <div>
        <div className="login_background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
      </div>
      <form>
        <h3>Login here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"></input>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"></input>

        <button>Log In</button>
        <div className="social">
          <div className="login_go"><FaGoogle /> Google</div>
          <div className="login_fb"><FaFacebookF /> Facebook</div>
        </div>
      </form>
    </>
  );
};

export default Login;
