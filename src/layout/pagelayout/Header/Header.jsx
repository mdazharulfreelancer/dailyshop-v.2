import { ArrowForwardIcon, Search2Icon } from '@chakra-ui/icons';
import { Box, Button, Container, Flex, Image, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HeaderMobail from "./HeaderMobail";

const Header = () => {
    const header = useRef(null)

    useEffect(() => { 


            {
                window.innerWidth > 768 && (
                    window.addEventListener("scroll", function () {
                        if (window.scrollY >= 100) {
                          header.current.classList.add("activePcHeader");
                         
                        } else {
                          header.current.classList.remove("activePcHeader");
                      

                        
                        }
                      })
               
                )
            }

    }, [])

  return (
    <Box w={"full"}>
        {
            window.innerWidth > 768 ? (
                <Box ref={header} w={"full"} minH={"9vh"} bg={"#148a8b"}>
                <Container maxW={"container.xl"} >
                    <Flex w={"full"} justifyContent={"center"} h={'10vh'} alignItems={"center"}>
                        <Flex flex={1}>
                            <Flex gap={1} justify={"center"} alignItems={"center"}>
                                <Box w={12}   className="logo">
                                    <Image  src={"/Orange Minimalist E Wallet Logo.png"}></Image>
                                </Box>
                                <Text as={Link} to={'/'} fontSize={20} fontWeight={600} className="logo"> Bazer</Text>
                            </Flex>
                        </Flex>
                        <Flex flex={3} alignItems={'center'} jjustify={"center"} >
                            <Flex w={'100%'}  justifyContent={'center'} alignContent={'center'}>
                            <InputGroup>
                  
                        <Input type='tel' bg={'#fff'}  variant='filled'  placeholder='Search for Product (pc,egg,midicine)' />
                        <InputRightElement  as={Link} to={'/search-items'} bg={'yellow'} >
                        <Search2Icon   color='gray.800' cursor={'pointer'} />
                        </InputRightElement>
                              </InputGroup>
                            </Flex>

                        </Flex>
                        <Flex flex={1} >
                            <Flex w={'full'} justifyContent={'end'}>
                                <Flex>
                                <Button  as={Link} to={'/sign-in'} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='solid'>
                                            LogIn
                                     </Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Container>
            </Box>
             ) : (
                <>
                {
                    
                        <HeaderMobail />
                 
                    
                }
            
                </>
             )
        }
    </Box>
  )
}

export default Header
