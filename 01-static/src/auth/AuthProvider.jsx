import React, { createContext, useContext, useState } from 'react'
const AuthContext = createContext({
    isAuthenticated: false
})

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    return <AuthContext.Provider value={{isAuthenticated}}>
        {children}
    </AuthContext.Provider>
}

export const  useAuth = () => {
     return useContext(AuthContext)
};

