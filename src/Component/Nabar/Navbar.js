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

    return (    

        <div className="navbar bg-green-700 py-0 my-0 sticky top-0">

            <div className="navbar-start flex flex-row gap-2 my-5">

                {/* for mobile device */}
                <div className="dropdown lg:hidden">

                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content sidemenu">
                    
                        {role_id === 0 && (

                            <>
                                <NavLink to="/dashboard">Home</NavLink>
                                <NavLink to="/department-head">Module List</NavLink>
                                <NavLink to="/module-list">Permission</NavLink>
                                <NavLink to="/permission-user-list">Privilage List</NavLink>
                                <NavLink to="/module">Module Assign</NavLink>
                                <NavLink to="/user-list">Department User List</NavLink>
                            </>                 

                        )}

                        {role_id === 1 && (

                            <>
                                <NavLink to="/dashboard">Home</NavLink>
                                <NavLink to="/module">Module List</NavLink>
                            </>                 

                        )}

                        {role_id === 2 && (

                            <>
                                <NavLink to="/department-head">Home</NavLink>
                                <NavLink to="/module-list">Permission</NavLink>
                                <NavLink to="/permission-user-list">User List</NavLink>
                            </>                 

                        )}

                        {role_id === 3 && (
                            <NavLink to="/development">Home</NavLink>
                        )}

                        {role_id === 4 && (
                            <NavLink to="/director">Home</NavLink>
                        )}

                        <NavLink onClick={handleLogout} to="/">Logout</NavLink>

                    </ul>

                </div>
                {/* for mobile device */}

                <img className="w-12 shadow-lg bg-white rounded-full p-1" src={logo} />
                <p className="text-lg sm:text-2xl text-white">Zenith Islami Life</p>

            </div>

            <div className="navbar-end hidden lg:flex">

                <ul className="menu menu-horizontal px-1 topmenu">
                  
                    {role_id === 0 && (
                        <>
                            <NavLink to="/dashboard" className="flex flex-row gap-2" >Home</NavLink>
                            <NavLink to="/department-head">Module List</NavLink>
                            <NavLink to="/module-list">Permission</NavLink>
                            <NavLink to="/permission-user-list">Privilage List</NavLink>
                            <NavLink to="/module">Module Assign</NavLink>
                            <NavLink to="/user-list">Department User List</NavLink>
                        </>
                    )}

                    {role_id === 1 && (
                        <>
                            <NavLink to="/module">Module List</NavLink>
                        </>
                    )}

                    {role_id === 2 && (
                        <>
                            <NavLink to="/department-head" className="flex flex-row gap-2" >Home</NavLink>
                            <NavLink to="/module-list">Permission</NavLink>
                            <NavLink to="/permission-user-list">User List</NavLink>
                        </>
                    )}

                    {role_id === 3 && (
                        <NavLink to="/development" className="flex flex-row gap-2" >Home</NavLink>
                    )}

                    {role_id === 4 && (
                        <NavLink to="/director" className="flex flex-row gap-2" >Home</NavLink>
                    )}

                    <NavLink onClick={handleLogout} to="/">Logout</NavLink>
                  
                </ul>

            </div>

        </div>
    
    );

};

export default Navbar;
