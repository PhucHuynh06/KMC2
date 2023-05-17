import React from 'react'
import Layout from './../Layout/Layout';
import { Link, useParams } from 'react-router-dom';
import { Movies } from '../Data/MoviesData';
import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { FaBookmark, FaCloudDownloadAlt, FaPlay } from 'react-icons/fa';

function WatchPage() {
    let {id} = useParams()
    const movie = Movies.find((movie) => movie.name === id)
    const [play, setPlay] = useState(false)
  return (
    <Layout>
        <div className='container mx-auto bg-dry p-6 mb-12'>
            <div className='flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6'>
                <Link 
                    to={`/movie/${movie?.name}`}
                    className='md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray'>
                        <BiArrowBack/> {movie?.name}
                </Link>
                <div className='flex-btn sm:w-auto w-full gap-5'>
                    <button className='bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3 text-sm'>
                        <FaBookmark></FaBookmark>
                    </button>
                    <button className='bg-subMain flex items-center gap-2 hover:text-main transitions text-white rounded px-8 font-medium py-3 text-sm'>
                        <FaCloudDownloadAlt></FaCloudDownloadAlt> Download
                    </button>
                </div>
            </div>
            {play ? (
                <video controls autoPlay={play} className='w-full h-full rounded'>
                    <source
                        src='/images/I Feel Fantastic.mp4'
                        type='video/mp4'
                        title={movie?.name}>
                    </source>
                </video>
            ) : (
                <div className='w-full h-screen rounded-lg overflow-hidden relative'>
                    <div className='absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo'>
                        <button
                            onClick={() => setPlay(true)}
                            className='bg-white text-subMain flex-colo border border-subMain rounded-full w-20 h-20 font-medium text-xl'>
                                <FaPlay></FaPlay>
                        </button>
                    </div>
                    <img
                        src={movie?.image ? `/images/${movie.image}`
                            : 'images/user.jpg'
                        } 
                        alt={movie?.name} 
                        className='w-full h-full object-cover rounded-lg'
                        />
                </div>
            )}
        </div>
    </Layout>
  )
}

export default WatchPage