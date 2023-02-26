import { Navigate } from 'react-router-dom'

const ParticipantProtectedRoute = ({ element, redirect }) => {
  const authenticated = localStorage.getItem('participantAuthenticated')
  return (
    authenticated ? element : <Navigate to={redirect} />
  )
}

export default ParticipantProtectedRoute