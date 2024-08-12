import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const PageHeader = () => {
  return (
    <>
        <Box w={'full'} >
            <Flex w={'full'} gap={3} alignItems={'center'} overflowX={{base:'scroll', md:'hidden'}} >
                <Flex w={{base:'150px', md :'160px'}} bg={'whiteAlpha.800'}  border={'1px solid'}borderColor={'gray.400'} borderRadius={10} p={2} cursor={{base:'none', sm:'pointer'}} >
                    <Text display={'flex'} w={'full'} justifyContent={'center'} fontSize={{base:'sm', md:'lg'}} color={'gray.600'}>
                       Populer
                    </Text>
                </Flex>

                  <Flex w={{base:'177px', md :'160px'}} bg={'whiteAlpha.800'}  border={'1px solid'}borderColor={'gray.400'} borderRadius={10} p={2} cursor={{base:'none', sm:'pointer'}} >
                    <Text display={'flex'} w={'full'} justifyContent={'center'} fontSize={{base:'sm', md:'lg'}} color={'gray.600'}>
                       Hot Saling
                    </Text>
                </Flex>

              <Flex w={{base:'177px', md :'160px'}}bg={'whiteAlpha.800'}  border={'1px solid'}borderColor={'gray.400'} borderRadius={10} p={2} cursor={{base:'none', sm:'pointer'}} >
                    <Text display={'flex'} w={'full'} justifyContent={'center'} fontSize={{base:'sm', md:'lg'}} color={'gray.600'}>
                    Reviewed
                    </Text>
                </Flex>
            </Flex>
        </Box>
    </>
  )
}

export default PageHeader
