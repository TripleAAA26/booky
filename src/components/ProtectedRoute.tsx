import useAuth from '../hooks/useAuth.ts'
import { Navigate, Outlet } from 'react-router-dom'


const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth()

    return (
        isAuthenticated
            ? <Outlet/>
            : <Navigate to='/login' />
    )
}

export default ProtectedRoute