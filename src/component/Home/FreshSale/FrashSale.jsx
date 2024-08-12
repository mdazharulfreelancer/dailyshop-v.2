import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import FrashSaleBody from './FrashSaleBody'
import FrashSalehader from './FrashSalehader'

const FrashSale = () => {
  return (
  <>
    <VStack alignItems={'start'} w={'full'}>
       <Box w={'full'}>
          <FrashSalehader />
       </Box>
       <Box w={'full'}>
           <FrashSaleBody />
        </Box>
    </VStack>
  </>
  )
}

export default FrashSale
