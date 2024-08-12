import { Box, Container, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { PiDotsNineBold } from "react-icons/pi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';

//style svg

const FooterMobail = ({isOpen}) => {

    const pathnamemy = useLocation().pathname
//    console.log(pathnamemy)

  return (
    <>
        <Container  px={'0.2rem'}>
            <Flex px={3}  w={"full"} bg={"white"} h={'3.5rem'} borderTop={'1px solid'} borderColor={'gray.300'}  justifyContent={'space-between'}>
                <Flex alignItems={''} w={'full'} justifyContent={'space-between'}>

                    <VStack as={Link}  to={'/'}  gap={1} my={'auto'} >
                        <Box  className={pathnamemy === '/' ? 'red' :'iconsfooter' }   >
                            <IoHome  />
                        </Box>
                        <Box>
                            <Text color={pathnamemy === '/' ? '#3a7bdd' :'gray.600'} fontSize={'11px'}>Home</Text>
                        </Box>
                    </VStack>

                    <VStack as={Link} to={'/all-category'} gap={1}  my={'auto'}>
                        <Box  className={pathnamemy === '/all-category' ? 'red' :'iconsfooter' }  color={'gray.600'}  >
                            <PiDotsNineBold />
                        </Box>
                        <Box>
                            <Text color={pathnamemy === '/all-category' ? 'blue.500' :'gray.600'} fontSize={'11px'}>Categories</Text>
                        </Box>
                    </VStack>

                    <VStack cursor={'none'} onClick={isOpen} gap={1}  my={'auto'}>
                        <Box className={ isOpen? 'iconsfooter' : '#3182ce'}   >
                            <FaShoppingCart />
                        </Box>
                        <Box >
                            <Text color={isOpen ? 'gray.600' :'gray.600'} fontSize={'11px'}>Cart</Text>
                        </Box>
                    </VStack>

                    <VStack  gap={1} my={'auto'} >
                        <Box className={pathnamemy === '/profile' ? 'red' :'iconsfooter' }  color={'gray.600'}  >
                            <RiAccountPinCircleLine />
                        </Box>
                        <Box>
                            <Text color={pathnamemy === '/profile' ? '#3a7bdd' :'gray.600'} fontSize={'11px'}>Account</Text>
                        </Box>
                    </VStack>

                    <VStack  gap={1} my={'auto'}  >
                        <Box className={pathnamemy === '/profile' ? 'red' :'iconsfooter' }  color={'gray.600'}  >
                             <MdMessage />
                        </Box>
                        <Box>
                            <Text color={pathnamemy === '/profile' ? '#3a7bdd' :'gray.600'} fontSize={'11px'}>Message</Text>
                        </Box>
                    </VStack>
                    
                </Flex>
            </Flex>
        </Container>
    </>
  )
}

export default FooterMobail
