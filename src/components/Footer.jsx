import React from 'react'

const Footer = () => {
  return (
    <>
      {/* <footer class='text-gray-600 body-font border-2 mt-6 bg-stone-900'>
        <div class='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
          <div class='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
            <span class='ml-3 text-[30px] font-bold text-white '>Shopify</span>
            <p class='leading-5 mt-5 text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
            </p>
          </div>
          <div class='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
            <div class='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 class='title-font font-medium text-white tracking-widest text-xl mb-3'>
                Pages
              </h2>
              <nav class='list-none mb-10'>
                <li>
                  <a
                    class='text-white 
relative  hover:text-pink-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-red-700 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-red-700 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] '
                  >
                    Home Page
                  </a>
                </li>
                <li>
                  <a
                    class='text-white
relative  hover:text-pink-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-red-700 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-red-700 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'
                  >
                    {' '}
                    Cart Page
                  </a>
                </li>
                <li>
                  <a
                    class='text-white
relative  hover:text-pink-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-red-700 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-red-700 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'
                  >
                    Contact Page
                  </a>
                </li>
              </nav>
            </div>

            <div class='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 class='title-font font-medium text-white tracking-widest text-xl mb-3'>
                Resources
              </h2>
              <nav class='list-none mb-10'>
                <li>
                  <a
                    class='text-white
relative  hover:text-pink-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-red-700 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-red-700 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'
                  >
                    Contact Support{' '}
                  </a>
                </li>
                <li>
                  <a
                    class='text-white
relative  hover:text-pink-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-red-700 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-red-700 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    class='text-white
relative  hover:text-pink-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-red-700 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-red-700 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'
                  >
                    Returns
                  </a>
                </li>
              </nav>
            </div>
            <div class='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 class='title-font font-medium text-white tracking-widest text-xl mb-3'>
                Social Media
              </h2>
              <nav class='list-none mb-10'>
                <li>
                  <a
                    class='text-white
relative  hover:text-pink-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-red-700 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-red-700 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    class='text-white
relative  hover:text-pink-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-red-700 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-red-700 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    class='text-white
relative  hover:text-pink-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-red-700 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-red-700 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'
                  >
                    Twitter
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class='bg-gray-100'>
          <div class='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
            <p class='text-gray-500 text-sm text-center sm:text-left'>
              © 2025 Momina Khan  —
            
            </p>
            <span class='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
              <a class='text-gray-500'>
                <svg
                  fill='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  class='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                </svg>
              </a>
              <a class='ml-3 text-gray-500'>
                <svg
                  fill='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  class='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                </svg>
              </a>
              <a class='ml-3 text-gray-500'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  class='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                  <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                </svg>
              </a>
              <a class='ml-3 text-gray-500'>
                <svg
                  fill='currentColor'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='0'
                  class='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='none'
                    d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                  ></path>
                  <circle cx='4' cy='4' r='2' stroke='none'></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer> */}

<footer className='bg-background text-white py-8 mt-[100px] border border-gray-900'>
        <div className='container mx-auto flex justify-between'>
          <div className='flex flex-col'>
            <h3 className='font-bold mb-2 ml-32 text-4xl'>WATCH</h3>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-bold mb-2 '>MENU</h3>
            <ul>
              <li>
                <a href='#' className='text-gray-500'>
                  SHIPPING INFO
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-500'>
                  REFUNDS
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-500'>
                  HOW TO ORDER
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-500'>
                  HOW TO TRACK
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-500'>
                  SIZE GUIDES
                </a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col mr-[100px]'>
            <h3 className='font-bold mb-2'>SIGNUP FOR OUR LATEST NEWS</h3>
            <div className='flex'>
              <input
                type='email'
                placeholder='email address'
                className='border border-muted  p-2 w-64'
              />
              <button className='bg-rose-400 text-white  p-2 hover:bg-primary/80'>
                Submit
              </button>
            </div>
          </div>
        </div>

        <hr className=' ml-[100px] mt-10 mr-[100px]' />
        <div className='text-center mt-8'>
          <p className='text-muted'>
            Made with <span className='text-accent'>❤️</span> by Momina Khan
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
