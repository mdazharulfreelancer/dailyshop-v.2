import { Box, Flex, Skeleton, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const LoadingCard = () => {
  return (
    <Flex _hover={{shadow:{base:'xl', md:'2xl'}}} bg={'white'} w={{base:'49%', sm:'32.5%',md:'24.8%', lg:'24.8%'}}   className='cardshop'   >
    <VStack  w={'full'}  overflow={'hidden'} borderRadius={2} alignItems={'start'}>
    <Box  w={'100%'} >
    {
       
                     
                 <Skeleton w={'100%'}>
                   <Box  w={'100%'} h={'175px'}>
                                
                  </Box>
               </Skeleton>
                    
               
             }

        <VStack  alignItems={'start'} w={'full'}  pt={2}>
 
            <Skeleton w={'full'} h={6}>
            <Text fontFamily={'Roboto Slab,sans-serif'} fontSize={'sm'} fontWeight={500}>    
            </Text>
            </Skeleton>


            <VStack w={'full'} alignItems={'start'} spacing={0} gap={0}>
            <Skeleton w={'full'} h={6}>
            <Text fontFamily={'Roboto Slab,sans-serif'} fontSize={'sm'} fontWeight={500}>    
            </Text>
            </Skeleton>

     
            
            </VStack>

        </VStack>
        </Box>
                    {/* button */}
             <Skeleton w={'full'} h={8} pb={2}>
            <Text fontFamily={'Roboto Slab,sans-serif'} fontSize={'sm'} fontWeight={500}>    
            </Text>
            </Skeleton>
    </VStack>
</Flex>
  )
}
