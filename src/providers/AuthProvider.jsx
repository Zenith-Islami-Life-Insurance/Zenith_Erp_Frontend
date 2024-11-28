import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {

        const userDetailsString = localStorage.getItem('UserDetails');

        if (userDetailsString) {
            setLoggedIn(true);
        }

    }, []);

    const authInfo = {
        loggedIn,
        setLoggedIn
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;