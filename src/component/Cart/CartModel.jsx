import { CloseIcon } from '@chakra-ui/icons';
import { Box, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Tooltip, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { BsHandbagFill } from "react-icons/bs";
import { Ri24HoursFill } from "react-icons/ri";
import CardBody from './CardBody';
import './Cart.module.scss';
import Footer from './Footer';


const CartModel = ({isOpen,onClose,setOpen, cartItems ,open, total}) => {
    const [price, setPrice] = React.useState(0)
//    console.log(price)

    useEffect(() => { 
 
  //console.log(total)
       
    }, [total])
  return (
    <>
        {
            window.innerWidth <525  && (
                <Box  className='sdsasdasdsfdfs' w={{base:'100vw', sm:'35vw'}} >
            <Modal className='aaaaaaaaaaaaaaaaaaaaa'  right={0} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent  borderRadius={0} minH={'100vh'} mt={0} mb={0}>
            <ModalHeader p={0}  borderBottom={'1px solid #1a2734'}>
                <Box px={4} py={3} w={'full'} h={'full'} >
                    <Flex gap={2} alignItems={'center'}>
                    <Box className='carticonsvg'>
                            <BsHandbagFill />
                    </Box>

                        <Box>
                            <Text mt={1} textTransform={'uppercase'} fontWeight={600} color={'#decdcd'} fontSize={18} >
                                0 Items
                            </Text>
                        </Box>
                    </Flex>
                </Box>
                <Box cursor={'pointer'} display={'flex'} px={4} w={'full'} h={'2rem'} bg={'#1a2734'}>
                    <Flex w={'full'} alignItems={'center'} >
                        <Text fontSize={12} fontWeight={500} color={'#ddd'}>
                        You have reduced delivery charge
                        </Text>

                        <Flex ml={'auto'} gap={2} alignItems={'center'}>
                            <Text fontSize={13} fontWeight={500} color={'#ddd'}>
                            $0.00
                            </Text>
                            <Text fontSize={13} fontWeight={500} color={'#ddd'}>
                            to go
                            </Text>
                        </Flex>
                    </Flex>
                    </Box>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody p={0} py={3}>

              <Box w={'full'} >
                <VStack w={'full'}   alignItems={'start'} >
                    {/* header */}
                    <Box w={'full'}>
                        <Flex gap={3} w={'full'} alignItems={'center'}  px={4}  >
                                <Box>
                                    <Ri24HoursFill />
                                </Box>
                                <Text fontSize={14} fontWeight={500} color={'#ddd'}>
                                 Express Delivery
                                </Text>
                        </Flex>
                    </Box>

                    {/* body */}
               

                            {
                                cartItems && cartItems.map((item, index)=>{
                                    return(
                                        <Box key={index} w={'full'}   >
                                            <CardBody  id={item.productId} productimage ={item.productimage}productname={item.productname}currentprice={item.currentprice}
                                            qty={item.qty}
                                          
                                          
                                            />
                                       </Box>
                                    )
                                })
                            }

{
                                            cartItems.length === 0 && (
                                                <Flex h={'83vh'} justifyContent={'center'} alignItems={'center'} w={'full'} >
                                               
                                                    <Image w={'full'} h={'full'} src={'https://res.cloudinary.com/daxvmjaff/image/upload/v1704802672/Opps_No_Cart_AvableAble_sm03fi.png'} alt='asdsad' />
                                              
                                            </Flex>
                                            )
                                        }
                 
                </VStack>
              </Box>
            </ModalBody>

            <ModalFooter p={0}>
                    <Footer total={total} onClose={onClose} />
          
            </ModalFooter>
            </ModalContent>
        </Modal>
        </Box>
            )
        }

         {open && (
            window.innerWidth > 764 && (
                <Box  bg={'#2d3748'} pos={'fixed'} top={0} right={0} h={'100vh'}  className='sdsasdasdsfdfs' w={{base:'100vw', sm:'320px'}} transition={'2s'} >
                    <Box className='header'>
                    <Box px={4} py={3} w={'full'} h={'full'} >
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <Flex gap={2} alignItems={'center'}>
                    <Box className='carticonsvg'>
                            <BsHandbagFill />
                    </Box>

                        <Box>
                            <Text mt={1} textTransform={'uppercase'} fontWeight={600} color={'#decdcd'} fontSize={18} >
                                {cartItems?.length} Items
                            </Text>
                        </Box>

                        
                    </Flex>
                    <Tooltip label="Close" aria-label="A tooltip">
                    <Box bg={'gray.800'} onClick={()=>setOpen(false)}  py={2} px={3} borderRadius={2} >
                     
                         <CloseIcon color={'#dddd'} onClick={onClose} cursor={'pointer'} w={4} h={4} />
                     
                    </Box>
                    </Tooltip>
                    </Flex>
                </Box>
                    </Box>

                
                
              <Box w={'full'} minH={'86vh'}>
                <VStack w={'full'}   alignItems={'start'} >
                    {/* header */}
                    <Box w={'full'}>
                        <Flex gap={3} w={'full'} alignItems={'center'}  px={4}  >
                                <Box>
                                    <Ri24HoursFill />
                                </Box>
                                <Text fontSize={14} fontWeight={500} color={'#ddd'}>
                                 Express Delivery
                                </Text>
                        </Flex>
                    </Box>

                    {/* body */}


                            {
                                cartItems && cartItems.map((item, index)=>{
                                    return(
                                        <Box key={index} w={'full'}  >
                               
                                        <CardBody  id={item.productId} productimage ={item.productimage}productname={item.productname}currentprice={item.currentprice}
                                            qty={item.qty}
                                            setPrice={setPrice}
                                            cartItems={cartItems}
                                            />

                                    </Box>
                                    )
                                })
                            }
                                {
                                            cartItems.length === 0 && (
                                                <Flex h={'75vh'} justifyContent={'center'} alignItems={'center'} w={'full'} >
                                               
                                               <Image w={'full'} h={'full'} src={'https://res.cloudinary.com/daxvmjaff/image/upload/v1704802672/Opps_No_Cart_AvableAble_sm03fi.png'} alt='asdsad' />
                                              
                                            </Flex>
                                            )
                                        }
                 
                </VStack>
              </Box>

             <Box w={'full'} h={'3rem'} bg={'orange.500'}>
             <Footer total={total} setOpen={setOpen}/>
             </Box>
                </Box>
            )

        ) }
        
    </>
  )
}

export default CartModel
