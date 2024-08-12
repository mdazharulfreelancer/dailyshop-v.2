import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Flex, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const FrashSalehader = () => {
    const HourHtml = useRef()
    const MinHtml = useRef()
    const SecHtml = useRef()
   useEffect(()=>{
    let setTime = new Date();
    setTime.setHours(24, 0, 0, 0);
    const stopTime = new Date(setTime).getTime();
        const startTimerIntervalIdOne = setInterval(() => {
          let setTimeCounDown = stopTime;
          let time = Date.now();
          if (time < setTimeCounDown) {
            setTimeCounDown = setTimeCounDown - time;
          } else {
            setTimeCounDown = 0;
            clearInterval(startTimerIntervalIdOne);
          }

          const Hour = Math.floor((setTimeCounDown / (1000 * 60 * 60)) % 24);
          const Min = Math.floor((setTimeCounDown / (1000 * 60)) % 60);
          const Sec = Math.floor((setTimeCounDown / 1000) % 60);

          const pad = (num) => (num < 10 ? `0` + num : num); 
          HourHtml.current.textContent = `${pad(Hour)}`;
          MinHtml.current.textContent = `${pad(Min)}`;
          SecHtml.current.textContent = `${pad(Sec)}`;
        }, 1000);
        return () => clearInterval(startTimerIntervalIdOne);
   
    },[])

  return (
   <>
       {
        window.innerWidth > 768 ?(<>
            <Container maxW={'container.xl'}>
                <VStack borderBottom={'1px solid'} pb={2} borderColor={'gray.300'} alignItems={'start'}>
                    <Box>
                        <Text  color={'gray.600'} fontSize={'2xl'} fontWeight={'bold'}>Fresh Sale</Text>
                    </Box>
                    <Flex bg={'#ffffff'} py={2} alignItems={'center'} w={'full'}>
                        <Flex flex={1}>
                            <Text fontSize={'md'} px={3} color={'red.500'}>on sale now</Text>
                        </Flex>
                        <Flex flex={3}>
                            <Flex alignItems={'center'} gap={2}>
                                <Text fontSize={'sm'} px={3} color={'red.500'}>Ending End</Text>

                                <Flex gap={2} color={'black'}>
                                    <Box ref={HourHtml} fontSize={'16px'}fontWeight={600}    px={4} py={1} bg={'red.400'}>00</Box>
                                    <Box ref={MinHtml} fontSize={'16px'}fontWeight={600} px={4} py={1} bg={'red.400'}>00</Box>
                                    <Box  ref={SecHtml}fontSize={'16px'}fontWeight={600} px={4} py={1} bg={'red.400'}>00</Box>
                                    
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex flex={1}>
                            <Flex w={'full'} justifyContent={'end'}>
                            <Button  as={Link} to={'/fresh-sale-all-shop/'}  rightIcon={<ArrowForwardIcon />} borderRadius={0} colorScheme='pink' variant='outline'>
                        Shop More
                          </Button>
                            </Flex>
                        </Flex>
                    </Flex>
            </VStack>
            </Container>
        </>) : (<>
        
            <VStack w={'full'} alignItems={'start'}>
                  <Flex px={3} alignItems={'center'} w={'full'} justifyContent={'space-between'}>
                    <Box>
                        <Text fontSize={'xl'} fontWeight={800}>Fresh Sale</Text>
                    </Box>
     
                        <Flex >
                            <Box as={Link} to={'/fresh-sale/'} fontWeight={400} color={'blue.500'} >Shop More</Box>
                        </Flex>
                    </Flex>

                    <Flex justifyItems={'center'} justifyContent={'center'} py={2} w={'full'} bg={'blue.500'}>
                    <Flex w={'full'} justifyContent={'center'} flex={3}>
                            <Flex alignItems={'center'} gap={2}>
                                <Text fontSize={'sm'} px={3} color={'white'}>Ending End</Text>

                                <Flex gap={2} color={'red'}>
                                    <Box ref={HourHtml}  px={4} py={1} bg={'whiteAlpha.800'} fontSize={'16px'}fontWeight={800} borderRadius={2}>00</Box>
                                    <Box  ref={MinHtml}  fontSize={'16px'}fontWeight={800} px={4} py={1} bg={'whiteAlpha.800'} borderRadius={2}>00</Box>
                                    <Box px={4} fontSize={'16px'}fontWeight={800} ref={SecHtml} py={1} bg={'whiteAlpha.800'} borderRadius={2}>00</Box>
                    
                                    
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                   
            </VStack>
        </>)
       }
   </>
  )
}

export default FrashSalehader
