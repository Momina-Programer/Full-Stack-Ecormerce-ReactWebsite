import React from 'react'
import './header.css'


const Header = () => {
  return (
    <>
   

<section className='mt-[200px] text-white text-5xl ml-[10%] leading-[65px] font-bold ' >
<h1>CUSTOM WATCHES</h1>
<h1>FOR ANY</h1>
<h1>OCCASION</h1>

</section>

{/* button sections  */}

<section className='mt-[40px]'> 
<button className='text-white border p-[10px]  ml-[10%] border-pink-600 hover:bg-pink-700 transition duration-300 ease-in-out
' >DESIGN & ORDER </button>
<button className='text-white border p-[10px] ml-10  border-pink-600 hover:bg-pink-700 transition duration-300 ease-in-out
'>REQUEST VIRTUAL</button>
</section>
    </>
  )
}

export default Header
