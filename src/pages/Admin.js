import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const Admin = () => {
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem('adminAuthenticated', false)
    navigate('/')
  }

  return (
    <>
    <Typography variant='h3'>ADMIN</Typography>
    <Button variant='outlined' onClick={logOut}>LOG OUT</Button>
    </>
  )
}

export default Admin