import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if(!exerciseVideos.length) return 'Loading...'
  return (
    <Box sx={{mt: {lg:"200px", xs: '20px'}}} p="20px">
      <Typography variant='h4' mb="33px">
        Watch <span style={{color: '#9d0208', textTransform: 'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="centee"
        sx={{
          flexDirection: { lg: 'row'},
          gap: { lg: '110px', xs: '0'}
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a 
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank" 
          rel="norefrrer"
          key={index} 
          className="exercise-video">
            <img src={item.video.thumbnails[0].url} alt="video" style={{borderRadius: '35px'}}/>
            <Box>
              <Typography variant="h5" color="white">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="gray">
               From: {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos