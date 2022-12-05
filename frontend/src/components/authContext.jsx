import { useState } from "react";
import { useContext } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext({})

export function AuthProvider({children}) {
    const [jwt, setJwt] = useState();
    const [err, setErr] = useState();
    //const [loading, setLoading] = useState(false);

    const location = useLocation()
    const navigate = useNavigate()

    //if page change, reset error state
    useEffect(() => err ? setErr(null) : undefined, [location.pathname])

    const memoedValue = useMemo(()=> ({jwt, err}), [jwt, err])

    return(
        <AuthContext.Provider value={memoedValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}