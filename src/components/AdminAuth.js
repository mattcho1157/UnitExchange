import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify'
import sha256 from 'crypto-js/sha256';
import Hex from 'crypto-js/enc-hex';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { modalStyle } from '../styles'
import { adminsByPassword } from '../graphql/queries'

const AdminAuth = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const authenticated = localStorage.getItem('adminAuthenticated')
  const [adminAuthVisible, setAdminAuthVisible] = useState(false)
  const openAdminAuth = () => {
    if (authenticated) navigate('/admin')
    setAdminAuthVisible(true)
  }
  const closeAdminAuth = () => setAdminAuthVisible(false)

  const authenticateAdmin = async (e) => {
    e.preventDefault()
    const hashedPassword = Hex.stringify(sha256(password))
    const matchingAdmins = await API.graphql(graphqlOperation(
      adminsByPassword, {
        password: hashedPassword
      }
    ))
    if (matchingAdmins.data.adminsByPassword.items.length > 0) {
      localStorage.setItem('adminAuthenticated', true)
      navigate('/admin')
    } else {
      toast.error("Incorrect password", {position: "top-left"});
      setPassword('')
    }
  }

  return (
    <>
    <Button onClick={openAdminAuth}>ADMIN PORTAL</Button>
    <Modal open={adminAuthVisible} onClose={closeAdminAuth}>
      <Box sx={modalStyle}>
        <form onSubmit={authenticateAdmin}>
          <Stack spacing='20px'>
            <Typography variant='h5'>ADMIN PORTAL</Typography>
            <TextField 
              label='PASSWORD'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type='submit' variant='outlined'>LOG IN</Button>
          </Stack>
        </form>
      </Box>
    </Modal>
    <ToastContainer />
    </>
  )
}

export default AdminAuth