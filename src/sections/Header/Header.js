import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/images/logo-cyborg.png";

import Navitem, { NavitemDropDown } from "../../components/Navitem/Navitem";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md container navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className="edit" src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Navitem>
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </Navitem>
            <Navitem>
              <a className="nav-link active" aria-current="page" href="/#">
                Browse
              </a>
            </Navitem>
            <Navitem>
              <Link to="/profile" className="nav-link active">
                Profile
              </Link>
            </Navitem>
            <NavitemDropDown>
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Details
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/fortnight">
                    Fortnight
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    CallOfDuty
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    Pubg
                  </a>
                </li>
              </ul>
            </NavitemDropDown>
            <Navitem>
              <a className="nav-link" href="/#">
                Stream
              </a>
            </Navitem>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
