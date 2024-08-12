import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const CategoryCards = () => {
  return (
   <>
                  <Flex bg={"#ffffff"}  w={{base:'30.5%',md:'123px'}}  borderRight={'0.5px solid'} borderColor={'gray.200'}   as={Link} to={'/free-delivery'} alignItems={'center'} >
                    <VStack w={'full'}  alignItems={'center'} justifyContent={'center'} py={2} px={2} >
                        <Box  w={{base:"60px",md:"75px"}}>
                            <Image w={'full'} h={'full'} src={"https://static-01.daraz.com.bd/p/51cbe82a2560e1c39f3b11ceb0ef9098.jpg_300x0q75.webp"} />
                        </Box>
                        <Text display={'flex'} justifyContent={'center'}  fontSize={{base:14, md:16}} alignItems={'center'} w={'full'} overflow={"hidden"} >Wholesale </Text>
                    </VStack>
                </Flex>
   </>
  )
}

export default CategoryCards

