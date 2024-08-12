import { PhoneIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Flex, Input, InputGroup, InputLeftElement, InputRightElement, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const Login = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Container maxW={'container.xl'}>
      <Flex w={'full'} minH={{base:'60vh',md:'60vh'}}  overflow={'hidden'}  justifyContent={'center'} alignItems={'center'}>
        <Box w={{base:'95%' , md:'460px'}} borderRadius={'8px'} h={'425px'} mt={'auto'} bg={'#ddd'}>
              <VStack alignItems={'start'} w={'full'} >
                  <Flex w={'full'} justifyContent={'center'} borderBottom={'1px solid #a3afc5'} alignItems={'center'}>
                    <Text fontSize={'18px'} fontWeight={700} p={'0.8rem'} color={'gray.800'}>Log In</Text>
                  </Flex>

                  <VStack gap={2} w={'full'} alignItems={'start'}>
                    <Box w={'full'} px={'0.8rem'} pt={'0.4rem'}>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                          <PhoneIcon color='gray.300' />
                        </InputLeftElement>
                        <Input border={'1px solid #a3afc5'} bg={'#fff'} type='tel' placeholder='Phone number' />
                      </InputGroup>
                    </Box>
                    <Box w={'full'} px={'0.8rem'}>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                          <PhoneIcon color='gray.300' />
                        </InputLeftElement>
                        <Input border={'1px solid #a3afc5'} bg={'#fff'}           type={show ? 'text' : 'password'}
                           placeholder='Enter Password' />

                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                              {show ? 'Hide' : 'Show'}
                            </Button>
                          </InputRightElement>
                      </InputGroup>
                    </Box>
                    <Flex px={'0.8rem'} w={'full'} justifyContent={'end'}>
                      <Text>Are you new <Link style={{color:'blue'}} to={'/regestation'}>Regestation</Link> </Text>
                    </Flex>
                    <Box w={'full'} px={'0.8rem'}>
                     <Button colorScheme='teal' w={'full'}>
                          Log In
                        </Button>
                    </Box>
                  </VStack>

                  <Box w={'full'} pt={'1rem'}>
                    <VStack alignItems={'start'} w={'full'}>
                      <Flex w={'full'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box w={'46%'} h={'1px'} bg={'#a3afc5'}></Box>
                       <Text fontSize={'normal'} fontWeight={500}>OR</Text>
                        <Box w={'46%'} h={'1px'} bg={'#a3afc5'}></Box>
                      </Flex>
                      <VStack pt={'2rem'} gap={2} alignItems={'start'} w={'full'}>
                          <Box w={'full'} px={'0.8rem'}>
                          <Button w={'full'} leftIcon={<FaFacebook />} colorScheme='blue' variant='solid'>
                                FaceBook
                              </Button>
                          </Box>
                          <Box w={'full'} px={'0.8rem'}>
                          <Button w={'full'} leftIcon={<FaGoogle />} colorScheme='red' variant='solid'>
                                Google
                              </Button>
                          </Box>
                      </VStack>
                    </VStack>
                  </Box>
              </VStack>
        </Box>
      </Flex>
    </Container>
  )
}
