import { Navigate } from 'react-router-dom'

const AdminProtectedRoute = ({ element, redirect }) => {
  const authenticated = localStorage.getItem('adminAuthenticated')
  return (
    authenticated ? element : <Navigate to={redirect} />
  )
}

export default AdminProtectedRoute