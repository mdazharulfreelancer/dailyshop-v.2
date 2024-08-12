import axios from "axios";
import { GET_ALL_CATEGORY_PRODUCT_FAIL, GET_ALL_CATEGORY_PRODUCT_PC_FAIL, GET_ALL_CATEGORY_PRODUCT_PC_REQUEST, GET_ALL_CATEGORY_PRODUCT_PC_SUCCESS, GET_ALL_CATEGORY_PRODUCT_REQUEST, GET_ALL_CATEGORY_PRODUCT_SUCCESS, GET_ALL_LOW_PRICE_PRODUCT_FAIL, GET_ALL_LOW_PRICE_PRODUCT_REQUEST, GET_ALL_LOW_PRICE_PRODUCT_RIGHT_FAIL, GET_ALL_LOW_PRICE_PRODUCT_RIGHT_REQUEST, GET_ALL_LOW_PRICE_PRODUCT_RIGHT_SUCCESS, GET_ALL_LOW_PRICE_PRODUCT_SUCCESS, GET_ALL_NEW_PRODUCT_FAIL, GET_ALL_NEW_PRODUCT_PC_FAIL, GET_ALL_NEW_PRODUCT_PC_REQUEST, GET_ALL_NEW_PRODUCT_PC_SUCCESS, GET_ALL_NEW_PRODUCT_REQUEST, GET_ALL_NEW_PRODUCT_RIGHT_FAIL, GET_ALL_NEW_PRODUCT_RIGHT_REQUEST, GET_ALL_NEW_PRODUCT_RIGHT_SUCCESS, GET_ALL_NEW_PRODUCT_SUCCESS, GET_ALL_PRODUCT_FLASH_SALE_PC_FAIL, GET_ALL_PRODUCT_FLASH_SALE_PC_REQUEST, GET_ALL_PRODUCT_FLASH_SALE_PC_SUCCESS, GET_ALL_PRODUCT_FLASH_SALE_PHONE_FAIL, GET_ALL_PRODUCT_FLASH_SALE_PHONE_REQUEST, GET_ALL_PRODUCT_FLASH_SALE_PHONE_SUCCESS, GET_ALL_PRODUCT_HOME_JUST_FOR_YOU_PC_FAIL, GET_ALL_PRODUCT_HOME_JUST_FOR_YOU_PC_REQUEST, GET_ALL_PRODUCT_HOME_JUST_FOR_YOU_PC_SUCCESS, GET_ALL_PRODUCT_JUSTFORYOU_PHONE_LEFT_FAIL, GET_ALL_PRODUCT_JUSTFORYOU_PHONE_LEFT_REQUEST, GET_ALL_PRODUCT_JUSTFORYOU_PHONE_LEFT_SUCCESS, GET_ALL_PRODUCT_JUSTFORYOU_PHONE_RIGHT_FAIL, GET_ALL_PRODUCT_JUSTFORYOU_PHONE_RIGHT_REQUEST, GET_ALL_PRODUCT_JUSTFORYOU_PHONE_RIGHT_SUCCESS, GET_JUST_FOR_PRODUCT_FAIL, GET_JUST_FOR_PRODUCT_REQUEST, GET_JUST_FOR_PRODUCT_SUCCESS, GET_PRODUCT_DETAILS_FAIL, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_FREE_DELEVARI_FAIL, GET_PRODUCT_FREE_DELEVARI_REQUEST, GET_PRODUCT_FREE_DELEVARI_SUCCESS } from "../constant/ProductConstant";

export const getHomeJustForYouPc = (page) => async (dispatch) => {
    
    dispatch({type: GET_ALL_PRODUCT_HOME_JUST_FOR_YOU_PC_REQUEST})

    try {
        const {data} = await axios.get(`/api/v1/home-just-for-products?page=${page}`)

        dispatch({
            type: GET_ALL_PRODUCT_HOME_JUST_FOR_YOU_PC_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_PRODUCT_HOME_JUST_FOR_YOU_PC_FAIL,
            payload: error.response.data.message
        })
    }

}
//phone --------------phone---------------

