import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import TopRankingCard from './TopRankingCard'

const FastCard = () => {
  return (
    <>
     <Flex w={'full'} px={{base:1, sm:3}}>
        <Box w={'full'} >
            <Flex w={'full'} justifyContent={'center'} py={4} borderBottom={'1px solid'} borderColor={'gray.300'} >
                <Text fontSize={{base:'lg', md:'xl'}} fontWeight={600} color={'gray.600'} > Fashon</Text>
            </Flex>

            <VStack w={'full'} py={4} alignItems={'start'} spacing={3}>
              < TopRankingCard />
              < TopRankingCard />
          
            </VStack>
        </Box>
     </Flex>
    </>
  )
}

export default FastCard
