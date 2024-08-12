import { Box, Container, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import BodyMoreProductCard from './BodyMoreProductCard'

const BodyMoreProductPage = () => {
  return (
    <>
        <Container p={{base:0}} maxW={'container.xl'} >
            <VStack w={'full'} alignItems={'start'}>
                <Box w={'full'} >
                    HEader
                </Box>

                <Box w={'full'} >
                    
                   <Flex w={'full'}  py={1}  gap={2} flexWrap={'wrap'}>
                    <BodyMoreProductCard />
                    <BodyMoreProductCard />
                    <BodyMoreProductCard />
                    <BodyMoreProductCard />
                    <BodyMoreProductCard />
                    <BodyMoreProductCard />
                    <BodyMoreProductCard />
                    <BodyMoreProductCard />
                    <BodyMoreProductCard />
                    <BodyMoreProductCard />
                    <BodyMoreProductCard />
                    <BodyMoreProductCard />
                    <BodyMoreProductCard />
                    <BodyMoreProductCard />
                    <BodyMoreProductCard />
          
           
       
                    </Flex>
                </Box>
            </VStack>
        </Container>
    </>
  )
}

export default BodyMoreProductPage
