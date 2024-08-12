import { Box, Container, VStack } from "@chakra-ui/react";
import React from 'react';
import BodyMoreProductPage from "./BodyMoreProductPage/BodyMoreProductPage";
import HeaderMoreProductPage from './Header/HeaderMoreProductPage';

const MoreProductPage = () => {
  return (
    <>
        <Container maxW={'container.xl'} >
            <VStack w={'full'} alignItems={'start'}>
                <Box w={'full'} >
                    <HeaderMoreProductPage/>
                </Box>
                <Box w={'full'} >
                    <BodyMoreProductPage/>
                </Box>
            </VStack>
        </Container>
    </>
  )
}

export default MoreProductPage
