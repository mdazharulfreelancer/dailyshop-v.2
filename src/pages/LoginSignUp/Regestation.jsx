import { PhoneIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Flex, Input, InputGroup, InputLeftElement, InputRightElement, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUserFrontend } from '../../actions/UserAction';


export const Regestation = () => {
    const dispatch = useDispatch()
    const {user, loading, success } = useSelector((state) =>state.loaduser)

    const [ inputs, setInput] = useState({
        nameuser : "",
        email : "",
        password : ""
    })
    const {nameuser , email, password} = inputs;
  //  console.log(inputs)
    const submitData = (e) =>{
        e.preventDefault()
        const myForm = new FormData();
        myForm.set("name", nameuser)
        myForm.set("email", email)
        myForm.set("password", password)
        
        dispatch(createUserFrontend(myForm))

    }
    useEffect(()=>{ 
      const uniqueId = 1234644;
      if(success) {
        window.location.replace(`/regestation-Otp/${email}/${uniqueId}`)
      }
    },[success])
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  return (
    <>
    <Container maxW={'container.xl'} >
    <form style={{width:'100%'}} onSubmit={submitData} encType="application/json">
      <Flex w={'full'} minH={{base:'60vh',md:'60vh'}}  overflow={'hidden'}  justifyContent={'center'} alignItems={'center'}>
    
        <Box w={{base:'95%' , md:'460px'}} borderRadius={'8px'} h={'455px'} mt={'auto'} bg={'#ddd'}>
              <VStack alignItems={'start'} w={'full'} >
                  <Flex w={'full'} justifyContent={'center'} borderBottom={'1px solid #a3afc5'} alignItems={'center'}>
                    <Text fontSize={'18px'} fontWeight={700} p={'0.8rem'} color={'gray.800'}>Regestation</Text>
                  </Flex>

                  <VStack gap={2} w={'full'} alignItems={'start'}>
                    <Box w={'full'} px={'0.8rem'} pt={'0.4rem'}>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                          <PhoneIcon color='gray.300' />
                        </InputLeftElement>
                        <Input required value={inputs.nameuser} onChange={(e) => setInput({...inputs , nameuser : e.target.value})} border={'1px solid #a3afc5'} bg={'#fff'} type='text' placeholder='Enter your name' />
                      </InputGroup>
                    </Box>
                    <Box w={'full'} px={'0.8rem'} pt={'0.4rem'}>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                          <PhoneIcon color='gray.300' />
                        </InputLeftElement>
                        <Input required value={inputs.email} onChange={(e) => setInput({...inputs, email:e.target.value})} border={'1px solid #a3afc5'} bg={'#fff'} type='email' placeholder='Enter your email' />
                      </InputGroup>
                    </Box>
                    <Box w={'full'} px={'0.8rem'}>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                          <PhoneIcon color='gray.300' />
                        </InputLeftElement>
                        <Input required value={inputs.password} onChange={(e)=>setInput({...inputs, password : e.target.value})} border={'1px solid #a3afc5'} bg={'#fff'}           type={show ? 'text' : 'password'}
                           placeholder='Enter your password ' />

                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                              {show ? 'Hide' : 'Show'}
                            </Button>
                          </InputRightElement>
                      </InputGroup>
                    </Box>
                    <Flex px={'0.8rem'} w={'full'} justifyContent={'end'}>
                      <Text>Alrady have account <Link style={{color:'blue'}} to={'/sign-in'}>Login</Link> </Text>
                    </Flex>
                    <Box w={'full'} px={'0.8rem'}>
                      <Button  colorScheme='teal' w={'full'}>
                          <input style={{background:"transparent"}} type='submit' value={"Regestation"} /> 
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
                      <VStack pt={'0.5rem'} gap={2} alignItems={'start'} w={'full'}>
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
      </form>
    </Container>
    </>
  )
}
