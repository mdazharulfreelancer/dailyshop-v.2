import { CLEAR_ERRORS } from "../constant/ProductConstant";
import { CREATE_USER_FRONTEND_FAIL, CREATE_USER_FRONTEND_REQUEST, CREATE_USER_FRONTEND_SUCCESS } from "../constant/UserConstant";


export const cteateProductreducer = (state = { user : {} },  action) =>{
    switch (action.type) {
        case CREATE_USER_FRONTEND_REQUEST:      
        return {
            ...state,
            loading:true,
        }
        case CREATE_USER_FRONTEND_SUCCESS:           
        return {
            loading:false,
            success: action.payload.success,
            user: action.payload.user,
        }

        case CREATE_USER_FRONTEND_FAIL:           
        return {
            ...state,
            loading: false,
            error: action.payload
        }
  


        case CLEAR_ERRORS:
            return {
              ...state,
              error: null,
            };
           
    
        default:
           return state
    }
}