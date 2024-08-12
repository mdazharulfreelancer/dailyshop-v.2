import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const TopRankingHeader = () => {
  return (
 
<>
    <Box w={'full'}>
        <Flex w={'full'}  px={4} justifyContent={'space-between'} alignItems={'center'}  >
            <Box >
                <Text  fontSize={{base:'xl',md:'2xl'}} fontWeight={600} color={'gray.600'}>Top Ranking</Text>
            </Box>

            <Box >
                <Text fontSize={'sm'} as={Link} fontWeight={500} color={'blue.600'} _hover={{textDecoration:'underline'}} >See All</Text>
            </Box>
        </Flex>
    </Box>
</>

  )
}

export default TopRankingHeader
