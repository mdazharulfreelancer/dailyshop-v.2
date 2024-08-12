import { Box, Container, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import FashonCard from './FashonCard'

const Fashon = () => {
  return (
    <>
      <Container maxW={'container.xl'} >
        <VStack alignItems={'start'} >
            <Box w={'full'}>
                <Flex>
                <Text fontSize={'2xl'} color={'gray.500'} fontWeight={'bold'}>Fashon</Text>
                <Text ml={'auto'} as={Link} to={'/view-all-product/name'}  fontSize={'sm'} fontWeight={'bold'} color={'blue.500'} cursor={'pointer'}>More</Text>
                </Flex>
            </Box>

            
            <Flex w={'full'}  py={1}  gap={0.5} flexWrap={'wrap'}>
                 <FashonCard />
                 <FashonCard />
                 <FashonCard />
                 <FashonCard />
                 <FashonCard />
                 <FashonCard />

            </Flex>
        </VStack>
      </Container>
    </>
  )
}

export default Fashon
