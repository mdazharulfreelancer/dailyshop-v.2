//import
import { applyMiddleware, combineReducers, createStore } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import { addToCart } from './reducer/CartReducer';
import { getAllCategoryProductpc, getAllCategoryProductPhone, getAllDilevariProductPhone, getAllLowPriceProductPhone, getAllNewProductPC, getAllNewProductPcRight, getAllNewProductPhone, getAllProductFlashSalePc, getAllProductFlashSalePcpage, getAllProductFlashSalePhoneReducer, getAllProductHomeJustForYouPc, getAllProductHomeJustForYouPcProduct, getAllProductHomeJustForYouPhoneLeft, getAllProductHomeJustForYouPhoneRight, getAllProductUser, getProductDitalsIdName } from './reducer/ProductReducer';
import { cteateProductreducer } from './reducer/UserReducer';



// reducer
const reducer = combineReducers({

    getproduct : getAllProductUser,
    cartItem : addToCart,
    justforyoupc : getAllProductHomeJustForYouPc,
    ProductDital : getProductDitalsIdName,
//phone ------------------------------
    HomeJustForYouProductsLeft : getAllProductHomeJustForYouPhoneLeft,
    newproductphone : getAllNewProductPhone,
    lowpriceproductphone : getAllLowPriceProductPhone,
    freedalivariPhone : getAllDilevariProductPhone,
    loaduser : cteateProductreducer ,
    categoryprodcut : getAllCategoryProductPhone,
//phone ------------------------------
//Pc for product store --------------------------------
  HomeJustForYouProductsPc : getAllProductHomeJustForYouPcProduct,
  NewProductsPc : getAllNewProductPC,
  CategoryProductPc : getAllCategoryProductpc ,
//Pc for product store --------------------------------
    HomeJustForYouProductsRight : getAllProductHomeJustForYouPhoneRight,
    FlashSalePc : getAllProductFlashSalePc,
    FlashSalePhone :getAllProductFlashSalePhoneReducer,
    FlashSalePcPage : getAllProductFlashSalePcpage,
    newproductright : getAllNewProductPcRight,
    lowpriceproduct : getAllLowPriceProductPhone,

})
// inital state
const initialState = {
    cartItem : {
        cartItems : localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    }
}

//middleware
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
       applyMiddleware(...middleware)
    //composeWithDevTools(applyMiddleware(...middleware))
)

export default store