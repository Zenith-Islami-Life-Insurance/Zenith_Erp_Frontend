import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/icon/jenith.png";
import { Circles, ThreeCircles } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import { AuthContext } from "../../providers/AuthProvider";
// import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { loggedIn, setLoggedIn, userDetailsString } = useContext(AuthContext);
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);

  const error = userDetailsString?.error;
  const ROLE_ID = userDetailsString?.ROLE_ID;

  // User login process
  const login = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    const url = `http://115.127.36.173:5001/api/user-login/${username}/${password}`;
    fetch(url, {
      method: "get",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
      },
    })
      .then((Response) => Response.json())
      .then((data) => {
        if (data?.user_details) {
          const userDetails = data.user_details;
          setLoggedIn(userDetails); // Update context and localStorage
          setSpinner(false);
        } else {
          setSpinner(false);
          // Handle error (e.g., invalid login)
        }
      })
      .catch((error) => {
        setSpinner(false);
        // Handle network error
      });

    setSpinner(true);
  };

  // Check loggedIn state to redirect
  React.useEffect(() => {
    if (loggedIn) {
      const ROLE_ID = userDetailsString?.ROLE_ID;
      if (ROLE_ID === 0) {
        navigate("/dashboard");
      } else if (ROLE_ID === 1) {
        navigate("/module");
      } else if (ROLE_ID === 2) {
        navigate("/department-head");
      } else if (ROLE_ID === 3 || ROLE_ID === 4) {
        navigate("/development");
      } else if (ROLE_ID === 5) {
        navigate("/about");
      }
    }else{
      navigate('/');
    }
  }, [loggedIn, ROLE_ID, navigate]);

  return (
    <div>
      <div className="flex justify-center mx-6 mt-24 lg:mx-0 lg:mt-36">
        <div className="block w-full lg:w-1/2  bordered p-3 lg:p-10 rounded bordered shadow-xl bg-white max-w-lg">
          <form onSubmit={login} className="flex w-full flex-col gap-4">
            <div className="flex justify-center">
              <img
                className="w-24 shadow-lg bg-white rounded-full p-2 hidden lg:block"
                src={logo}
              />
            </div>

            <div className="w-full">
              <div className="mb-2 block w-full text-left">
                <Label htmlFor="PERSONALID" value="PERSONAL ID" />
              </div>
              <TextInput
                id="username"
                type="text"
                placeholder="Enter PERSONAL ID"
                required
              />
            </div>
            <div>
              <div className="mb-2 block text-left">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                id="password"
                type="password"
                placeholder="Enter Password"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <h6 className="text-red-700">{error}</h6>
            <div className="flex justify-center mb-2 ">
              <ThreeCircles
                height="60"
                width="60"
                color="#4fa94d"
                visible={spinner}
                ariaLabel="three-circles-rotating"
              />
            </div>
            <Button type="submit" color="success">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
