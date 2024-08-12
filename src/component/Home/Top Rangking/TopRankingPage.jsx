import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import FastCard from './Card/FastCard'
import PageHeader from './PageHeader'

const TopRankingPage = () => {
  return (
   <>
    <Box w={'full'}  bg={{base:'blue.500', md:'#ffffff'}} px={4} py={3}>
        <PageHeader />
    </Box>

    <Box w={'full'} py={3}>
        <Flex w={'full'} flexWrap={'wrap'} gap={{base:1,sm:2}} >
              <Box w={{base:'49.3%', md:'24%'}} bg={'whiteAlpha.800'} borderRadius={5}>
                <FastCard />
             </Box>

             <Box w={{base:'49.3%', md:'24%'}} bg={'whiteAlpha.800'} borderRadius={5}>
                <FastCard />
             </Box>

                      <Box w={{base:'49.3%', md:'24%'}} bg={'whiteAlpha.800'} borderRadius={5}>
                <FastCard />
             </Box>

                      <Box w={{base:'49.3%', md:'24%'}} bg={'whiteAlpha.800'} borderRadius={5}>
                <FastCard />
             </Box>

        
        </Flex>
    </Box>
   </>
  )
}

export default TopRankingPage
