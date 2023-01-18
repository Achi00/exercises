import React from 'react'
import { Stack, Typography } from '@mui/material'
import { IconContext } from "react-icons";
import { IoFitnessOutline } from 'react-icons/io5'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack 
        type="button" 
        alignItems="center" 
        justifyContent="center" 
        className="bodyPart-card"
        sx={
            bodyPart === item ? {
                border: '4px solid gray',
                borderRadius: '25px',
                // backgroundColor: '#240046',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '45px',
            } : {
                // backgroundColor: '#240046',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '45px',
                borderRadius: '25px'
            }
        }
        onClick={() => {
            setBodyPart(item)
            window.scrollTo({top: 1400, left: 100, behavior: 'smooth'})
        }}
    >
        <IconContext.Provider value={{ color: "#9d0208", size: '50px'}}>
            <IoFitnessOutline />
        </IconContext.Provider>
        <Typography fontSize="24px" fontWeight="bold" color="white" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart