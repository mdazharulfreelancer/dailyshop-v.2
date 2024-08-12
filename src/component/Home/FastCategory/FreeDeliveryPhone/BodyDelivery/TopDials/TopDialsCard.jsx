import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TopDialsCard = () => {
    const [isHovering, setIsHovering] = useState(false)
  return (
        <>
             <Flex  bg={'white'} w={{base:'49%', sm:'32.5%',md:'25.5%', lg:'16.5%'}}   className='cardshop' >
                        <VStack     as={Link} to={'/ditals-product/asdsad'}   pb={3} overflow={'hidden'} borderRadius={2} alignItems={'start'}>
                            <Box display={'flex'} overflow={'hidden'} h={'164px'}  onMouseOver={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)} pos={'relative'} w={'full'}>
                                <Image  zIndex={2} _hover={{transform:'scale(1.02)', backdropFilter:'contrast(40%)', background:'gray.500'}} transition={'0.5s'} w={'full'} src={'https://static-01.daraz.com.bd/p/d7ec1a95090b0586a31cbe0e8b06d1ff.jpg_200x200q80-product.jpg_.webp'} />

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

                                <Flex w={'full'} justifyContent={'center'} alignItems={'center'}>
                                    <Button w={'full'} bg={'blue.500'} color={'whiteAlpha.800'} _hover={{bg:'blue.500'}} variant={'outline'} size={'sm'} h={7}>Shop now</Button>
                                </Flex>
                                </VStack>
                            </VStack>
                        </VStack>
                    </Flex>
        </>
  )
}

export default TopDialsCard


