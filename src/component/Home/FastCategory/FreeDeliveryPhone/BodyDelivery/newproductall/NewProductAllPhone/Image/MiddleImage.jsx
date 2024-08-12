import { Container, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const MiddleImage = () => {
  return (
    <>
        <Container maxW={'container.xl'} >
            <Flex gap={3} w={'full'} flexDirection={{base:'column', md:"row"}}>
                <Flex as={Link} flex={1}>
                    <Image src='https://gcp-img.slatic.net/lazada/4958ba6c-e6d8-4ae3-9fd5-6cac134b785a_BD-588-250.jpg' alt='middle' />
                </Flex>
                <Flex as={Link} flex={1}>
                    <Image src='https://gcp-img.slatic.net/lazada/4bf41513-e651-4605-bb31-0949e5b08ecb_BD-588-250.jpg' alt='middle' />
                </Flex>
            </Flex>
        </Container>
    </>
  )
}

export default MiddleImage
