import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const FrashSaleCardLeft = ({product}) => {
  return (
    <VStack alignItems={'start'} spacing={1}>
                            <Flex w={'full'} px={2}>
               
                                {
                            product?.productimage && product?.productimage.map((image, index)=>{
                                return(
                                    index === 0 && (
                                        <Box key={index} w={'50px'}>
                                        <Image  src={image.url} alt='flash-sale'/>
                                    </Box>
                                    )
                               
                                )
                             })
                        }

                                <Flex>
                                    <VStack px={1} alignItems={'start'} spacing={1}>
                                    <Box>
                                    <Text fontSize={16} color={'orange.500'}>
                                            ৳ {product?.currentprice?.length > 5 ? product?.currentprice?.slice(0,5) : product.currentprice}
                                            </Text>
                                    </Box>

                            
                             <Flex w={'full'} gap={1}>
                                    <Text fontSize={12} color={'gray.500'} textDecoration={'line-through'}> ৳ {product?.regularprice?.length > 5 ? product?.regularprice?.slice(0,5) : product.regularprice} </Text>

                                    <Text fontSize={12} color={'gray.700'} > {Math.floor(((product?.regularprice - product?.currentprice)/product?.regularprice)*100)}%</Text>
                                    
                                </Flex>
                                
                                    </VStack>
                                </Flex>
                            </Flex>
                        </VStack>
  )
}

export default FrashSaleCardLeft
