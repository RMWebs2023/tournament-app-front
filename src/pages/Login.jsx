import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
  return (
    <>
      <div className="login_background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form className="login_form">
        <h3 className="login_form-title">Login</h3>

        <label className="login_form-label" for="username">Usuario</label>
        <input className="login_form-input" type="text" placeholder="Email o DNI" id="username"></input>

        <label className="login_form-label" for="password">Contraseña</label>
        <input className="login_form-input" type="password" placeholder="Contraseña" id="password"></input>

        <button className="login_form-button">Log In</button>

        <div className="login_form-social">
          <div className="login_form-social-net"><FaGoogle className="go"/> Google</div>
          <div className="login_form-social-net"><FaFacebookSquare className="fb"/> Facebook</div>
        </div>
      </form>
    </>
  );
};

export default Login;
