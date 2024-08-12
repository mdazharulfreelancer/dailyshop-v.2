import { Route, Routes } from 'react-router-dom'
import './App.scss'
import FreeDelivery from './component/Home/FastCategory/FreeDelivery/FreeDelivery'
import FreshSalePc from './component/Home/FreshSale/FreshSaleDesktop/FreshSalePc'
import FreshSalePhone from './component/Home/FreshSale/Freshsalephone/FreshSalePhone'
import MoreProductPage from './component/MoreProductPage/MoreProductPage'
import Pagelayout from './layout/pagelayout/Pagelayout'
import AllGategori from './pages/AllCategory/AllGategori'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import Checkout from './pages/Checkout/Checkout'
import EverydayLowPrice from './pages/Everyday Low Price/EverydayLowPrice'
import FreeDelivary from './pages/FreeDeliveryPhone/FreeDelivary'
import Home from './pages/Home/Home'
import { Login } from './pages/LoginSignUp/Login'
import { Otp } from './pages/LoginSignUp/Otp'
import { Regestation } from './pages/LoginSignUp/Regestation'
import Chat from './pages/Message/Chat'
import Message from './pages/Message/Message'
import NewProduct from './pages/New Product/NewProduct'
import ProductDitals from './pages/ProductDitals/ProductDitals'
import Search from './pages/Search/Search'

function App() {
  return (
    <>
    <Pagelayout>
      <Routes>
     
         <Route path='/' element={<Home/>} />
         <Route path='/ditals-product/:id/:name' element={<ProductDitals  />} />
         <Route path='/categori/:name' element={<CategoryPage/>} />
         <Route path='/fresh-sale' element={<FreshSalePhone/>} />
         <Route path='/fresh-sale-all-shop'  element={<FreshSalePc/>} />
         <Route path='/free-delivery' element={< FreeDelivery/>} />
         <Route path='/view-all-product/:name' element={< MoreProductPage/>} />
         <Route path='/all-category' element={< AllGategori/>} />
         <Route path='/checkout-page' element={< Checkout/>} />
         <Route path='/new-product-today-all' element={< NewProduct/>} />
         <Route path='/free-delivery-all' element={< FreeDelivary/>} />
         <Route path='/wholesale-price-all' element={< NewProduct/>} />
         <Route path='/everyday-low-price-all' element={< EverydayLowPrice/>} />
         <Route path='/top-sale-all' element={< NewProduct/>} />
         <Route path='/chat' element={< Message/>} />
         <Route path='/chat-message/:receverid' element={<  Chat/>} />
         <Route path='/sign-in' element={< Login/> } />
         <Route path='/search-items' element={< Search/> } />
         <Route path='/regestation' element={< Regestation/> } />
         <Route path='/regestation-Otp/:email/:id' element={< Otp/> } />
      </Routes>
    </Pagelayout>
    </>
  )
}

export default App
