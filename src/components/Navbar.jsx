import React from 'react'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <>
      <section className='flex gap-10  border pt-[20px] pb-[30px] shadow-lg'>
        <h1 className='text-[40px] ml-[20px] font-bold cssanimation  leFadeInLeft sequence'>
          Sopify
        </h1>

        <input
          className='bg-zinc-200 ml-20 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 w-[500px] shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500'
          autocomplete='off'
          placeholder='Search here...'
          name='text'
          type='text'
        />

      <Link to='/'>  <span className='ml-[30%] text-[20px] font-bold'> Products</span> </Link> 
     
     <Link to='/cart'>CartPage</Link>

        {/* Cart icon */}
        {/* <svg className='mt-5' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#8C1A10"><path d="M284.53-80.67q-30.86 0-52.7-21.97Q210-124.62 210-155.47q0-30.86 21.98-52.7Q253.95-230 284.81-230t52.69 21.98q21.83 21.97 21.83 52.83t-21.97 52.69q-21.98 21.83-52.83 21.83Zm400 0q-30.86 0-52.7-21.97Q610-124.62 610-155.47q0-30.86 21.98-52.7Q653.95-230 684.81-230t52.69 21.98q21.83 21.97 21.83 52.83t-21.97 52.69q-21.98 21.83-52.83 21.83ZM238.67-734 344-515.33h285.33l120-218.67H238.67ZM206-800.67h589.38q22.98 0 34.97 20.84 11.98 20.83.32 41.83L693.33-490.67q-11 19.34-28.87 30.67-17.87 11.33-39.13 11.33H324l-52 96h487.33V-286H278q-43 0-63-31.83-20-31.84-.33-68.17l60.66-111.33-149.33-316H47.33V-880h121.34L206-800.67Zm138 285.34h285.33H344Z"/></svg> */}
      </section>
    </>
  )
}

export default Navbar
