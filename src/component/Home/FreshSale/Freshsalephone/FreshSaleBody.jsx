import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import FreshSaleCategory from './FreshSaleCategory'
import FreshSaleCategoryBody from './FreshSaleCategoryBody'

const FreshSaleBody = () => {
  return (
    <>
       <VStack alignItems={'start'}>
        <Box w={'full'}>
        <FreshSaleCategory />
        </Box>

        <Box w={'full'} py={5}>
        <FreshSaleCategoryBody />
        </Box>
       </VStack>
    </>
  )
}

export default FreshSaleBody
