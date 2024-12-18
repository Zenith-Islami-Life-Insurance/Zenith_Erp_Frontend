import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/icon/jenith.png";
import { AiOutlineHome } from "react-icons/ai";
import { AuthContext } from "../../providers/AuthProvider";
const Navbar = () => {

  const {setLoggedIn} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("UserDetails");
    setLoggedIn(false);
    navigate('/');
  };
  const userAllInfo = JSON.parse(localStorage.getItem("UserDetails"));
  const role_id = userAllInfo.ROLE_ID;
  const location = useLocation();
  const { pathname } = location;

  // console.log(role_id);
  

  return (
    <div>
      {/* <!-- Section: Design Block --> */}
      <section className="mb-0">
        <nav className="navbar navbar-expand-lg bg-green-500 lg:px-12 shadow-md py-1 relative flex items-center w-full justify-between">
          <div className="px-6 w-full flex flex-wrap items-center justify-between">
            <div className="flex items-center">
              <button
                className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-white hover:text-white focus:text-white transition-shadow duration-150 ease-in-out mr-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  className="w-5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  ></path>
                </svg>
              </button>

              <img
                className="w-12  shadow-lg bg-white rounded-full p-1 hidden lg:block"
                src={logo}
              />
              <a className="btn btn-ghost normal-case text-md lg:px-3 text-white font-bold">
                ZENITH ISLAMI LIFE
              </a>
            </div>
            <div
              className="navbar-collapse grow items-center"
              id="navbarSupportedContentY"
            >
              {role_id === 0 && (
                <ul className="navbar-nav mr-auto lg:flex lg:flex-row lg:px-20">
                  <li className="navitem flex flex-row gap-2">
                    <AiOutlineHome className="mt-1 text-white mr-1" />{" "}
                    <NavLink
                      className="text-white pr-3 font-weight-bold"
                      to="/dashboard"
                      // activeStyle={{ color: "#005005", textDecoration: "none" }}
                    >
                      Home
                    </NavLink>
                  </li>

                  <li className="navitem">
                    <NavLink
                      className="text-white pr-3 font-weight-bold"
                      to="/department-head"
                      // activeStyle={{ color: "#005005", textDecoration: "none" }}
                    >
                      Module List
                    </NavLink>
                  </li>
                  <li className="navitem">
                    <NavLink
                      className="text-white pr-3 font-weight-bold"
                      to="/module-list"
                      // activeStyle={{ color: "#005005", textDecoration: "none" }}
                    >
                      Access Permission
                    </NavLink>
                  </li>
                  <li className="navitem">
                    <NavLink
                      className="text-white pr-3 font-weight-bold"
                      to="/permission-user-list"
                      // activeStyle={{ color: "#005005", textDecoration: "none" }}
                    >
                      Privilage List
                    </NavLink>
                  </li>
                  <li className="navitem">
                    <NavLink
                      className="text-white pr-3 font-weight-bold"
                      to="/module"
                      // activeStyle={{ color: "#005005", textDecoration: "none" }}
                    >
                      Module Assign
                    </NavLink>
                  </li>

                  <li className="navitem">
                    <NavLink
                      className="text-white pr-3 font-weight-bold"
                      to="/user-list"
                      // activeStyle={{ color: "#005005", textDecoration: "none" }}
                    >
                      Department User List
                    </NavLink>
                  </li>
                  <li className="navitem">
                    <NavLink
                      className="text-white pr-3"
                      onClick={handleLogout}
                      to="/"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              )}

              
              {role_id === 1 && (
                <ul className="navbar-nav mr-auto lg:flex lg:flex-row lg:px-20">
                  {/* <li
                    className={`nav-item flex text-center bg-[#087f23] pl-2  pr-0 mt-1 p-1.5 mr-3 rounded hover:bg-[#005005] ${pathname.includes("dashboard") && "bg-green-800 "
                      }`}
                  >
                    <AiOutlineHome className="mt-1 text-white mr-1" />{" "}
                    <NavLink
                      className="text-white pr-3 font-weight-bold"
                      to="/dashboard"
                      // activeStyle={{ color: "#005005", textDecoration: "none" }}
                    >
                      Home
                    </NavLink>
                  </li> */}

                  <li className="navitem">
                    <NavLink
                      className="text-white pr-3 font-weight-bold"
                      to="/module"
                      // activeStyle={{ color: "#005005", textDecoration: "none" }}
                    >
                      Module List
                    </NavLink>
                  </li>
                  <li className="navitem">
                    <NavLink
                      className="text-white pr-3"
                      onClick={handleLogout}
                      to="/"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              )}

              {role_id === 2 && (
                <ul className="navbar-nav mr-auto lg:flex lg:flex-row lg:px-40">
                  <li className="navitem">
                    <NavLink className="text-white pr-3" to="/department-head">
                      Home
                    </NavLink>
                  </li>
                  <li className="navitem">
                    <NavLink className="text-white pr-3" to="/module-list">
                      Permission Module
                    </NavLink>
                  </li>
                  <li className="navitem">
                    <NavLink
                      className="text-white pr-3"
                      to="/permission-user-list"
                    >
                      User List
                    </NavLink>
                  </li>
                  <li className="navitem">
                    <NavLink
                      className="text-white pr-3"
                      onClick={handleLogout}
                      to="/"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              )}
              {role_id === 3 && (
                <ul className="navbar-nav mr-auto lg:flex lg:flex-row lg:px-40">
                  <li className="navitem">
                    <NavLink className="text-white pr-3" to="/development">
                      Home
                    </NavLink>
                  </li>
                  <li className="navitem">
                    <NavLink className="text-white pr-3" to="/contact">
                      Contact us
                    </NavLink>
                  </li>
                  <li className="navitem">
                    <NavLink
                      className="text-white pr-3"
                      onClick={handleLogout}
                      to="/"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              )}
              {role_id === 4 && (
                <ul className="navbar-nav mr-auto lg:flex lg:flex-row lg:px-40">
                  <li className="navitem">
                    <NavLink className="text-white pr-3" to="/director">
                      Home
                    </NavLink>
                  </li>
                  <li className="navitem">
                    <NavLink className="text-white pr-3" to="/contact">
                      Contact us
                    </NavLink>
                  </li>
                  <li className="navitem">
                    <NavLink
                      className="text-white pr-3"
                      onClick={handleLogout}
                      to="/"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
            
          </div>
        </nav>
      </section>

    </div>
  );
};

export default Navbar;
