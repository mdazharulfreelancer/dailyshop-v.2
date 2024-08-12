import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
const MessageBody  = () =>{
    const id = '1246554'
    return (
        <>
          <Box w={'full'} >
            <VStack alignItems={'start'} gap={0} minH={'85vh'} maxH={'100%'}>
                <Box w={'full'} h={'8vh'} bg={'blue.600'}>
                    <Flex alignItems={'center'}justifyContent={'center'} w={'full'} h={'100%'}>
                        <Text as={'span'} fontSize={'20px'} fontWeight={600} color={'#ddd'}>Admin Suport</Text>
                    </Flex>
                </Box>
                <Box w={'full'} h={'83vh'} bg={''} p={4}>
                <Flex w={'full'}  bg={''} p={2} flexDirection={'column'} gap={4}>
                     <Link  to={`/chat-message/${id}`} style={{width:'100%' , display: 'flex' , justifyContent : 'space-between', alignItems:'center'}}>
                  
                        <Flex  justifyContent={'start'} alignItems={'center'} gap={2}>
                            <Box className="image">
                            <Image
                                borderRadius='full'
                                boxSize='50px'
                                src='https://bit.ly/dan-abramov'
                                alt='Dan Abramov'
                                />
                            </Box>
                            <Box className="message">
                                <VStack alignItems={'start'} gap={0}>
                                    <Box className="username"><Text fontSize={'16px'} fontWeight={600}>Md Azharul</Text></Box>
                                    <Box className="messageText"><Text fontSize={'14px'} fontWeight={400}>Hello! How are You</Text></Box>
                                </VStack>
                            </Box>
                         </Flex>
                            <Box className="status">
                                <Text fontSize={'14px'} fontWeight={600} >. 1 hour</Text>
                            </Box>
                        </Link>

                        <Flex w={'full'}  justifyContent={'space-between'} alignItems={'center'}>
                        <Flex  justifyContent={'start'} alignItems={'center'} gap={2}>
                            <Box className="image">
                            <Image
                                borderRadius='full'
                                boxSize='50px'
                                src='https://bit.ly/dan-abramov'
                                alt='Dan Abramov'
                                />
                            </Box>
                            <Box className="message">
                                <VStack alignItems={'start'} gap={0}>
                                    <Box className="username"><Text fontSize={'16px'} fontWeight={600}>Md Azharul</Text></Box>
                                    <Box className="messageText"><Text fontSize={'14px'} fontWeight={400}>Hello! How are You</Text></Box>
                                </VStack>
                            </Box>
                         </Flex>
                            <Box className="status">
                                <Text fontSize={'14px'} fontWeight={600} >. 1 hour</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </VStack>
          </Box>
        </>
    )
}

export default  MessageBody