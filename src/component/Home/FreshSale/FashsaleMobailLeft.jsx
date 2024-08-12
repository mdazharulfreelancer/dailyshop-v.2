import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductFlashSalePc } from '../../../actions/ProductAction'
import FrashSaleCardLeft from './Freshsalephone/FrashSaleCardLeft'

const FashsaleMobailLeft = () => {

  const dispatch = useDispatch()
  const {FlashSaleProducts,loading,error} = useSelector(state => state.FlashSalePc)


  React.useEffect(() => {
      const resultpage = 3
      dispatch(getProductFlashSalePc(resultpage))
  }, [dispatch])
  return (
    <>
                      {
                            FlashSaleProducts && FlashSaleProducts.map((product,index)=> {
                                return (
                                    <FrashSaleCardLeft key={index} product={product} />
                                )
                            })
                      }
                    
               
    </>
  )
}

export default FashsaleMobailLeft
