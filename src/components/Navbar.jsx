import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import { IoFitnessOutline } from 'react-icons/io5'
import { IoIosFitness } from 'react-icons/io'
import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <div className='navbar'>
      <Stack direction='row' sx={{fontSize: {lg: '1vw', xs: '2vw'}}}>
      <Link to="/" style={{textDecoration: 'none', color: '#FDFDFD'}}>
      <div className="logo">
        <h1>Work<span>out</span></h1>
      </div>
      </Link>
        <IconContext.Provider value={{ color: "#9d0208", size: '50px'}}>
          <Stack direction='row' style={{padding: '2rem'}} className="nav-stack">
            <Link to="/" style={{textDecoration: 'none', color: '#FDFDFD'}}>
            <Stack direction="row" className='link'>
              <IoFitnessOutline className='icon'/>
              <h2>Home</h2>
            </Stack>
            </Link>
            <a href="#exercises" style={{textDecoration: 'none', color: '#FDFDFD'}}>
            <Stack direction="row" className='link'>
              <IoIosFitness className='icon' />
              <h2>Exercises</h2>
            </Stack>
            </a>
          </Stack>
        </IconContext.Provider>
        </Stack>
    </div>
  )
}

export default Navbar