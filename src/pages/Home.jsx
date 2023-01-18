import { useState } from 'react'
import { Box } from '@mui/material'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'
import Gym from '../assets/images/gym.jpg'


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
    <Box sx={{width: '80%', position: 'relative', right: '-10%'}}>
      <HeroBanner />
      <img className='bg' src={Gym} alt="Gym" />
      <SearchExercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}
      />
      <Exercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        exercises={exercises}
      />
    </Box>
  )
}

export default Home