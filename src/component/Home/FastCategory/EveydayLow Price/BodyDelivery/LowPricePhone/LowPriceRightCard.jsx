import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LowPriceRightCard = ({product, index}) => {
    const [isHovering, setIsHovering] = useState(true)
  return (
        <>
             <Flex   bg={'white'}borderRadius={6} overflow={'hidden'}  w={{base:'100%', sm:'32.5%',md:'24.5%', lg:'16.5%'}}   className='cardshop'>
                        <VStack     as={Link} to={`/ditals-product/${product._id}/${product?.productname}`}   pb={3} overflow={'hidden'} borderRadius={2} alignItems={'start'}>
                            <Box  pos={'relative'} w={'full'} h={{base:'160px',sm:'205px'}}>

                            {
                            product?.productimage && product?.productimage.map((image, index)=>{
                                return(
                                    index === 0 && (
                                      
                                     
                                <Image key={index} zIndex={2} w={'full'} h={'full'} _hover={{transform:'scale(1.02)', backdropFilter:'contrast(40%)', background:'gray.500'}} transition={'0.5s'} src={image.url} />
                                  
                                    )
                               
                                )
                             })
                        }
                         


                            {
                                isHovering && (
                                    <Box pos={'absolute'} top={0} left={0} w={'full'} h={'full'} bg={'rgba(0, 0, 0, 0.151)'}>
                                    </Box>
                                )
                            }

                        <Box pos={'absolute'} top={'4px'} right={'-45px'}  zIndex={0} display={'flex'} w={'128px'}  px={2}borderTopLeftRadius={16} borderBottomLeftRadius ={16} >
                                <Image src='https://res.cloudinary.com/daxvmjaff/image/upload/v1705224384/free_1_yn1i49.png' alt='image' />
                                {/* <Text fontSize={'sm'} fontWeight={500} color={'white'}>20%</Text> */}
                            </Box>

                            <Box pos={'absolute'} bottom={'-1px'} left={'-18px'}  zIndex={0} display={'flex'} w={'80px'}  px={2}borderTopLeftRadius={16} borderBottomLeftRadius ={16} >
                                <Image  src='https://res.cloudinary.com/daxvmjaff/image/upload/v1705221016/free_wgazca.png' alt='image' />
                                {/* <Text fontSize={'sm'} fontWeight={500} color={'white'}>20%</Text> */}
                            </Box>
                      
                            </Box>

                            <VStack alignItems={'start'} w={'full'} px={3}>
                            <Box>
                                <Text fontSize={'sm'} fontWeight={'sm'}>{product?.productname?.length > 30 ? product.productname.slice(0,30)+'...' : product.productname} </Text>
                            </Box>

                                <VStack w={'full'} alignItems={'start'} spacing={1} >
                                {
                                product?.freedalivary === 'no' &&(
                                    <Flex  w={'full'} gap={1}  >

                                    <Box fontSize={10} pos={'relative'} border={'1px solid'}borderColor={'blue.500'} px={2}py={0} color={'blue.500'}display={product?.freedalivary === 'no' ?'block':'none'} overflow={'hidden'} borderRadius={2} > <Text>{product?.freedalivary === 'no' ? 'Free Delivery' : ''}</Text> </Box>
    
                                        <Box display={product?.freedalivary === 'yes' ?'block':'none'} fontSize={10}pos={'relative'} border={'1px solid'}borderColor={'red.700'} px={2}py={0} color={'red.500'} textShadow={'md'} overflow={'hidden'} borderRadius={2} > <Text>1.2x coins</Text> </Box>
                                        
                                    </Flex>
                                )
                            }
                              
                                <VStack alignItems={'start'} spacing={0} gap={0}>
                                <Flex w={'full'} gap={2} alignItems={'center'}>
                                    <Box>
                                    <Text fontSize={16} fontWeight={500} color={'orange.500'}>
                                    ৳ {product.currentprice}
                                    </Text>
                                </Box>

                               
                                    <Text fontSize={13} color={'gray.500'} textDecoration={'line-through'}> ৳ {product?.regularprice}</Text>                         
                                </Flex>
                                </VStack>
                         

                                <Flex w={'full'} justifyContent={'center'} alignItems={'center'}>
                                    <Button w={'full'}  bg={'blue.500'} color={'whiteAlpha.800'} _hover={{bg:'blue.500'}} variant={'outline'} size={'sm'} h={7}>Shop now</Button>
                                </Flex>
                                </VStack>
                            </VStack>
                        </VStack>
                    </Flex>
        </>
  )
}

export default LowPriceRightCard






