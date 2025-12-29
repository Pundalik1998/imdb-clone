import React from 'react'
import { MovieCards } from './MovieCards'

export const Movies = () => {
  return (
    <div className='p-5'>
  <div className='text-2xl m-5 font-bold text-center '>
  <h1>Trending Movies</h1>
  </div>
  <div className='flex flex-row flex-wrap justify-around gap-6'>
     <MovieCards/>
     <MovieCards/>
     <MovieCards/>
     <MovieCards/>
     <MovieCards/>
     <MovieCards/>
     <MovieCards/>
     
  </div>
    </div>

  )
}
