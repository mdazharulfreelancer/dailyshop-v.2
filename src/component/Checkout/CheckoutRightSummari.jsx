import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { MdOutlineCropRotate, MdOutlineLocationSearching } from "react-icons/md";

const CheckoutRightSummari = ({total}) => {
    const [deleryFee, setDeleryFee] = React.useState(0)
    useEffect(() => {
        if(total < 2000){
            setDeleryFee(20)
        }else{
            setDeleryFee(40)
        }
    }, [deleryFee])
    useEffect(() =>{
     
    },[])
    const SendDataPayment = async() =>{
        const address = JSON.parse(localStorage.getItem('address'))
        const id = "66a8d65628d33b0da000af48"
       address.productId = id
        console.log(address)

        try{
             await fetch("/api/v1/checkout-page/order" ,{
                method : "POST",
                headers :  { "Content-Type": "application/json"},      
                body : JSON.stringify(address)
             }).then((res) =>res.json())
             .then((result) => {
                window.location.replace(result.url)
             })

        }catch {

        }
    }
  return (
  <>
    <Box w={'full'}>
        <Box w={'full'} bg={'#fff'} border={'1px solid'} borderColor={'#a3afc5'} borderRadius={2} p={4}>
         
                <Flex w={'full'}>
                <VStack alignItems={'start'} w={'full'}>
                    <VStack borderBottom={'1px solid'}borderColor={'#c4cbd8'} alignItems={'start'} w={'full'}>
                        <Box w={'full'} py={2} >
                            <Text fontSize={14} fontWeight={500}>Discount and Payment</Text>
                        </Box>

                        <VStack alignItems={'start'} w={'full'} spacing={0}>
                        <Box w={'full'} py={2} >
                            <Flex w={'full'} justifyContent={'space-between'}>
                                <Box>
                                 <Flex gap={2}>
                                    <MdOutlineLocationSearching />
                                <Text fontSize={14} fontWeight={500}>
                                Bazer  Voucher</Text>
                                 </Flex>
                                </Box>
                              
                                    <Text fontSize={13} fontWeight={400}>No Applicable Voucher</Text>
                            </Flex>
                        </Box>

                        <Flex w={'full'} justifyContent={'space-between'} py={2}>
                        <Box>
                                    <Flex gap={2}>
                                    <MdOutlineCropRotate />
                                <Text fontSize={14} fontWeight={500}>
                                Promo Code
                                </Text>
                                    </Flex>
                                </Box>

                        <Box>
                            <Flex alignItems={'center'} cursor={'pointer'} gap={2}>
                                <Text fontSize={12} fontWeight={400}>
                                Enter Store/Bazer Code
                                </Text>
                                <Text> {`>`} </Text>
                            </Flex>
                        </Box>
                        </Flex>
                        </VStack>
                    </VStack>

                    <VStack alignItems={'start'} w={'full'}>
                        <Box w={'full'} py={2} >
                            <Text fontSize={14} fontWeight={500}>Order Summari</Text>
                        </Box>

                        <VStack alignItems={'start'} w={'full'} spacing={0}>
                        <Box w={'full'} py={2} >
                            <Flex w={'full'} justifyContent={'space-between'}>
                                <Box>
                                 <Flex gap={2}>
                                    <MdOutlineLocationSearching />
                                <Text fontSize={14} fontWeight={500}>
                                Items Total</Text>
                                 </Flex>
                                </Box>
                              
                                    <Text color={'red.500'} fontSize={14} fontWeight={400}>৳ {total}</Text>
                            </Flex>
                        </Box>

                        <Flex w={'full'} justifyContent={'space-between'} py={2}>
                        <Box>
                                    <Flex gap={2}>
                                    <MdOutlineCropRotate />
                                <Text fontSize={14} fontWeight={500}>
                                Delivery Fee
                                </Text>
                                    </Flex>
                                </Box>

                        <Box>
                            <Flex alignItems={'center'} cursor={'pointer'} gap={2}>
                                <Text fontSize={12} fontWeight={400}>
                                ৳ {deleryFee}
                                </Text>
                             
                            </Flex>
                        </Box>
                        </Flex>
                        <Flex w={'full'} justifyContent={'space-between'} py={2}>
                        <Box>
                                    <Flex gap={2}>
                                    <MdOutlineCropRotate />
                                <Text fontSize={14} fontWeight={500}>
                                Total
                                </Text>
                                    </Flex>
                                </Box>

                        <Box>
                            <Flex alignItems={'center'} cursor={'pointer'} gap={2}>
                                <Text fontSize={15} color={'red.400'} fontWeight={500}>
                                ৳ {total + deleryFee}
                                </Text>
                             
                            </Flex>
                        </Box>
                        </Flex>

                        <Flex w={'full'} justifyContent={'end'} py={2}>
                        <Box>
                             <Flex gap={2}>
                                  
                                <Text fontSize={12}color={"#aca1a1ddd"} fontWeight={500}>
                                VAT included, where applicable
                                </Text>
                                    </Flex>
                                </Box>

            
                        </Flex>

                        <Flex w={'full'} justifyContent={'center'} py={2}>
                        <Box w={'full'}>
   
                         <Button onClick={SendDataPayment} w={'full'} bg={'#f08804'} color={'#fff'} _hover={{bg:'#f08804'}} fontWeight={500} alignItems={'center'} gap={4}>
                                Place Order
                         </Button>
                    
                                </Box>
            
                        </Flex>
                        </VStack>
                    </VStack>
                    </VStack>
                </Flex>
            
        </Box>
    </Box>
  </>
  )
}

export default CheckoutRightSummari

//01909185780