import { Box, Container, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CheckoutAdress from '../../component/Checkout/CheckoutAdress'
import CheckoutRightSummari from '../../component/Checkout/CheckoutRightSummari'

const Checkout = () => {
    const {cartItems} = useSelector(state => state.cartItem)

    const [total, setTotal] = React.useState(0)
    
    useEffect(() => { 
        let price = []
        cartItems.map(item => {
            price.push(item?.currentprice * item?.qty)
        })
  
       return setTotal(price.reduce((a, b) => a + b, 0))
    }, [cartItems])



  return (
    <>
        <Container maxW={'container.xl'}>
            <Box w={'full'}>
                <Flex w={'full'} gap={2} flexDirection={{base:'column', md:'row'}}>
                    <Flex flex={{base:1, md:2}}>
                        <Box w={'full'}>
                            <CheckoutAdress />
                        </Box>
                    </Flex>
                    <Flex flex={{base:1, md:1}}>
                    <CheckoutRightSummari total={total}/>
                    </Flex>
                </Flex>
            </Box>
        </Container>
    </>
  )
}

export default Checkout
