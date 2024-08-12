import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const CategoryMobailCard = ({ item}) => {
  return (
   <>
                  <Flex  as={Link} to={item.link} alignItems={'center'} >
                    <VStack alignItems={'center'} spacing={0} justifyContent={'center'} py={2} px={2}  >
                        <Flex w={'52px'} h={'52px'} justifyContent={'center'} alignItems={'center'} >
                        <Box h={'50px'} w={'50px'} borderRadius={'50%'} overflow={'hidden'}>
                            <Image w={'full'} h={'full'} src={item?.img}  alt={item.nameTop}/>
                        </Box>
                        </Flex>
                      <VStack alignItems={'center'} justifyContent={'center'} w={'full'} overflow={"hidden"} spacing={0}>
                      <Text display={'flex'} justifyContent={'center'}  justifyItems={'center'} flexDirection={'wrap'} fontSize={{base:12, md:16}} alignItems={'center'} w={'full'} overflow={"hidden"} >{item?.nameTop} </Text>
                        <Text display={'flex'} justifyContent={'center'}  justifyItems={'center'} flexDirection={'wrap'} fontSize={{base:12, md:16}} alignItems={'center'} w={'full'} overflow={"hidden"} >{item?.nameBottom} </Text>
                      </VStack>
                    </VStack>
                </Flex>
   </>
  )
}

export default CategoryMobailCard
