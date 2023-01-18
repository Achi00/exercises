import React from 'react'
import { Stack, Button, Typography, Box } from '@mui/material'
import { BiTargetLock } from 'react-icons/bi'
import { IoIosFitness } from 'react-icons/io'
import { IoBody } from 'react-icons/io5'
import { GiWeightLiftingUp } from 'react-icons/gi'

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail

  return (
    <Box>
    <Typography sx={{position: 'relative', left: '50%', width: {lg: '300px', xs: '150px'}}} pt="2rem" variant='h3' color="#9d0208">{name}</Typography>
    <Stack gap="60px" sx={{flexDirection:{ lg: 'row'}, p: '20px', alignItems: 'center'}}>
        <img src={gifUrl} alt={name} loading="lazy" className='detail-image'/>
        <Stack sx={{gap: {lg: '30px', xs: '20px', textAlign: 'left'}}}> 
            <Button variant="contained" color="error">
                <IoIosFitness size="50px"/>
                <h3>{name}</h3>
            </Button>
            <Button variant="contained" color="error">
                <BiTargetLock size="50px" />
                <h3>{target}</h3>
            </Button>
            <Button variant="contained" color="error">
                <IoBody size="50px" />
                <h3>{bodyPart}</h3>
            </Button>
            <Button variant="contained" color="error">
                <GiWeightLiftingUp size="50px" />
                <h3>{equipment}</h3>
            </Button>
        </Stack>
    </Stack>
    </Box>
  )
}

export default Detail