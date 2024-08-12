import { CLEAR_ERRORS, GET_ALL_CATEGORY_PRODUCT_FAIL, GET_ALL_CATEGORY_PRODUCT_PC_FAIL, GET_ALL_CATEGORY_PRODUCT_PC_REQUEST, GET_ALL_CATEGORY_PRODUCT_PC_SUCCESS, GET_ALL_CATEGORY_PRODUCT_REQUEST, GET_ALL_CATEGORY_PRODUCT_SUCCESS, GET_ALL_LOW_PRICE_PRODUCT_FAIL, GET_ALL_LOW_PRICE_PRODUCT_REQUEST, GET_ALL_LOW_PRICE_PRODUCT_RIGHT_FAIL, GET_ALL_LOW_PRICE_PRODUCT_RIGHT_REQUEST, GET_ALL_LOW_PRICE_PRODUCT_RIGHT_SUCCESS, GET_ALL_LOW_PRICE_PRODUCT_SUCCESS, GET_ALL_NEW_PRODUCT_FAIL, GET_ALL_NEW_PRODUCT_PC_FAIL, GET_ALL_NEW_PRODUCT_PC_REQUEST, GET_ALL_NEW_PRODUCT_PC_SUCCESS, GET_ALL_NEW_PRODUCT_REQUEST, GET_ALL_NEW_PRODUCT_RIGHT_FAIL, GET_ALL_NEW_PRODUCT_RIGHT_REQUEST, GET_ALL_NEW_PRODUCT_RIGHT_SUCCESS, GET_ALL_NEW_PRODUCT_SUCCESS, GET_ALL_PRODUCT_FLASH_SALE_PC_FAIL, GET_ALL_PRODUCT_FLASH_SALE_PC_REQUEST, GET_ALL_PRODUCT_FLASH_SALE_PC_SUCCESS, GET_ALL_PRODUCT_FLASH_SALE_PHONE_FAIL, GET_ALL_PRODUCT_FLASH_SALE_PHONE_REQUEST, GET_ALL_PRODUCT_FLASH_SALE_PHONE_SUCCESS, GET_ALL_PRODUCT_HOME_JUST_FOR_YOU_PC_FAIL, GET_ALL_PRODUCT_HOME_JUST_FOR_YOU_PC_REQUEST, GET_ALL_PRODUCT_HOME_JUST_FOR_YOU_PC_SUCCESS, GET_ALL_PRODUCT_JUSTFORYOU_PHONE_LEFT_FAIL, GET_ALL_PRODUCT_JUSTFORYOU_PHONE_LEFT_REQUEST, GET_ALL_PRODUCT_JUSTFORYOU_PHONE_LEFT_SUCCESS, GET_ALL_PRODUCT_JUSTFORYOU_PHONE_RIGHT_FAIL, GET_ALL_PRODUCT_JUSTFORYOU_PHONE_RIGHT_REQUEST, GET_ALL_PRODUCT_JUSTFORYOU_PHONE_RIGHT_SUCCESS, GET_ALL_PRODUCT_USER_FAIL, GET_ALL_PRODUCT_USER_REQUEST, GET_ALL_PRODUCT_USER_SUCCESS, GET_JUST_FOR_PRODUCT_FAIL, GET_JUST_FOR_PRODUCT_REQUEST, GET_JUST_FOR_PRODUCT_SUCCESS, GET_PRODUCT_DETAILS_FAIL, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_FREE_DELEVARI_FAIL, GET_PRODUCT_FREE_DELEVARI_REQUEST, GET_PRODUCT_FREE_DELEVARI_SUCCESS } from "../constant/ProductConstant"


export const getAllProductUser = (state = {product : []}, action) =>{
    switch(action.type){
        case GET_ALL_PRODUCT_USER_REQUEST :
            
        return{
            loading : true,
            ...state
        }

        case GET_ALL_PRODUCT_USER_SUCCESS : 
        return {
            loading : false,
            product : action.payload
        }

        case GET_ALL_PRODUCT_USER_FAIL :
            return {
                loading :false,
                error : action.payload,

            }
        case  CLEAR_ERRORS : {
            return {
                ...state,
                error : null
            }
        }

        default : 
        return state
    }
}

