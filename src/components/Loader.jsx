import React from 'react'
import { Stack } from '@mui/system'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" alighItems="center" width="100%">
        <InfinitySpin color='red'/>
    </Stack>
  )
}

export default Loader