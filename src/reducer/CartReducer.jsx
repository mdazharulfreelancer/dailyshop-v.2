import { ADD_TO_CART, REMOVE_FROM_CART } from "../constant/CartConstant";


export const addToCart = (state = { cartItems: [] }, action) => {

    switch (action.type) { 

        case ADD_TO_CART :
            const removeItemId = action.payload.productId;
            const existItem = state.cartItems.find(item => item.productId === removeItemId);

            if(existItem){
                return {
                    ...state,
                    cartItems : state.cartItems.map(item => item.productId === existItem.productId ? action.payload : item)
                }
                }else{
                    return {
                        ...state,
                        cartItems : [...state.cartItems, action.payload]
                    }

            }

            
        case REMOVE_FROM_CART: 
        return {
            ...state,
            cartItems: state.cartItems.filter(item => item.productId !== action.payload)
        }

        default:
            return state;
    }
}