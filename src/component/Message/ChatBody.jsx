import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './chat.scss';

const ChatBody = () =>{
    const {receverid} = useParams()
  
  useEffect(() =>{

    window.addEventListener('load', () =>{
      
    })
  },[])
    
    return(
        <>
         <Box w={'full'}>
            <VStack alignItems={'center'}>
                <Box className="header-user-detals" w={'full'} h={'7vh'} bg={'blue.500'}>
                    <Flex w={'full'} h={'100%'} justifyContent={'space-between'} alignItems={'center'} px={4} >
                        <Flex justifyContent={'start'} alignItems={'center'} gap={2}>
                            <Box>
                            <Image
                                borderRadius='full'
                                boxSize='35px'
                                src='https://bit.ly/dan-abramov'
                                alt='Dan Abramov'
                                />
                            </Box>
                            <Box>
                            <VStack alignItems={'start'}  gap={0}>
                                    <Box className="username"><Text fontSize={'14px'} fontWeight={600}>Md Azharul</Text></Box>
                                    <Box className="messageText"><Text fontSize={'12px'} fontWeight={400}>online now</Text></Box>
                                </VStack>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
                <Box className="message-body" w={'full'} h={'70vh'} >
                    <Box w={'full'} h={'full'} p={4}>
                        <VStack w={'full'} alignItems={'start'}>
                            <Flex w={'full'} gap={1} alignItems={'end'}>
                                <Box>
                                <Image
                                borderRadius='full'
                                boxSize='35px'
                                src='https://bit.ly/dan-abramov'
                                alt='Dan Abramov'
                                />
                                </Box>
                                <Flex w={'full'} justifyContent={'start'}> <Text className="receverId">Hello!</Text> </Flex>
                            </Flex>
                            <Flex w={'full'} justifyContent={'end'} alignItems={'center'}><Text className="senderId" >How are you.</Text> </Flex>
                        </VStack>
                    </Box>
                </Box>
                <Box className="send-message" w={'full'} h={'7vh'} bg={'red'}></Box>
            </VStack>
         </Box>
        </>
    )
}
export default ChatBody