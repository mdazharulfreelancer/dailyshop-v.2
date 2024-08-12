import { Box, Container, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import LifestyleCard from './LifestyleCard'

const Lifestyle = () => {
  return (
<>
      <Container maxW={'container.xl'} >
        <VStack alignItems={'start'} >
            <Box w={'full'}>
                <Flex>
                <Text fontSize={'2xl'} color={'gray.500'} fontWeight={'bold'}>Lifestyle</Text>
                <Text ml={'auto'} as={Link}  fontSize={'sm'} fontWeight={'bold'} color={'blue.500'} cursor={'pointer'}>More</Text>
                </Flex>
            </Box>

            
            <Flex w={'full'}  py={1}  gap={0.5} flexWrap={'wrap'}>
                 <LifestyleCard />
                 <LifestyleCard />
                 <LifestyleCard />
                 <LifestyleCard />
                 <LifestyleCard />
                 <LifestyleCard />


            </Flex>
        </VStack>
      </Container>
    </>
  )
}

export default Lifestyle


