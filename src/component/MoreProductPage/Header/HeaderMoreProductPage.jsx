import { Box, Container, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import CategoryCardMoreProduct from './CategoryCardMoreProduct'

const HeaderMoreProductPage = () => {
  return (
    <>
              <Container   maxW={"container.xl"} >
            <Flex className='categoriesScroll' w={"full"} scrollBehavior={'smooth'} overflowX={'scroll'}>

            <Flex borderRight={'0.5px solid'} borderColor={'gray.200'}  _hover={{color:'red', bg:'gray.500'}} as={Link} to={'/free-delivery'} alignItems={'center'} >
                    <VStack alignItems={'center'} justifyContent={'center'} py={2} px={2} bg={"#ffffff"} w={{base:'125px',md:'160px'}}>
                        <Box  w={{base:"60px",md:"75px"}}>
                            <Image w={'full'} h={'full'} src={"https://raw.githubusercontent.com/mdazharul869/all-img/main/Untitled%20design%20(1).png"} />
                        </Box>
                        <Text display={'flex'} justifyContent={'center'} flexDirection={'wrap'} fontSize={{base:14, md:16}} alignItems={'center'} w={'full'} overflow={"hidden"} >Home </Text>
                    </VStack>
                </Flex>

                <CategoryCardMoreProduct />
                <CategoryCardMoreProduct />
                <CategoryCardMoreProduct />
                <CategoryCardMoreProduct />
                <CategoryCardMoreProduct />
                <CategoryCardMoreProduct />


            </Flex>
        </Container>
    </>
  )
}

export default HeaderMoreProductPage
