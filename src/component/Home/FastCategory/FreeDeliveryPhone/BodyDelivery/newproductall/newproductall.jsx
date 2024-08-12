import { Box, Container, Flex, Image, Link, VStack } from '@chakra-ui/react'
import React from 'react'

import MiddleImage from '../../Image/MiddleImage'
import NewProductCard from './newproductcard'

const NewProductAll = ({}) => {

  const data =[]


  return (
        <>
                <Container maxW={'container.xl'} p={{base:'4px', sm:'1rem'}}>
                     <VStack alignItems={'start'}>
                        <Box cursor={{base:'none', md:'pointer'}}  as={Link} w={'full'}>
                            <Image  src='https://res.cloudinary.com/daxvmjaff/image/upload/v1705217546/New_Product_h63hm2.png'/>
                        </Box>

                   <Flex w={'full'}  py={1}  gap={{base:'6px',sm:0.5}} flexWrap={'wrap'}>
                    {
                       data && data.map((product, index)=>{
                            return(
                               <NewProductCard key={index}index={index} product={product} />
                                
                            )
                        })
                    }
                  
                
           
       
                    </Flex>

                    <Box>
                      <MiddleImage />
                    </Box>
                    </VStack>
                </Container>


        
        </>
  )
}

export default NewProductAll
