import axios from "axios";
import { CLEAR_ERRORS } from "../constant/ProductConstant";
import { CREATE_USER_FRONTEND_FAIL, CREATE_USER_FRONTEND_REQUEST, CREATE_USER_FRONTEND_SUCCESS } from "../constant/UserConstant";

export const createUserFrontend = (user) =>async(dispatch) => {
    dispatch({type : CREATE_USER_FRONTEND_REQUEST})

    const config = ({
        headers: {
            "Content-Type": "application/json"
        }
    })
    try{

        const {data} = await axios.post(`/api/v1/regester`,user,config )
        dispatch({type:CREATE_USER_FRONTEND_SUCCESS, payload: data})

    }catch {
        dispatch({type:CREATE_USER_FRONTEND_FAIL, payload: error.response.data.message})
    }

}
export const ClearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}