import { Skeleton } from '@mui/material'
import React from 'react'

const PreviewBagdeSleleton = () => {
  return (
    <div className='flex justify-between divide-x-2 w-full p-3'>
    <div className="w-full p-3 flex justify-center">
      <div className="w-full p-3">
        {/* Skeleton for the first section */}
        <Skeleton variant="rectangular"  width={500} height={200} />
        <Skeleton variant="rectangular" className='my-5' width={500} height={280} />
        <Skeleton variant="rectangular" width={500} height={100} />

      </div>
    </div>

    <div className="w-full p-3 flex justify-center">
      <div className="w-full p-3 relative">
        {/* Skeleton for the second section */}
        <div className="flex justify-between gap-2 text-white text-sm">
          {/* Skeletons for text lines */}
          <Skeleton variant="text" width={150} />
          <Skeleton variant="text" width={150} />
          {/* ... */}
        </div>
        <div className="grid grid-cols-5 w-full gap-3 items-center">
          {/* Skeletons for images */}
          <Skeleton variant="rectangular" width={100} height={50} />
          {/* ... */}
        </div>
        <div className="absolute bottom-0 text-white text-[13px] text-justify left-0 right-0 p-10">
          {/* Skeleton for the text content */}
          <Skeleton variant="text" width="100%" height={200} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default PreviewBagdeSleleton