export const getHomeJustForYouPhoneLeft = (page) => async (dispatch) => { 
    dispatch({type:GET_ALL_PRODUCT_JUSTFORYOU_PHONE_LEFT_REQUEST})

    try {
        const {data} = await axios.get(`/api/v1/get-all-product-just-for-you-phone-left?page=${page}`)

        dispatch({
            type: GET_ALL_PRODUCT_JUSTFORYOU_PHONE_LEFT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type :GET_ALL_PRODUCT_JUSTFORYOU_PHONE_LEFT_FAIL,
            payload: error.response.data
        })
    }
}
//new product-----------------------------
export const getNewProductPhone = (resultpage) => async (dispatch) => { 
    
    dispatch({type :GET_ALL_NEW_PRODUCT_REQUEST})

    try {
        const {data} = await axios.get(`/api/v1/new-product-phone?page=${resultpage}`)

        dispatch({
            type: GET_ALL_NEW_PRODUCT_SUCCESS,
            payload: data
        })
    }catch (error) {
        dispatch({
            type: GET_ALL_NEW_PRODUCT_FAIL,
            payload: error.response.data.message
        })

    }
}

//CATEGORY product-----------------------------
export const getCategoryProductPhone = (resultpage) => async (dispatch) => { 
    
    dispatch({type :GET_ALL_CATEGORY_PRODUCT_REQUEST})

    try {
        const {data} = await axios.get(`/api/v1/category-products?page=${resultpage}`)

        dispatch({
            type: GET_ALL_CATEGORY_PRODUCT_SUCCESS,
            payload: data
        })
    }catch (error) {
        dispatch({
            type: GET_ALL_CATEGORY_PRODUCT_FAIL,
            payload: error.response.data.message
        })

    }
}


//low price--------------------------
export const getAllNewLowPricePhone = (page) => async (dispatch) => { 

    dispatch({type :GET_ALL_LOW_PRICE_PRODUCT_RIGHT_REQUEST})

    try {
        const {data} = await axios.get(`/api/v1/low-price-products-phone?page=${page}`)

        dispatch({
            type: GET_ALL_LOW_PRICE_PRODUCT_RIGHT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_LOW_PRICE_PRODUCT_RIGHT_FAIL,
            payload: error.response.data
        })
    }
}

