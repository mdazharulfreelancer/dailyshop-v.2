import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const TopRankingCard = () => {
  return (
    <>
           <Flex w={'full'} justifyContent={'space-between'} gap={1} alignItems={'center'}>
                    <Text fontSize={{base:'sm', md:'lg'}} fontWeight={500} color={'gray.700'} > #1 </Text>

                    <Box w={{base:20, sm:32}} h={{base:20, sm:32}} pos={'relative'} >
                        <Image w={'full'} h={'full'} alt='name' src='https://static-01.daraz.com.bd/p/688d9bcbac27d661a53cb22d33edd967.jpg_240x240q80.jpg_.webp' />
                     
                    </Box>

                    <VStack alignItems={'start'} spacing={0}>
                        <Box>
                            <Text fontSize={{base:'sm', md:'lg'}} fontWeight={400} color={'gray.700'} > popularity </Text>
                        </Box>
                           <Box>
                            <Text fontSize={{base:'sm', md:'lg'}} fontWeight={400} color={'gray.700'} > score : 4.5 </Text>
                        </Box>
                    </VStack>
                </Flex>
    </>
  )
}

export default TopRankingCard
