import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext/useAuthContext.jsx'

export const ProrectedRoute = ({children}) => {
    const {user} = useAuthContext();

    if (!user) {
        return <Navigate to='/' replace/>;
    }
    return children;
}