import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import FreshSaleBody from './FreshSaleBody'
import FreshSaleHeader from './FreshSaleHeader'

const FreshSalePhone = () => {
  return (
    <>
      <VStack alignItems={'start'}>
            <Box w={'full'}>
              <FreshSaleHeader />
            </Box>

            <Box w={'full'}>
              <FreshSaleBody />
            </Box>
      </VStack>
    </>
  )
}

export default FreshSalePhone
