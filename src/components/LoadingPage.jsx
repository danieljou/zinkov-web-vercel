import { CircularProgress } from '@mui/material'
import React from 'react'

const LoadingPage = () => {
  return (
    <div className='flex w-full h-screen justify-center items-center' >

        
        <CircularProgress  variant='indeterminate'  size={80} />
    </div>
  )
}

export default LoadingPage