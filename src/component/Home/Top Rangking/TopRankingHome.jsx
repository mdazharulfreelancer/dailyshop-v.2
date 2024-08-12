import { Box, Container, VStack } from '@chakra-ui/react'
import React from 'react'
import TopRankingHeader from './TopRankingHeader'
import TopRankingPage from './TopRankingPage'

const TopRankingHome = () => {
  return (
    <>
    <Container maxW={'container.xl'} px={{base:'0.4rem', sm:'1rem', md:'1rem',lg:'1rem'}}>
        <VStack alignItems={"start"} w={"full"}>
              <Box w={'full'}>
                <TopRankingHeader />
              </Box>

                 <Box w={'full'}>
                 <TopRankingPage />
              </Box>
        </VStack>
    </Container>
    </>
  )
}

export default TopRankingHome
