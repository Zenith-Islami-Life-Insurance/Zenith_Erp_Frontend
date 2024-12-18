import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userDetailsString, setUserDetailsString] = useState(
    JSON.parse(localStorage.getItem("UserDetails"))
  );

  // UseEffect to detect changes in localStorage (on initial load)
  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem("UserDetails"));
    if (storedUserDetails) {
      setUserDetailsString(storedUserDetails);
      setLoggedIn(true);
    }
  }, []); // Runs only once on mount

  // This will be triggered whenever localStorage is updated (user logs in)
  const updateUserDetails = (userDetails) => {
    setUserDetailsString(userDetails);
    localStorage.setItem("UserDetails", JSON.stringify(userDetails));
    setLoggedIn(true);
  };

  const authInfo = {
    userDetailsString,
    loggedIn,
    setLoggedIn: updateUserDetails, // Update function for loggedIn state
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