//---------------phone
export const getAllProductHomeJustForYouPhoneLeft = (state = {HomeForYouProPhoneleft : []}, action) =>{
    switch(action.type){
        case GET_ALL_PRODUCT_JUSTFORYOU_PHONE_LEFT_REQUEST :
            
        return{
            loading : true,
            ...state
        }

        case GET_ALL_PRODUCT_JUSTFORYOU_PHONE_LEFT_SUCCESS : 
        return {
            loading : false,
            HomeForYouProPhoneleft : action.payload.HomeForYouProPhoneleft,
            filteredProductsCountJustforYou : action.payload.filteredProductsCountJustforYou,
            countProduct: action.payload.countProduct,
            success : true,
            resultpage : action.payload.resultpage,
            pagecountproduct : action.payload.pagecountproduct
    
      
        }

        case GET_ALL_PRODUCT_JUSTFORYOU_PHONE_LEFT_FAIL :
            return {
                loading :false,
                error : action.payload,

            }
        case  CLEAR_ERRORS : {
            return {
                ...state,
                error : null
            }
        }

        default : 
        return state
 }
}
export const getAllNewProductPhone = (state = {newproducts : []}, action) =>{ 
    switch(action.type){
        case GET_ALL_NEW_PRODUCT_REQUEST :
            
        return{
            loading : true,
            ...state
        }

        case GET_ALL_NEW_PRODUCT_SUCCESS : 
        return {
            loading : false,
            newproducts : action.payload.newproducts,
            filteredProductsCountNew : action.payload.filteredProductsCountNew,
            countProduct: action.payload.countProduct,
            success : true,
            pagecountproduct : action.payload.pagecountproduct,
            resultpage : action.payload.resultpage,
        }

        case GET_ALL_NEW_PRODUCT_FAIL :
            return {
                loading :false,
                error : action.payload,

            }
        case  CLEAR_ERRORS : {
            return {
                ...state,
                error : null
            }
        }

        default : 
        return state
    }

}

export const getAllCategoryProductPhone = (state = {categoryroducts : []}, action) =>{ 
    switch(action.type){
        case GET_ALL_CATEGORY_PRODUCT_REQUEST :
            
        return{
            loading : true,
            ...state
        }

        case GET_ALL_CATEGORY_PRODUCT_SUCCESS : 
        return {
            loading : false,
            categoryroducts : action.payload.categoryroducts,
            filteredProductsCountNew : action.payload.filteredProductsCountNew,
            countProduct: action.payload.countProduct,
            success : true,
            pagecountproduct : action.payload.pagecountproduct,
            resultpage : action.payload.resultpage,
        }

        case GET_ALL_CATEGORY_PRODUCT_FAIL :
            return {
                loading :false,
                error : action.payload,

            }
        case  CLEAR_ERRORS : {
            return {
                ...state,
                error : null
            }
        }

        default : 
        return state
    }

}
export const getAllLowPriceProductPhone = (state = {everylowproduct : []}, action) =>{ 
    
    switch(action.type){
        case GET_ALL_LOW_PRICE_PRODUCT_RIGHT_REQUEST :
            
        return{
            loading : true,
            ...state
        }

        case GET_ALL_LOW_PRICE_PRODUCT_RIGHT_SUCCESS : 
        return {
            loading : false,
            everylowproduct : action.payload.everylowproduct,
            countProduct: action.payload.countProduct,
            success : true,
            pagecountproduct : action.payload.pagecountproduct,
            resultpage : action.payload.resultpage,
        }

        case GET_ALL_LOW_PRICE_PRODUCT_RIGHT_FAIL :
            return {
                loading :false,
                error : action.payload,

            }
        case  CLEAR_ERRORS : {
            return {
                ...state,
                error : null
            }
        }
        default : 
        return state
    }
}
export const getAllDilevariProductPhone = (state = {freeproducts : []}, action) =>{ 
    
    switch(action.type){
        case GET_PRODUCT_FREE_DELEVARI_REQUEST :
            
        return{
            loading : true,
            ...state
        }

        case GET_PRODUCT_FREE_DELEVARI_SUCCESS : 
        return {
            loading : false,
            freeproducts : action.payload.freeproducts,
            countProduct: action.payload.countProduct,
            success : true,
            pagecountproduct : action.payload.pagecountproduct,
            resultpage : action.payload.resultpage,
        }

        case GET_PRODUCT_FREE_DELEVARI_FAIL :
            return {
                loading :false,
                error : action.payload,

            }
        case  CLEAR_ERRORS : {
            return {
                ...state,
                error : null
            }
        }
        default : 
        return state
    }
}

//phone-----------------------

