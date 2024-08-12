import {
    Box,
    Button,
    Flex,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Text,
    VStack
} from '@chakra-ui/react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';

const ModelOpen = ({onClose,isOpen,size, setAdress}) => {

    const [inputs, setInputs] = React.useState({
        name : {
            value: '',
            error: false
        },
        mobile : {
            value: '',
            error: false
        },
        address : {
            value: '',
            error: false
        },
        apartment : {
            value: '',
            error: false
        }
    
      
})

    const handleSubmit = (e) => { 
        e.preventDefault()
        if(inputs.name.value === ''){
            setInputs({...inputs, name:{...inputs.name, error:true}})
        }else if(inputs.mobile.value === ''){ 
            setInputs({...inputs, mobile:{...inputs.mobile, error:true}})

        }
        else if(inputs.address.value === ''){ 
            setInputs({...inputs, address:{...inputs.address, error:true}})

        }
        else if(inputs.apartment.value === ''){ 
            setInputs({...inputs, apartment:{...inputs.apartment, error:true}})
        }else{
            setAdress(inputs.address)
            localStorage.setItem('address', JSON.stringify(inputs))
            onClose()
        }

    }



   

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    })
  return (
   <>
     <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}size={size}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody  p={0} bg={'#ffff'} overflow={'hidden'}>
            <form onSubmit={handleSubmit} >
            <Box w={'full'} minH={{base:'90vh',md:'60vh'}}>
                <Flex  w={'full'}  flexDirection={{base:'column', md:'row'}}>
                    <Flex h={{base:'20vh',md:'60vh'}} flex={{base:1, md:1.5}} w={{base:"100%", md:'450px'}}>
                    <Box w={'full'} h={{base:'40vh',md:'90vh'}}>
                    {
                        isLoaded ? (
                            <GoogleMap
                            center={{lat: 23.810331, lng: 90.412521}}
                            zoom={10}
                             mapContainerStyle={{ 
                                 height: "100%",
                                 width: "100%"
     
                             }}
     
                            >
     
                            </GoogleMap>
                        ): null
                    }
                    </Box>
                    </Flex>

                    <Flex w={{base:"100%", md:'450px'}} h={'70vh'}overflowY={'auto'} flex={{base:1, md:1}} >
                      <Flex w={'full'} h={'full'}  px={4} alignItems={'start'} >
                        <VStack w={'full'} alignItems={'start'} >
                            <Box w={'full'} py={2} borderBottom={'1px solid #ddd'} >
                                <Text w={'full'} display={'flex'} alignItems={'center'} justifyContent={'center'} fontSize={16} color={'gray.800'} fontWeight={600}>Ad Shipping Address</Text>
                            </Box>
                        <VStack h={'85vh'}  alignItems={'start'} w={'full'}>

                            <Box w={'full'} py={2}  >
                                <VStack w={'full'} alignItems={'start'} >
                                    <Text fontSize={14} fontWeight={500}>Name</Text>
                                    <Input required onChange={(e)=>setInputs({...inputs, name: e.target.value})} _placeholder={{color:'gray.800'}} border={'1px solid'} borderColor={'#dddd'} variant='filled' placeholder='Enter Name' bg={'#f8f6f6'} color={'gray.800'} />
                            
                                </VStack>
                            </Box>
                            <Box w={'full'} py={2}  >
                                <VStack w={'full'} alignItems={'start'} >
                                    <Text fontSize={14} fontWeight={500}>Mobile Number</Text>
                                    <Input required onChange={(e)=>setInputs({...inputs, mobile:e.target.value})} _placeholder={{color:'gray.800'}} border={'1px solid'} borderColor={'#dddd'} variant='filled' placeholder='Enter Mobile Number' bg={'#f8f6f6'} color={'gray.800'} />
                            
                                </VStack>
                            </Box>
                            <Box w={'full'} py={2}  >
                                <VStack w={'full'} alignItems={'start'} >
                                    <Text fontSize={14} fontWeight={500}>Address</Text>
                                    <Input required onChange={(e)=>setInputs({...inputs, address:e.target.value})}  _placeholder={{color:'gray.800'}} border={'1px solid'} borderColor={'#dddd'} variant='filled' placeholder='Enter Address ' bg={'#f8f6f6'} color={'gray.800'} />
                            
                                </VStack>
                            </Box>
                            <Box w={'full'} py={2}  >
                                <VStack w={'full'} alignItems={'start'} >
                                    <Text fontSize={14} fontWeight={500}>Apartment No</Text>
                                    <Input required onChange={(e)=>setInputs({...inputs, apartment:e.target.value})} _placeholder={{color:'gray.800'}} border={'1px solid'} borderColor={'#dddd'} variant='filled' placeholder='Enter Apartment No ' bg={'#f8f6f6'} color={'gray.800'} />
                            
                                </VStack>
                            </Box>

                            <Box w={'full'} py={2}  >
                                <VStack w={'full'} alignItems={'start'} >
                                <Button onClick={handleSubmit} w={'full'} bg={'blue.500'} color={'whiteAlpha.800'} _hover={{bg:'blue.800'}} border={'1px solid'} borderColor={'#dddd'} variant='filled' placeholder='Enter Apartment No '>
                                    <Text  fontSize={14} fontWeight={500}>Save Address</Text>
                                </Button>
                            
                                </VStack>
                            </Box>
                         </VStack>
                        </VStack>
                      </Flex>
                    </Flex>
                </Flex>
            </Box>
            </form>
          </ModalBody>
         
        </ModalContent>
      </Modal>
   </>
  )
}

export default ModelOpen
