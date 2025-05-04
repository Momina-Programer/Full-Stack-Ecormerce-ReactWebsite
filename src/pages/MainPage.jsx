import React from 'react'
import Header from '../components/Header'
import img from '../components/images/watch1.jpg'
import Slider from '../components/slider/Slider'
import { Link } from 'react-router'
import Footer from '../components/Footer'

const MainPage = () => {
  return (
    <>
      <header className='   z-20 w-full  fixed border-black-200 bg-black/90 shadow-lg shadow-black-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-black-200 lg:border-black-200 lg:backdrop-blur-sm lg:after:hidden -mt-[200px]'>
        <nav
          aria-label='main navigation'
          className='flex h-[80px] items-stretch justify-between font-medium text-white'
          role='navigation'
        >
          <a className='mt-[25px] ml-[4%] text-[30px] font-bold'>Shopify</a>
          <ul className='flex  ml-[20%]  text-xl cursor-pointer  text-white '>
            <li role='none' className='flex items-stretch'>
              <Link
                to='/'
                role='menuitem'
                aria-haspopup='false'
                className='flex items-center gap-2 py-4 hover:text-red-300   transition duration-300 ease-in-out focus-visible:outline-none lg:px-8 text-xl'
                href='javascript:void(0)'
              >
                <span>Home</span>
              </Link>
            </li>

            <li role='none' className='flex items-stretch'>
              <Link
                to='/product'
                role='menuitem'
                aria-current='page'
                aria-haspopup='false'
                className='flex items-center gap-2 py-4 hover:text-red-300   transition duration-300 ease-in-out  focus-visible:outline-none lg:px-8 text-xl'
                href='javascript:void(0)'
              >
                <span>Products</span>
              </Link>
            </li>
            <li role='none' className='flex items-stretch'>
              <Link
                to='#'
                role='menuitem'
                aria-current='page'
                aria-haspopup='false'
                className='flex items-center gap-2 py-4 hover:text-red-300   transition duration-300 ease-in-out  focus-visible:outline-none lg:px-8 text-xl'
                href='javascript:void(0)'
              >
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Header />

      <section className='text-white mt-[300px] '>
        <img
          className=' mr-[30px] float-left'
          src={img}
          width={'700px'}
          alt=''
        />

        <h2 className='font-bold text-4xl pt-20 '>OUR STORE</h2>
        <p className='mt-[20px] mr-[40px] text-justify text-gray-400'>
          Memphis clinched a spot in the play-in tournament with the victory,
          but the fight for seeding continues. The race for the No. 8 spot in
          the West -- and the safety net of having to win just one of two games
          to make the playoffs -- could come down to the regular seasons final
          day, when Memphis and Golden State meet. The good thing for the
          Grizzlies is they dont have to leave home until that matchup as they
          have games against Dallas and two against Sacramento before the
          finale.
        </p>
      </section>
      <section className='mt-[300px] '>
        <Slider />
      </section>

      <Footer />
    </>
  )
}

export default MainPage
