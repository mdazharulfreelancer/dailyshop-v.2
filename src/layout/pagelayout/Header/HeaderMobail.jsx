import { SearchIcon } from '@chakra-ui/icons'
import { Box, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SliderMobail from './SliderMobail'

const activeMobailHeader = { 
    position: "fixed",
    top: 0,
    left: 0,
}
const HeaderMobail = () => {
    const {pathname} = useLocation()
 
    const Mobailheader = useRef(null)
    const sliderImage = [

        { url: "https://icms-image.slatic.net/images/ims-web/2e4610d8-add0-43ac-b26e-33216137cf49.jpg", title: "beach" },
        { url: "https://icms-image.slatic.net/images/ims-web/c9c755a3-0ceb-47ea-895d-04c794d76487.jpg", title: "boat" },
        { url: "https://icms-image.slatic.net/images/ims-web/80ad4ec6-8b6a-4817-9d41-8d764ccc0da4.jpg", title: "forest" },
        { url: "https://icms-image.slatic.net/images/ims-web/2c0f8f77-5c46-4691-ace7-37a5cd186a7c.jpg", title: "city" },
        { url: "https://icms-image.slatic.net/images/ims-web/54a1b19b-1671-4dc2-be2e-5f82ba216623.jpg", title: "italy" },
     ]
     const containerStyles = {
        width: "100%",
        height: "250px",
        margin: "0 auto",
       
      };

      useEffect(() => { 

        window.addEventListener("scroll", function () { 

            if (window.scrollY >= 100) {
                Mobailheader.current.classList.add("activeMobailHeader");
            } else {
                Mobailheader.current.classList.remove("activeMobailHeader");
                    
               
            }
        })
      },[])
 
  return (
    <>
    {
      
            
            window.innerHeight > 50 && (
        
                <>
                       <Box bg={'blue.500'} w={"full"} minH={"9vh"} className='header-none'>
                                <Box pos={'relative'}>

                             {
                                pathname === '/' && (

                                    <>
                                     <Box w={"full"} h={"full"}>
                                        <div style={containerStyles}>
                                        <SliderMobail slide={sliderImage} />
                                        </div>
                                     
                                    </Box>
                                    </>
                                 )
                             }
                              
        
                                    <Flex w={"full"}  pos={'absolute'} top={0} left={0} px={4} py={2} alignItems={"center"} justifyContent={"center"}>
                                    <Box w={'full'} ref={Mobailheader}>  
                                    <InputGroup  bg={"whiteAlpha.800"}>
                                        <InputLeftElement as={Link} to={'/search-items'}>
                                        <SearchIcon />
                                        </InputLeftElement>
                                        <Input  _focus={{border:"none", borderRadius:0}} placeholder="blututh Speckar" />
                                    </InputGroup>
                                    </Box>
                                </Flex>
                                </Box>
                                </Box>
                   
                </>
                )    
  
    }

     
    </>
  )
}

export default HeaderMobail
