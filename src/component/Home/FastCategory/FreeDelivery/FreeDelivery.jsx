import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import Body from './BodyDelivery/Body'
import HeaderImage from './Image/HeaderImage'

const FreeDelivery = () => {
  return (
    <>
        <VStack alignItems={'start'}>
            <Box w={'full'}>
              <HeaderImage />
            </Box>

            <Box w={'full'}>
              <Body />
            </Box>
        </VStack>
    </>
  )
}

export default FreeDelivery
