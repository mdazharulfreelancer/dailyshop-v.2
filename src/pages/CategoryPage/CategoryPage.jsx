import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Categorypage from '../../component/Categorypage/Categorypage'
import Sidebar from '../../component/Categorypage/Sidebar'

const CategoryPage = () => {
  return (
    <>
        <Container maxW={{base:'container.sm', md:'container.xl'}} px={{base:0}}  mt='10'>
        <Flex px={{base:1, md:5}}>
                {
                    window.innerWidth > 768 &&   <Flex bg={'white'} w={'250px'} h={'100%'} flex={1} >
                    <Sidebar />
                </Flex>
                }
            <Flex flex={4} >
                <Categorypage />
            </Flex>
        </Flex>
        </Container>
    </>
  )
}

export default CategoryPage
