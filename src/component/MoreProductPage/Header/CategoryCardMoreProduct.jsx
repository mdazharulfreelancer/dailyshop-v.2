import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const CategoryCardMoreProduct = () => {
  return (
   <>
                  <Flex borderRight={'0.5px solid'} borderColor={'gray.200'}  _hover={{color:'red', bg:'gray.500'}} as={Link} to={'/free-delivery'} alignItems={'center'} >
                    <VStack alignItems={'center'} justifyContent={'center'} py={2} px={2} bg={"#ffffff"} w={{base:'125px',md:'160px'}}>
                        <Box  w={{base:"60px",md:"75px"}}>
                            <Image w={'full'} h={'full'} src={"https://gcp-img.slatic.net/lazada/7e7ee075-0a23-4188-85e0-98224d33a2f7_BD-80-80.jpg"} />
                        </Box>
                        <Text display={'flex'} justifyContent={'center'} flexDirection={'wrap'} fontSize={{base:14, md:16}} alignItems={'center'} w={'full'} overflow={"hidden"} >Wholesale </Text>
                    </VStack>
                </Flex>
   </>
  )
}

export default CategoryCardMoreProduct
