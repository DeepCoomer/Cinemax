// import React from 'react'
import HeroBanner from './herobanner/HeroBanner';
import Popular from './popular/Popular';
import './style.scss';
import TopRated from './toprated/TopRated';
import Trending from './trending/Trending';

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home