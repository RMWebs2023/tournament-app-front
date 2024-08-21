import React from "react";
import { LuTrophy } from "react-icons/lu";
import { PiRankingDuotone } from "react-icons/pi";
import { ImListNumbered } from "react-icons/im";
import { RiTeamFill } from "react-icons/ri";
import { GiPodiumWinner } from "react-icons/gi";
import { GrConfigure } from "react-icons/gr";
import { MdOutlineInventory2 } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="home_h1">Este es el home</h1>
      <Link to="/login">
        <button>Haz click aquí y sabrás la verdad</button>

      </Link>

      <div id="nav-bar">
        <input id="nav-toggle" type="checkbox" />

        <div id="nav-header">
          <a id="nav-title" href="https://codepen.io" target="_blank"><i className="fab fa-codepen" />Tournament</a>
          <label htmlFor="nav-toggle">
            <span id="nav-toggle-burger" />
          </label>
          <hr />
        </div>
        <div id="nav-content">
          <div className="nav-button">
            <LuTrophy className="i"/>
            <span>Torneos</span>
          </div>
          <div className="nav-button">
            <GiPodiumWinner  className="i"/>
            <span>Resultados</span>
          </div>
          <div className="nav-button">
            <ImListNumbered className="i" />
            <span>Ranking</span>
          </div>
          <hr />
          <div className="nav-button">
            <LuTrophy className="i"/>
            <span>Torneos</span>
          </div>
          <div className="nav-button">
            <RiTeamFill className="i" />
            <span>Jugadores</span>
          </div>
          <div className="nav-button">
            <ImListNumbered className="i" />
            <span>Categorias</span>
          </div>
          <div className="nav-button">
            <MdOutlineInventory2 className="i" />
            <span>Stock</span>
          </div>
          <div className="nav-button">
            <RiCalendarScheduleFill className="i" />
            <span>Turnos</span>
          </div>
          <hr />
          <div id="nav-content-highlight" />
        </div>

        <input id="nav-footer-toggle" type="checkbox" />

        <div id="nav-footer">
          <div id="nav-footer-heading">
            <div id="nav-footer-avatar">
              <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" />
            </div>
            <div id="nav-footer-titlebox">
              <a id="nav-footer-title" href="https://codepen.io/uahnbu/pens/public" target="_blank">RMWebs</a>
              <span id="nav-footer-subtitle">Admin</span>
            </div>
            <label htmlFor="nav-footer-toggle">
              <i className="fas fa-caret-up" />
            </label>
          </div>
          <div id="nav-footer-content">
            <p>
              Tu papa...OITE!?
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
