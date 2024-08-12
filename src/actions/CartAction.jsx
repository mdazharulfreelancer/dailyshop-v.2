import axios from 'axios';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../constant/CartConstant';

export const addToCart = (productId, qty) => async (dispatch, getState) => { 

    const {data} = await axios.get(`/api/v1/product-ditals/${productId}`);

    dispatch({
        type : ADD_TO_CART,
        payload : {
            productId : data.ProductDitals._id,
            productname : data.ProductDitals.productname,
            productimage : data.ProductDitals.productimage,
            productStock : data.ProductDitals.productStock,
            currentprice : data.ProductDitals.currentprice,
            category : data.ProductDitals.category,
            qty
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cartItem.cartItems));
}

export const removeFromCart = (productId) => (dispatch, getState) => { 

    dispatch({
        type : REMOVE_FROM_CART,
        payload : productId
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cartItem.cartItems));
}