//free dalivary ---------------------------
export const getFreeDalivaryPhone = (page) => async (dispatch) => { 

    dispatch({type :GET_PRODUCT_FREE_DELEVARI_REQUEST})

    try {
        const {data} = await axios.get(`/api/v1/freedalivary-product-phone?page=${page}`)

        dispatch({
            type: GET_PRODUCT_FREE_DELEVARI_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_PRODUCT_FREE_DELEVARI_FAIL,
            payload: error.response.data
        })
    }
}
//phone-------------phone-------------
//action for pc/computer ------------------pccccccc-----------------------
export const getHomeJustForYouProductPc = (page) => async (dispatch) => { 
    dispatch({type:GET_JUST_FOR_PRODUCT_REQUEST})

    try {
        const {data} = await axios.get(`/api/v1/home-just-for-products-pc?page=${page}`)

        dispatch({
            type: GET_JUST_FOR_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type :GET_JUST_FOR_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}

//new product-----------------------------
export const getCategoryProductPC = (resultpage) => async (dispatch) => { 
    
    dispatch({type :GET_ALL_CATEGORY_PRODUCT_PC_REQUEST})

    try {
        const {data} = await axios.get(`/api/v1/get-category-product-pc?page=${resultpage}`)

        dispatch({
            type: GET_ALL_CATEGORY_PRODUCT_PC_SUCCESS,
            payload: data
        })
    }catch (error) {
        dispatch({
            type: GET_ALL_CATEGORY_PRODUCT_PC_FAIL,
            payload: error.response.data.message
        })

    }
}

export const getNewProductPC = (resultpage) => async (dispatch) => { 
    
    dispatch({type :GET_ALL_NEW_PRODUCT_PC_REQUEST})

    try {
        const {data} = await axios.get(`/api/v1/get-new-product-pc?page=${resultpage}`)

        dispatch({
            type: GET_ALL_NEW_PRODUCT_PC_SUCCESS,
            payload: data
        })
    }catch (error) {
        dispatch({
            type: GET_ALL_NEW_PRODUCT_PC_FAIL,
            payload: error.response.data.message
        })

    }
}
//action for pc/computer ----------pccccccccc---------------------------------


export const getHomeJustForYouPhoneRight = (page) => async (dispatch) => { 
    dispatch({type:GET_ALL_PRODUCT_JUSTFORYOU_PHONE_RIGHT_REQUEST})

    try {
        const {data} = await axios.get(`/api/v1/get-all-product-just-for-you-phone-right?page=${page}`)

        dispatch({
            type: GET_ALL_PRODUCT_JUSTFORYOU_PHONE_RIGHT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type :GET_ALL_PRODUCT_JUSTFORYOU_PHONE_RIGHT_FAIL,
            payload: error.response.data.message
        })
    }

}
export const getProductDitalsIdName = (id, name) => async (dispatch) => {

    dispatch({type: GET_PRODUCT_DETAILS_REQUEST})

    try {
        const {data} = await axios.get(`/api/v1/product-ditals/${id}/${name}`)

        dispatch({
            type:  GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:  GET_PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getProductFlashSalePc = (resultpage) => async (dispatch) => {

    dispatch({type :GET_ALL_PRODUCT_FLASH_SALE_PC_REQUEST})

    try {
        const {data} = await axios.get(`/api/v1/flash-sale/${resultpage}`)

        dispatch({
            type: GET_ALL_PRODUCT_FLASH_SALE_PC_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_PRODUCT_FLASH_SALE_PC_FAIL,
            payload: error.response.data
        })
    }
}

export const getProductFlashSalePcPage = (resultpage) => async (dispatch) => {

    dispatch({type :GET_ALL_PRODUCT_FLASH_SALE_PC_REQUEST})

    try {
        const {data} = await axios.get(`/api/v1/flash-sale-pc-page`)

        dispatch({
            type: GET_ALL_PRODUCT_FLASH_SALE_PC_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_PRODUCT_FLASH_SALE_PC_FAIL,
            payload: error.response.data
        })
    }
}

export const getNewProductRightPhone = (resultpage) => async (dispatch) => { 
    
    dispatch({type :GET_ALL_NEW_PRODUCT_RIGHT_REQUEST})

    try {
        const {data} = await axios.get(`/api/v1/new-product-right?page=${resultpage}`)

        dispatch({
            type: GET_ALL_NEW_PRODUCT_RIGHT_SUCCESS,
            payload: data
        })
    }catch (error) {
        dispatch({
            type: GET_ALL_NEW_PRODUCT_RIGHT_FAIL,
            payload: error.response.data
        })

    }
}

export const getProductFlashSalePhone = (resultpage) => async (dispatch) => {

    dispatch({type :GET_ALL_PRODUCT_FLASH_SALE_PHONE_REQUEST})

    try {
        const {data} = await axios.get(`/api/v1/flash-sale-phone/${resultpage}`)

        dispatch({
            type: GET_ALL_PRODUCT_FLASH_SALE_PHONE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_PRODUCT_FLASH_SALE_PHONE_FAIL,
            payload: error.response.data
        })
    }
}

export const getAllNewLowPricePhonea = (page) => async (dispatch) => { 

    dispatch({type :GET_ALL_LOW_PRICE_PRODUCT_REQUEST})

    try {
        const {data} = await axios.get(`/api/v1/low-price-products?page=${page}`)

        dispatch({
            type: GET_ALL_LOW_PRICE_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_LOW_PRICE_PRODUCT_FAIL,
            payload: error.response.data
        })
    }
}

