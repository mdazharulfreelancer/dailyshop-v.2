import { Box, Container, Flex, Image, Link, VStack } from '@chakra-ui/react'
import React from 'react'
import MiddleImage from '../../Image/MiddleImage'
import { DataRecevePhone } from '../LowPricePhone/DataRecevePhone'
import EverydayprocutCard from './everyproductcard'



const Everydayprocut = () => {
 

return (
        <>
                <Container maxW={'container.xl'} p={{base:'4px', sm:'1rem'}} >

                  {
                    window.innerWidth > 455 &&( 
                      <VStack alignItems={'start'}>
                      <Box cursor={{base:'none', md:'pointer'}}  as={Link} w={'full'}>
                          <Image  src='https://res.cloudinary.com/daxvmjaff/image/upload/v1705217821/evryday_afyvkj.png'/>
                      </Box>

                 <Flex w={'full'}  py={1}  gap={{base:'6px',sm:0.5}} flexWrap={'wrap'}>
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
     
                  </Flex>

                  <Box>
                    <MiddleImage />
                  </Box>
                     </VStack>
                    )
                  }

                  {
                    window.innerWidth < 455 &&( 
                      <DataRecevePhone />
                    )
                  }
              
                </Container>


        
        </>
  )
}

export default Everydayprocut
