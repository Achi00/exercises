import { Box, Stack, Typography, Button } from '@mui/material'
import { MdOutlineFitnessCenter } from 'react-icons/md'
import { IoFitnessOutline } from 'react-icons/io5'

const heroBanner = () => {
  return (
    <div className="hero">
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }} position="relative" p="20px">
        <p>
            Fitness Club
        </p>
        <p>
            Fitness, Health, Diet
        </p>
        <Typography fontWeight="600" fontSize="28px" lineHeight="35px" mb="10px">
            Check out the most effective exercises
        </Typography>
        <Button variant='contained' color="error" href='#exercises'
        sx={{backgroundColor: '#471313', padding: '10px'}}
        >
          Explore Exercises
          <IoFitnessOutline className='btn-icon' size="30px" />
        </Button>
        <h1>Exercises</h1>
    </Box>
    </div>
  )
}

export default heroBanner