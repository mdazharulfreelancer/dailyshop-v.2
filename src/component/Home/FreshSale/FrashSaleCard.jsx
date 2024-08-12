import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const FrashSaleCard = ({product}) => {
  return (
        <>
             <Flex bg={'white'}  className='cardshop'>
                        <VStack  as={Link} to={`/ditals-product/${product._id}/${product?.productname}`}    _hover={{shadow :'2xl'}}   pb={3} overflow={'hidden'} borderRadius={2} w={'205px'} alignItems={'start'}>
                        {
                            product?.productimage && product?.productimage.map((image, index)=>{
                                return(
                                    index === 0 && (
                                        <Box key={index} w={'full'} h={'180px'}>
                                        <Image w={'full'} h={'100%'} src={image.url} />
                                    </Box>
                                    )
                               
                                )
                             })
                        }
                         

                            <VStack alignItems={'start'} w={'full'} gap={'2px'} px={3}>
                            <Box>
                                <Text fontSize={'14px'}className='fontstyle'  fontWeight={'500'} color={'gray.700'}>{product?.productname} </Text>
                            </Box>

                                <VStack alignItems={'start'} spacing={0} gap={0}>
                                    <Box>
                                    <Text fontSize={17} fontWeight={500} color={'orange.500'}>
                                    ৳ {product?.currentprice?.length > 5 ? product?.currentprice?.slice(0,5) : product.currentprice}
                                    </Text>
                                </Box>

                                <Flex w={'full'} gap={2}>
                                    <Text fontSize={'13px'}fontWeight={500} color={'gray.500'} textDecoration={'line-through'}> ৳ {product?.regularprice?.length > 5 ? product?.regularprice?.slice(0,5) : product.regularprice}</Text>

                                    <Text fontSize={'sm'} color={'gray.700'} > {Math.floor(((product?.regularprice - product?.currentprice)/product?.regularprice)*100)}%</Text>
                                    
                                </Flex>
                                </VStack>
                            </VStack>
                        </VStack>
                    </Flex>
        </>
  )
}

export default FrashSaleCard
