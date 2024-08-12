import { Container, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductFlashSalePhone } from '../../../../actions/ProductAction'
import FreshSaleCategorycard from './FreshSaleCategorycard'

const FreshSaleCategoryBody = () => {
  const dispatch = useDispatch()
  const {FlashSaleProductsphone,loading,error} = useSelector(state => state.FlashSalePhone)


  React.useEffect(() => { 
      const resultpage = 15
      dispatch(getProductFlashSalePhone(resultpage))
  }, [dispatch])
  return (
    <Container  maxW={'container.xl'} p={0}>
        <VStack alignItems={'start'}>
            {
                <>
                {
                    FlashSaleProductsphone && FlashSaleProductsphone.map((product,index)=> {
                        return (
                            <FreshSaleCategorycard key={index} product={product} />
                        )
                    })
                }
           
       
                
                </>

             

            }

        </VStack>
    </Container>
  )
}

export default FreshSaleCategoryBody
