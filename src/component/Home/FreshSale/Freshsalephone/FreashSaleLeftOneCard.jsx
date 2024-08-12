import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProductFlashSalePhone } from '../../../../actions/ProductAction'

const FreashSaleLeftOneCard = () => {
    const dispatch = useDispatch()
    const {FlashSaleProductsphone,loading,error} = useSelector(state => state.FlashSalePhone)

 
    React.useEffect(() => { 
        const resultpage = 1
        dispatch(getProductFlashSalePhone(resultpage))
    }, [dispatch])

  return (
    <>
    {
        FlashSaleProductsphone && FlashSaleProductsphone.map((product,index)=> {
            return (
                <VStack key={index} as={Link} to={`/ditals-product/${product._id}/${product?.productname}`}      pb={3} overflow={'hidden'} borderRadius={2} w={'190px'} alignItems={'start'}>
                {
                    product?.productimage && product?.productimage.map((image, index)=>{
                        return(
                            index === 0 && (
                                <Box key={index} w={'full'} h={'200px'}>
                                <Image w={'full'} h={'100%'} src={'https://static-01.daraz.com.bd/p/aeb32271f5dce3d189a35c8e5b3a7454.jpg_200x200q80-product.jpg_.webp'} alt={index}/>
                            </Box>
                            )
                       
                        )
                     })
                }
                 

                    <VStack alignItems={'start'} w={'full'} px={3} gap={'2px'}>
                    <Box>
                        <Text fontSize={'sm'} fontWeight={500} className='fontstyle' >{product?.productname} </Text>
                    </Box>

                        <VStack alignItems={'start'} spacing={0} gap={0}>
                            <Box>
                            <Text fontSize={18} color={'orange.500'}>
                            ৳ {product?.currentprice?.length > 5 ? product?.currentprice?.slice(0,5) : product.currentprice}
                            </Text>
                        </Box>

                        <Flex w={'full'} gap={2}>
                            <Text fontSize={'sm'} color={'gray.500'} textDecoration={'line-through'}> ৳ {product?.regularprice?.length > 5 ? product?.regularprice?.slice(0,5) : product.regularprice}</Text>

                            <Text fontSize={'sm'} color={'gray.700'} > {Math.floor(((product?.regularprice - product?.currentprice)/product?.regularprice)*100)}%</Text>
                            
                        </Flex>
                        </VStack>
                    </VStack>
                </VStack>
            )
        })
    }
    </>
  )
    
    
}

export default FreashSaleLeftOneCard
