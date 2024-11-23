import { createContext, useContext } from "react"

export const AuthContext = createContext();

const useAuth = () => {
    const state = useContext(AuthContext)
    return state
}

export default useAuth