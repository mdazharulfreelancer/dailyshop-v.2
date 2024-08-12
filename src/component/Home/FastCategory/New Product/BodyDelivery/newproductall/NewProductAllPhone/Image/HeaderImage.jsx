import { Box, Image, VStack } from '@chakra-ui/react'
import React from 'react'

const HeaderImage = () => {
  return (
    <>
      <VStack mt={'-8px'} alignItems={'start'}>
        <Box w={'full'}>
          <Image  src='https://gcp-img.slatic.net/lazada/6f009ce2-e650-45c9-94dd-6b69004d4530_BD-1920-300.jpg?spm=a2a0e.tm800156014.0.0' alt='delivery'/>
        </Box>
      </VStack>
    </>
  )
}

export default HeaderImage
