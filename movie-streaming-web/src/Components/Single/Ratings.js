import React from 'react'
import Title from '../Title'
import { BsBookmarkStarFill } from 'react-icons/bs';
import { Message, Select } from '../UseInput';
import { useState } from 'react';
import { Actor } from '../../Data/MoviesData';
import Rating from './../Star';

function Ratings({movie}) {
  const rating = [
    {
      title: '0 - Poor',
      value: 0,
    },
    {
      title: '1 - Fair',
      value: 1,
    },
    {
      title: '2 - Good',
      value: 2,
    },
    {
      title: '3 - Very Nice',
      value: 3,
    },
    {
      title: '4 - Excellent',
      value: 4,
    },
    {
      title: '5 - Magnificent',
      value: 5,
    },
  ]
  const [rate, setRating] = useState();
  return (
    <div className='my-12'>
      <Title title='Review' Icon={BsBookmarkStarFill}></Title>
      <div className='mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded'>
        <div className='xl:col-span-2 w-full flex flex-col gap-8'>
          <h3 className='text-xl text-text font-semibold'>
             Leave A Review For '{movie.name}'
          </h3>
          <p className='text-sm leading-7 font-medium text-border'>
            Write a review for this movie. It will be posted on this page.
          </p>
          <div className='text-sm w-full'>
            <Select 
              label='Select Rating' 
              options={rating} 
              onChange={(e) => setRating(e.target.value)}>

            </Select>
            <div className='flex mt-4 text-lg gap-2 text-star'>
              <Rating value={rate}/>
              
            </div>
          </div>
          <Message label='Message' placeholder='Make it short and sweet...'/>
          <button className='bg-subMain text-white py-3 rounded w-full flex-colo'>
            Submit
          </button>
        </div>
        <div className='col-span-3 flex flex-col gap-6'>
          <h3 className='text-xl text-text font-semibold'>
            Reviews
          </h3>
          <div className='w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll'>
            {Actor.map((user, i) => (
              <div className='md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg'>
                <div className='col-span-2 bg-main  hidden md:block'>
                  <img
                    src={`/${user? user.image : 'user.png'}`}
                    alt={user.fullName}
                    className='w-full h-24 rounded-lg object-cover'/>
                </div>
                <div className='col-span-7 flex flex-col gap-2'>
                  <h2>{user?.fullName}</h2>
                  <p className='text-xs leading-6 font-medium text-text'>
                    {user?.message}
                  </p>
                </div>
                <div className='col-span-3 flex items-center justify-center border-l border-border text-xs gap-1 text-star'>
                  <Rating value={user?.rate}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ratings