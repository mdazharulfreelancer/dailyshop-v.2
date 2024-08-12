import { Box, Container, Flex, Image, Link, VStack } from '@chakra-ui/react'
import React from 'react'
import MiddleImage from '../../Image/MiddleImage'
import TopDialsCard from './TopDialsCard'

const TopDeals = () => {
  return (
        <>
                <Container maxW={'container.xl'}>
                     <VStack alignItems={'start'}>
                        <Box as={Link} w={'full'}>
                            <Image  src='https://gcp-img.slatic.net/lazada/a5d5d78a-310b-4ba7-94b6-f3fe51fdc2bb_BD-1188-70.jpg' alt='delivery'/>
                        </Box>

                   <Flex w={'full'}  py={1}  gap={0.5} flexWrap={'wrap'}>
                    <TopDialsCard />
                    <TopDialsCard />
                    <TopDialsCard />
                    <TopDialsCard />
                    <TopDialsCard />
                    <TopDialsCard />
           
       
                    </Flex>

                    <Box>
                      <MiddleImage />
                    </Box>
                    </VStack>
                </Container>


        
        </>
  )
}

export default TopDeals