//Pc for product----------------------------------------
export const getAllProductHomeJustForYouPcProduct = (state = {HomeForYouProductPC : []}, action) =>{
    switch(action.type){
        case GET_JUST_FOR_PRODUCT_REQUEST :
            
        return{
            loading : true,
            ...state
        }

        case GET_JUST_FOR_PRODUCT_SUCCESS : 
        return {
            loading : false,
            HomeForYouProductPC : action.payload.HomeForYouProductPC,
            filteredProductsCountJustforYou : action.payload.filteredProductsCountJustforYou,
            countProduct: action.payload.countProduct,
            success : true,
            resultpage : action.payload.resultpage,
            pagecountproduct : action.payload.pagecountproduct,
            defatPage : action.payload.defatPage
    
      
        }

        case GET_JUST_FOR_PRODUCT_FAIL :
            return {
                loading :false,
                error : action.payload,

            }
        case  CLEAR_ERRORS : {
            return {
                ...state,
                error : null
            }
        }

        default : 
        return state
 }
}
export const getAllCategoryProductpc= (state = { categoryroductpc : []}, action) =>{ 
    switch(action.type){
        case GET_ALL_CATEGORY_PRODUCT_PC_REQUEST :
            
        return{
            loading : true,
            ...state
        }

        case GET_ALL_CATEGORY_PRODUCT_PC_SUCCESS : 
        return {
            loading : false,
            categoryroductpc : action.payload.categoryroductpc,
            filteredProductsCountNew : action.payload.filteredProductsCountNew,
            countProduct: action.payload.countProduct,
            success : true,
            pagecountproduct : action.payload.pagecountproduct,
            resultpage : action.payload.resultpage,
        }

        case GET_ALL_CATEGORY_PRODUCT_PC_FAIL :
            return {
                loading :false,
                error : action.payload,

            }
        case  CLEAR_ERRORS : {
            return {
                ...state,
                error : null
            }
        }

        default : 
        return state
    }

}

export const getAllNewProductPC= (state = {newproducts : []}, action) =>{ 
    switch(action.type){
        case GET_ALL_NEW_PRODUCT_PC_REQUEST :
            
        return{
            loading : true,
            ...state
        }

        case GET_ALL_NEW_PRODUCT_PC_SUCCESS : 
        return {
            loading : false,
            newproducts : action.payload.newproducts,
            filteredProductsCountNew : action.payload.filteredProductsCountNew,
            countProduct: action.payload.countProduct,
            success : true,
            pagecountproduct : action.payload.pagecountproduct,
            resultpage : action.payload.resultpage,
        }

        case GET_ALL_NEW_PRODUCT_PC_FAIL :
            return {
                loading :false,
                error : action.payload,

            }
        case  CLEAR_ERRORS : {
            return {
                ...state,
                error : null
            }
        }

        default : 
        return state
    }

}
//Pc for product----------------------------------------


export const getAllProductHomeJustForYouPhoneRight = (state = {HomeJustForYouProducts : []}, action) =>{
    switch(action.type){
        case GET_ALL_PRODUCT_JUSTFORYOU_PHONE_RIGHT_REQUEST :
        return{
            loading : true,
            ...state
        }

        case GET_ALL_PRODUCT_JUSTFORYOU_PHONE_RIGHT_SUCCESS : 
        return {
            loading : false,
            HomeJustForYouProducts : action.payload.HomeJustForYouProducts,
            filteredProductsCountJustforYou : action.payload.filteredProductsCountJustforYou,
            countProduct: action.payload.countProduct,
            success : true,
            resultpage : action.payload.resultpage,
            pagelength : action.payload.pagelength,
            pagelentright : action.payload.pagelentright,
        }

        case GET_ALL_PRODUCT_JUSTFORYOU_PHONE_RIGHT_FAIL :
            return {
                loading :false,
                error : action.payload,

            }
        case  CLEAR_ERRORS : {
            return {
                ...state,
                error : null
            }
        }

        default : 
        return state
    }

}

export const getAllProductHomeJustForYouPc = (state = {HomeJustForYouProducts : []}, action) =>{ 
    switch(action.type){
        case GET_ALL_PRODUCT_HOME_JUST_FOR_YOU_PC_REQUEST :
            
        return{
            loading : true,
            ...state
        }

        case GET_ALL_PRODUCT_HOME_JUST_FOR_YOU_PC_SUCCESS : 
        return {
            loading : false,
            HomeJustForYouProducts : action.payload.HomeJustForYouProducts,
            filteredProductsCountJustforYou : action.payload.filteredProductsCountJustforYou,
            countProduct: action.payload.countProduct,
            success : true,
            resultpage : action.payload.resultpage,
            pageLengthpc : action.payload.pageLengthpc
        }

        case GET_ALL_PRODUCT_HOME_JUST_FOR_YOU_PC_FAIL :
            return {
                loading :false,
                error : action.payload,

            }
        case  CLEAR_ERRORS : {
            return {
                ...state,
                error : null
            }
        }

        default : 
        return state
    }
}


