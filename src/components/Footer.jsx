import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#0A0C23">
      <Stack gap="40px" alighItems="center" px="40px" pt="24px">
        <div className="logo">
          <h1>Work<span>out</span></h1>
        </div>
        <Typography variant="h5" pb="40px" mt="20px">Workout App</Typography>
      </Stack>
    </Box>
  )
}

export default Footer