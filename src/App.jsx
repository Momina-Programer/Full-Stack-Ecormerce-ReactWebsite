

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';

function App() {


  return (
    <>
<BrowserRouter>
<Routes>
<Route path='/' element={<MainPage/>}/>
  <Route path='/product' element={<Home/>}/>
  <Route path='/product/:id' element={<ProductDetail/>}/>
  <Route path='/cart' element={<CartPage/>}/>

</Routes>
</BrowserRouter>  
    </>
  )
}

export default App