export const getAllProductFlashSalePc = (state = {FlashSaleProducts : []}, action) =>{

    switch(action.type){
        case GET_ALL_PRODUCT_FLASH_SALE_PC_REQUEST :
            
        return{
            loading : true,
            ...state
        }

        case GET_ALL_PRODUCT_FLASH_SALE_PC_SUCCESS : 
        return {
            loading : false,
            FlashSaleProducts : action.payload.FlashSaleProducts,
            filteredProductsCountFlashSale : action.payload.filteredProductsCountFlashSale,
            countProduct: action.payload.countProduct,
            success : true
        }

        case GET_ALL_PRODUCT_FLASH_SALE_PC_FAIL :
            return {
                loading :false,
                error : action.payload,

            }
        case  CLEAR_ERRORS : {
            return {
                ...state,
                error : null
            }
        }

        default : 
        return state
    }

}
export const getAllProductFlashSalePcpage = (state = {FlashSaleProducts : []}, action) =>{

    switch(action.type){
        case GET_ALL_PRODUCT_FLASH_SALE_PC_REQUEST :
            
        return{
            loading : true,
            ...state
        }

        case GET_ALL_PRODUCT_FLASH_SALE_PC_SUCCESS : 
        return {
            loading : false,
            FlashSaleProducts : action.payload.FlashSaleProducts,
            filteredProductsCountFlashSale : action.payload.filteredProductsCountFlashSale,
            countProduct: action.payload.countProduct,
            success : true,
            pagecount : action.payload.pagecount,
            resultpage : action.payload.resultpage,
        }

        case GET_ALL_PRODUCT_FLASH_SALE_PC_FAIL :
            return {
                loading :false,
                error : action.payload,

            }
        case  CLEAR_ERRORS : {
            return {
                ...state,
                error : null
            }
        }

        default : 
        return state
    }

}

export const getAllNewProductPcRight = (state = {newproductsright : []}, action) =>{

    switch(action.type){
        case GET_ALL_NEW_PRODUCT_RIGHT_REQUEST :
            
        return{
            loading : true,
            ...state
        }

        case GET_ALL_NEW_PRODUCT_RIGHT_SUCCESS : 
        return {
            loading : false,
            newproductsright : action.payload.newproductsright,
            filteredProductsCountNew : action.payload.filteredProductsCountNew,
            countProduct: action.payload.countProduct,
            success : true,
            pagecount : action.payload.pagecount,
            resultpage : action.payload.resultpage,
        }

        case GET_ALL_NEW_PRODUCT_RIGHT_FAIL :
            return {
                loading :false,
                error : action.payload,

            }
        case  CLEAR_ERRORS : {
            return {
                ...state,
                error : null
            }
        }
        default : 
        return state
    }
}

export const getAllProductFlashSalePhoneReducer = (state = {FlashSaleProductsphone : []}, action) =>{

    switch(action.type){
        case GET_ALL_PRODUCT_FLASH_SALE_PHONE_REQUEST :
            
        return{
            loading : true,
            ...state
        }

        case GET_ALL_PRODUCT_FLASH_SALE_PHONE_SUCCESS : 
        return {
            loading : false,
            FlashSaleProductsphone : action.payload.FlashSaleProductsphone,
            filteredProductsCountFlashSale : action.payload.filteredProductsCountFlashSale,
            countProduct: action.payload.countProduct,
            success : true
        }

        case GET_ALL_PRODUCT_FLASH_SALE_PHONE_FAIL :
            return {
                loading :false,
                error : action.payload,

            }
        case  CLEAR_ERRORS : {
            return {
                ...state,
                error : null
            }
        }

        default : 
        return state
    }

}
export const getProductDitalsIdName = (state = {ProductDitalsname : {}}, action) =>{

    switch(action.type){
        case GET_PRODUCT_DETAILS_REQUEST :
            
        return{
            loading : true,
            ...state
        }

        case GET_PRODUCT_DETAILS_SUCCESS : 
        return {
            loading : false,
            ProductDitalsname : action.payload.ProductDitalsname
        }

        case GET_PRODUCT_DETAILS_FAIL :
            return {
                loading :false,
                error : action.payload,

            }
        case  CLEAR_ERRORS : {
            return {
                ...state,
                error : null
            }
        }

        default : 
        return state
    }
}

export const getAllLowPriceProductPhonea = (state = {lowpriceproductsleft : []}, action) =>{ 

    switch(action.type){
        case GET_ALL_LOW_PRICE_PRODUCT_REQUEST :
            
        return{
            loading : true,
            ...state
        }

        case GET_ALL_LOW_PRICE_PRODUCT_SUCCESS : 
        return {
            loading : false,
            lowpriceproductsleft : action.payload.lowpriceproductsleft,
            filteredProductsCountLowPrice : action.payload.filteredProductsCountLowPrice,
            countProduct: action.payload.countProduct,
            success : true,
            lowestproductlength : action.payload.lowestproductlength,
            reslutLowPriceLength : action.payload.reslutLowPriceLength,
            pagelength : action.payload.pagelength,
            resultpage : action.payload.resultpage,
        }

        case GET_ALL_LOW_PRICE_PRODUCT_FAIL :
            return {
                loading :false,
                error : action.payload,

            }
        case  CLEAR_ERRORS : {
            return {
                ...state,
                error : null
            }
        }
        default : 
        return state
    }
}

