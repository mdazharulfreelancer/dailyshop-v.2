import { Box, Button, Flex, Text, VStack, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FcOk, FcShipped } from "react-icons/fc";
import ModelOpen from './ModelOpen';

const CheckoutAdress = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('')
    const [openewAdress, setNewAdress] = useState(true)
    const sizes = '4xl' 
    const handleSizeClick = (newSize) => {
      setSize(newSize)
      dialog: {
        // borderRadius: 'md',
        // w:'350px'
      //  bg: `purple.100`,
      }
      onOpen()
    }
    const [adress, setAdress] = React.useState(null)
  
    useEffect(() => { 
        const address = JSON.parse(localStorage.getItem('address'))
       // console.log(address.mobail)
        setAdress(address?.address)
        if(address?.address?.length > 1){
            setNewAdress(false)
        }
    }, [])

 

  return (
   <>
   <Box w={'full'}>
    <VStack alignItems={'start'} w={'full'} spacing={4}>
        <Flex w={'full'}>
            <VStack alignItems={'start'} borderRadius={2} overflow={'hidden'}   border={'1px solid'} borderColor={'#a3afc5'} w={'full'}>
                <Box w={'full'}  >
                    <Flex gap={4} alignItems={'center'}borderBottom={'1px solid'} w={'full'} py={3} px={5}borderColor={'#a3afc5'} bg={'#ddd'}>
                        <Box className='locationsvgcheckout'>
                            <FaLocationDot />
                        </Box>
                        <Box>
                            <Text color={'#332f2f'} fontSize={17} fontWeight={500}>Select a Delivery Address</Text>
                        </Box>
                    </Flex>
                </Box>
                {
                        openewAdress &&  (
                            <Box  w={'full'} py={2} pb={6}>
                            <Flex w={'full'} px={4} >
                                <Box w={'full'}  border={'1px solid'} borderColor={'blue.400'} borderRadius={2}>
                                    <Button w={'full'} onClick={()=>handleSizeClick(sizes)}  justifyContent={'center'} color={'#332f2f'} _hover={{bg:'none'}}fontWeight={500} alignItems={'center'} gap={4}>
                                       + new address
                                    </Button>
                                </Box>
                            </Flex>
                        </Box>
                        )
                    }
                {
           adress && adress?.length >1 ? (<>
                     <Box w={'full'} py={2} pb={6}>
                    <Flex w={'full'} px={4} >
                        <Box w={'full'}  border={'1px solid'} borderColor={'green.500'} borderRadius={2}>
                            <Box w={'full'}  justifyContent={'center'} color={'#332f2f'} _hover={{bg:'none'}}fontWeight={500} alignItems={'center'} gap={4}>
                              <Flex w={'full'} justifyContent={'space-between'} alignItems={'center'} px={4} py={2}>
                        
                                <Box >
                                    <Flex alignItems={'center'} gap={2}>
                                       <Box>
                                            <FcOk />
                                       </Box>
                                       <VStack alignItems={'start'} spacing={0}>
                                    <Box>
                                    <Text fontSize={14} fontWeight={500}>{adress}</Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize={12} fontWeight={400}> Khulna, Bangladesh</Text>
                                    </Box>

                                       </VStack>
                                       
                                    </Flex>
                                </Box>

                                <Box>
                                    <Text onClick={()=>setNewAdress(true)} fontSize={12} fontWeight={400} cursor={'pointer'} color={'red.500'} border={'1px solid '} borderColor={'red.500'} py={1} px={4} >Change</Text>
                                </Box>
                              </Flex>
                            </Box>
                        </Box>
                    </Flex>
                </Box>                  
                                    </> ) :(null)
                                }
             
            
              
            </VStack>
        </Flex>

        <Flex w={'full'}>
            <VStack alignItems={'start'} borderRadius={2} overflow={'hidden'}   border={'1px solid'} borderColor={'#a3afc5'} w={'full'}>
                <Box w={'full'}  >
                    <Flex gap={4} alignItems={'center'}borderBottom={'1px solid'} w={'full'} py={3} px={5}borderColor={'#a3afc5'} bg={'#ddd'}>
                        <Box className='locationsvgcheckout'>
                            <FcShipped />
                        </Box>
                        <Box>
                            <Text color={'#332f2f'} fontSize={17} fontWeight={500}>Preferred Delivery Time</Text>
                        </Box>
                    </Flex>
                </Box>


             <Box w={'full'}>
                <Flex w={'full'} px={4} py={2} pb={4}  >
                    <Box cursor={'pointer'} w={{base:'full', sm:'250px'}} h={'60px'}  border={'1px solid'} borderColor={'#007787'} borderRadius={2}>
                        <Flex px={4} m={'auto'} h={'full'} justifyContent={'center'} alignItems={'center'}>
                            <VStack alignItems={'start'} spacing={0}>
                                <Box>
                                    <Text fontSize={14} color={'#007787'} fontWeight={400}>Faster Dalivari</Text>
                                </Box>
                                <Box>
                                    <Text fontSize={12} fontWeight={400}>Receive by Tomorrow 25 June</Text>
                                </Box>
                            </VStack>
                        </Flex>
                    </Box>



                </Flex>
             </Box>
            
              
            </VStack>
        </Flex>

     </VStack> 

        <ModelOpen setAdress={setAdress} onClose={onClose}size ={size}isOpen={isOpen}onOpen={onOpen}/>
   </Box>
   </>
  )
}

export default CheckoutAdress
