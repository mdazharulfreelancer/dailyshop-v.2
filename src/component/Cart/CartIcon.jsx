import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { BsHandbagFill } from "react-icons/bs";
import { FaBangladeshiTakaSign } from "react-icons/fa6";


const CartIcon = ({cartItems, total}) => {
  


  return (
    <>
    <Box>
        <VStack  boxShadow={'2xl'} spacing={0} borderRadius={1}  w={'76px'} h={'full'} overflow={'hidden'} align={'start'} >
            <Box p={2} pb={1} bg={'#024b86c4'}  w={'full'}>
                <Flex w={'full'} justifyContent={'center'} align={'center'}>
                    <VStack spacing={1} alignItems={'center'}>
                        <Box className='carticonsvg'>
                            <BsHandbagFill />
                        </Box>
                        <Box >
                            <Text textTransform={'uppercase'} fontWeight={600} color={'#decdcd'} fontSize={14} >
                                {cartItems.length ? cartItems.length : 0} Items
                            </Text>
                        </Box>
                    </VStack>
                </Flex>
            </Box>

            <Box w={'full'} bg={'#9E9E9E'} py={1}>
                <Flex w={'full'} justifyContent={'center'} alignItems={'center'}>
                    <Text transition={'2s'} color={'#1b2528'} display={'flex'} className='iconssvgtaka' alignItems={'center'} gap={1} fontSize={13} fontWeight={600}>
                        <FaBangladeshiTakaSign /> {total}
                    </Text>
                </Flex>
            </Box>
        </VStack>
    </Box>
    </>
  )
}

export default CartIcon
