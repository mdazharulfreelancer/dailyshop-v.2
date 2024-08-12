import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({onClose, total, setOpen}) => {

  return (
    
    <>
    {
      window.innerWidth < 768 ? (<>
          <Box as={Link} onClick={onClose} to={'/checkout-page'} w={'full'} bg={'orange.600'}  h={'3rem'}>
    <Flex   w={'full'} h={'full'} alignItems={'center'} >
        <Text display={'flex'} justifyContent={'center'} alignItems={'center'} w={'50%'} h={'full'} bg={'orange.800'} fontSize={20} fontWeight={600} color={'white'}>
            Checkout
        </Text>

        <Text display={'flex'} justifyContent={'center'}  w={'50%'} fontSize={18} fontWeight={600} color={'white'}>
            ৳ {total}
        </Text>
    </Flex>
  </Box>
      </>) : (<>
        <Box as={Link}  to={'/checkout-page'} w={'full'} bg={'orange.600'}  h={'3rem'}>
    <Flex onClick={()=>setOpen(false)}  w={'full'} h={'full'} alignItems={'center'} >
        <Text display={'flex'} justifyContent={'center'} alignItems={'center'} w={'50%'} h={'full'} bg={'orange.800'} fontSize={20} fontWeight={600} color={'white'}>
            Checkout
        </Text>

        <Text display={'flex'} justifyContent={'center'}  w={'50%'} fontSize={18} fontWeight={600} color={'white'}>
            ৳ {total}
        </Text>
    </Flex>
  </Box>
      </>)
    }
    </>  
    
  )
}

export default Footer
