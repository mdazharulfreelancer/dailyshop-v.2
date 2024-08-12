import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const CategoryCard = ({item}) => {
  return (
   <>
                  <Flex borderRight={'0.5px solid'}bg={"#ffffff"} borderColor={'gray.200'}  _hover={{color:'red', boxShadow:'2xl'}} as={Link} to={item.link} alignItems={'center'} >
                    <VStack alignItems={'center'} justifyContent={'center'} py={2} px={2}  w={{base:'110px',md:'155px'}}>
                        <Box  w={{base:"60px",md:"75px"}}>
                            <Image w={'full'} h={'full'} src={item.img} alt={item.nameTop} />
                        </Box>
                        <VStack alignItems={'center'} justifyContent={'center'} w={'full'} overflow={"hidden"} spacing={0}>
                      <Text display={'flex'} justifyContent={'center'}  justifyItems={'center'} flexDirection={'wrap'} fontSize='14px' lineHeight={'normal'} alignItems={'center'} w={'full'} overflow={"hidden"} >{item?.nameTop} {item?.nameBottom} </Text>
                        <Text display={'flex'} justifyContent={'center'}  justifyItems={'center'} flexDirection={'wrap'} fontSize={{ md:16}} alignItems={'center'} w={'full'} overflow={"hidden"} > </Text>
                      </VStack>
                    </VStack>
                </Flex>
   </>
  )
}

export default CategoryCard
