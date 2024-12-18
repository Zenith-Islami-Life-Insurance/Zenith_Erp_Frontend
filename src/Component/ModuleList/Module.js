import { Card } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Nabar/Navbar";
import { Link, useParams } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";

const Module = () => {

  const {loggedIn, userDetailsString} = useContext(AuthContext);
  
  const [moduleList, setModueleList] = useState([""]);
  const [spinner, setSpinner] = useState(false);

  const { PERSONALID, NAME, ROLE_ID, DEPT_CODE, PROJECT, USER_TYPE} = userDetailsString;

  // fetch sub module list
  const ModuleList = async () => {
    setSpinner(true);
    try {
      // const response = await axios.get("http://115.127.36.173:5001/api/all-modules");
      const response = await axios.get(
        // `http://115.127.36.173:5001/api/modules/${PERSONAL_ID}`
        `http://localhost:5000/api/modules/${PERSONALID}`
      );
      
      setModueleList(response.data?.module_list);
      
      setSpinner(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call sub module list
  useEffect(() => {
    ModuleList();
  }, []);
  // fetch sub module list

  return (
    <div>
      <Navbar />
      <div className="p-2 lg:p-5 lg:px-48">
        <h1 className="shadow w-60 mx-auto p-3 font-bold rounded text-center">
          ALL MODULE LIST
        </h1>
        <div className="flex justify-center mb-2 ">
          <ThreeCircles
            height="60"
            width="60"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={spinner}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </div>
        <div className="grid grid-cols-2 mt-5 lg:grid-cols-6 gap-2">
          {moduleList.map((mName, i) => (
            <Link
              key={i}
              to={
                  ROLE_ID === 0 ? `/permission/${mName?.Module_id}/${mName?.Module_name}` : mName?.Module_link
                }  
              
            >
              <div className=" shadow-md bordered text-white p-2 lg:p-4 rounded bordered  bg-[#0E9F6E] max-w-sm">
                <h5 className="font-normal mt-1">{mName?.Module_name}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Module;
