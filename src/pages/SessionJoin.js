import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import AdminAuth from '../components/AdminAuth'
import { menuStyle } from '../styles'


const SessionJoin = () => {
  const [alias, setAlias] = useState('')
  const [sessionPin, setSessionPin] = useState('')

  const joinSession = (e) => {
    e.preventDefault()

    // input validation

    // join session

    setAlias('')
    setSessionPin('')
  }

  return (
    <>
    <Box sx={menuStyle}>
      <Stack spacing='70px'>
        <Typography variant='h3'>UNIT EXCHANGE</Typography>

        <form onSubmit={joinSession}>
          <Stack spacing='20px'>
            <TextField 
              label='ALIAS'
              type='text'
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
            />
            <TextField 
              label='SESSION PIN'
              type='text'
              value={sessionPin}
              onChange={(e) => setSessionPin(e.target.value)}
            />
            <Button type='submit' variant='outlined'>JOIN</Button>
          </Stack>
        </form>

        <AdminAuth />
      </Stack>
    </Box>
    </>
  )
}

export default SessionJoin