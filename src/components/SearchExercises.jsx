import { useEffect, useState} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { IoIosFitness } from 'react-icons/io'
import { fetchData, exerciseOptions } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("")
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      setBodyParts(['all', ...bodyPartsData])
    }

    fetchExercisesData()
  }, [])
  

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      const searchedExercises = exercisesData.filter((exercise) => 
      exercise.name.toLowerCase().includes(search) 
      || exercise.target.toLowerCase().includes(search)
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('')
      setExercises(searchedExercises)
    }
  }
  return (
    <Stack alignContent="center" mt="38px" justifyContent="center" p="20px">
      <Typography sx={{ fontSize: { lg: "44px", xs: '30px', opacity: '0.5' }}}
      mb="50px" textAlign="center"
      >
        <span style={{opacity: '0'}}>0</span>Exercises You <span className='search-span'>Should <IoIosFitness className='span-icon'/></span> Know
      </Typography>
      <Box position="relative" mt="72px">
        <TextField 
        sx={{
          input: { fontWeight: "700", border: "none", borderRadius: '10px', backgroundColor: '#260D12', color: '#FFFFFF'},
          width: {lg: '300px', xs: '200px'}
        }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className='search-btn'
          sx={{border: '1px solid red', color: 'white', padding: '1rem', width: { lg: '175px', xs: "80px", fontSize: {lg: '20px', xs: '14px'}, position: 'relative', left: '10%'}}}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>
    </Stack>
  )
}

export default SearchExercises