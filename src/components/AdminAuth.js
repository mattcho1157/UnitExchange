import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { modalStyle } from '../styles'

const AdminAuth = () => {
  const [password, setPassword] = useState('')
  const [adminAuthVisible, setAdminAuthVisible] = useState(false)
  const openAdminAuth = () => setAdminAuthVisible(true);
  const closeAdminAuth = () => setAdminAuthVisible(false);

  const authenticateAdmin = () => {
    // authenticate admin
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
    </>
  )
}

export default AdminAuth