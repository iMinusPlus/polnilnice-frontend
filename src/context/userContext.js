import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({});

    const setUserContext = (data) => {
        setUserData(data);
    };

    return (
        <UserContext.Provider value={{ userData, setUserContext }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
