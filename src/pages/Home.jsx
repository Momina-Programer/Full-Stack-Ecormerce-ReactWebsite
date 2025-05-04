import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router'
import Navbar from '../components/Navbar'

const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const ProductApi = 'http://127.0.0.1:8000/api/products'

    fetch(ProductApi)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(apiData => {
        // Ensure we're working with an array
        const productsArray = Array.isArray(apiData)
          ? apiData
          : apiData.data || apiData.products || []
        setData(productsArray)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <img
        className=' flex gap-4 p-4 flex-wrap justify-center  ml-[45%] mt-[10%] w-40 h-40 animate-spin'
        src='https://www.svgrepo.com/show/199956/loading-loader.svg'
        alt='Loading icon'
      />
    )
  }

  if (error) {
    return <h3>{error.message}</h3>
  }

  return (
    <>
      <Navbar />

      <section className='flex flex-wrap gap-16 bg-black text-white '>
        {data.length > 0 ? (
          data.map(product => (
            <div
              key={product.id}
              className='w-[350px] pb-2 ml-10 mt-[110px] border border-gray-500 shadow-xl shadow-neutral-800 cssanimation fadeInBottom'
            >
              <img
                className='w-[350px] h-[250px]'
                src={product.image}
                alt={product.name}
              />
              <div className='p-4'>
                <div className='text-muted-foreground text-sm'>beauty</div>
                <h2 className='font-bold text-lg '>{product.name}</h2>
                <div className='flex items-center my-2'>
                  <span className='text-yellow-500'>★★★★☆</span>
                  <span className='text-muted-foreground ml-2'>
                    {product.rating}
                  </span>
                </div>
                <span className='text-sm text-muted-foreground line-through'>
                  ${product.old_price}
                </span>
                <span className='text-xl font-semibold text-primary ml-3'>
                  ${product.price}
                </span>
              </div>
              <div className='p-4'>
                <Link to={`/product/${product.id}`}>
                  {' '}
                  <button className='bg-accent text-accent-foreground hover:bg-accent/80 py-2 px-4 rounded-lg'>
                    <span className='flex items-center justify-center'>
                      <button className='text-xl w-32 h-10 ml-10 rounded bg-pink-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000'>
                        <span className='absolute bg-pink-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all'></span>
                        <span className='absolute bg-pink-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all '></span>
                        View Detail
                      </button>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center w-full'>No products available</p>
        )}
      </section>

      <Footer />
    </>
  )
}

export default Home
