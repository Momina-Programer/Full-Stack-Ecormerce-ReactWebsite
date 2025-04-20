import { useState, useEffect } from 'react'
import { useParams,useNavigate } from "react-router-dom";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/products/${id}`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setProduct(data.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return (
      <>
        <Navbar />
        <div className='flex justify-center items-center h-64'>
          <h3>Loading product details...</h3>
        </div>
        <Footer />
      </>
    )
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className='flex justify-center items-center h-64 text-red-500'>
          <h3>{error}</h3>
        </div>
        <Footer />
      </>
    )
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className='flex justify-center items-center h-64'>
          <h3>Product not found!</h3>
        </div>
        <Footer />
      </>
    )
  }

// Add this inside your ProductDetail component, before the return statement
const handleAddToCart = () => {
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItemIndex = existingCart.findIndex(
    (item) => item.id === product.id
  );

  if (existingItemIndex >= 0) {
    existingCart[existingItemIndex].quantity += 1;
  } else {
    existingCart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(existingCart));
  navigate("/cart");
};


  return (
    <>
      <Navbar />
      <section className='container mx-auto px-4 py-8'>
        <div className='max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden cssanimation fadeInBottom'>
          <div className='md:flex'>
            {/* Product Image Section */}
            <div className='md:w-1/2 p-8'>
              <img
                className='w-full h-[400px] object-contain rounded-lg'
                src={product.image}
                alt={product.name}
              />
            </div>

            {/* Product Info Section */}
            <div className='md:w-1/2 p-8'>
              <div className='text-muted-foreground text-sm'>beauty</div>
              <h1 className='font-bold text-3xl mt-2'>{product.name}</h1>

              <div className='flex items-center my-4'>
                <span className='text-yellow-500 text-xl'>★★★★☆</span>
                <span className='text-muted-foreground ml-2'>{product.rating}</span>
              </div>

              <div className='my-4'>
                <span className='text-sm text-muted-foreground line-through'>
                  $9.99
                </span>
                <span className='text-2xl font-semibold text-primary ml-3'>
                  ${product.price}
                </span>
              </div>

              <p className='text-gray-700 my-6'>{product.description}</p>

              <div  className='flex space-x-4 mt-8'>
                <button onClick={handleAddToCart}  className='text-xl w-36 h-12 rounded bg-pink-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000'>
                  <span className='absolute bg-pink-600 w-48 h-48 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all'></span>
                  <span className='absolute bg-pink-800 w-48 h-48 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all'></span>
                  Add to Cart
                </button>
             
                <Link
                  to='/'
                  className='flex items-center justify-center text-xl w-48 h-12 rounded border border-pink-500 text-pink-500 hover:bg-pink-50 duration-300'
                >
                  Continue Shopping
                </Link>
              </div>
   
              {/* Product Details */}
              <div className='mt-8 pt-6 border-t border-gray-200'>
                <h2 className='font-bold text-lg mb-4'>Product Details</h2>
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <h3 className='font-medium text-gray-700'>Category</h3>
                    <p className='text-gray-600'>Watches</p>
                  </div>
                  <div>
                    <h3 className='font-medium text-gray-700'>Availability</h3>
                    <p className='text-green-600'>In Stock</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ProductDetail
