import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import Essentials from './Daily Essentials/Daily Essentials'
import Electronics from './Electronics/Electronics'
import Fashon from './Fashon/Fashon'
import Lifestyle from './Lifestyle/Lifestyle'
import TopDeals from './TopDials/TopDeals'

const Body = () => {
  return (
    <>
        <VStack alignItems={'start'}>
            <Box w={'full'}>
                <TopDeals />
            </Box>
            <Box w={'full'}>
                <Fashon />
            </Box>
            <Box w={'full'}>
                <Electronics />
            </Box>
            <Box w={'full'}>
                <Lifestyle />
            </Box>
            <Box w={'full'}>
                <Essentials />
            </Box>
        </VStack>
    </>
  )
}

export default Body
