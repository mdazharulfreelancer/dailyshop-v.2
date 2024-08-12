import { Box, VStack } from '@chakra-ui/react'
import React from 'react'

import TopDeals from './TopDials/TopDeals'
import Everydayprocut from './everydayproductall/everyproductall'

const Body = () => {
  return (
    <>
        <VStack alignItems={'start'}>
            <Box w={'full'}>
                <TopDeals />
            </Box>

            <Box w={'full'}>
              <Everydayprocut/> 
            </Box>

        </VStack>
    </>
  )
}

export default Body
