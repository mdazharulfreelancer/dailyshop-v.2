import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BodyMoreProductCard = () => {
    const [isHovering, setIsHovering] = useState(false)
  return (
        <>
             <Flex  bg={'white'} w={{base:'48.5%', sm:'32%',md:'24%', lg:'19%'}}   className='cardshop'>
                        <VStack     as={Link} to={'/ditals-product/asdsad'}   pb={3} overflow={'hidden'} borderRadius={2} alignItems={'start'}>
                            <Box onMouseOver={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)} pos={'relative'} w={'full'}>
                                <Image zIndex={2} _hover={{transform:'scale(1.02)', backdropFilter:'contrast(40%)', background:'gray.500'}} transition={'0.5s'} w={'full'} src={'https://static-01.daraz.com.bd/p/b36750f235a4f0422f566c074d901ad1.jpg_300x0q75.webp'} />

                            {
                                isHovering && (
                                    <Box pos={'absolute'} top={0} left={0} w={'full'} h={'full'} bg={'rgba(0, 0, 0, 0.151)'}>
                                    </Box>
                                )
                            }

                            <Box pos={'absolute'} top={0} right={0}  zIndex={3} display={'flex'} bg={'blue.600'} px={2} borderTopLeftRadius={16} borderBottomLeftRadius ={16} >
                                <Text fontSize={'sm'} fontWeight={500} color={'white'}>20%</Text>
                            </Box>
                            </Box>

                            <VStack alignItems={'start'} w={'full'} px={3}>
                            <Box>
                                <Text fontSize={'sm'} fontWeight={'sm'}>Pure and Natural Dried Fried Peanut with Sea </Text>
                            </Box>

                                <VStack w={'full'} alignItems={'start'} spacing={0} gap={0}>
                                    <Box>
                                    <Text fontSize={18} color={'orange.500'}>
                                    ৳ 1753
                                    </Text>
                                </Box>

                                <Flex w={'full'} gap={2}>
                                    <Text fontSize={'sm'} color={'gray.500'} textDecoration={'line-through'}> ৳ 200</Text>

            
                                    
                                </Flex>

 
                                </VStack>
                            </VStack>
                        </VStack>
                    </Flex>
        </>
  )
}

export default BodyMoreProductCard

