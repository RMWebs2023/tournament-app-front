import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="home_h1">Este es el home</h1>
      <Link to="/login">
        <button>Haz click aquí y sabrás la verdad</button>
      </Link>
    </>
  );
};

export default Home;
