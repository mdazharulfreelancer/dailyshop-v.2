import { SmallCloseIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../actions/CartAction'

const CardBody = ({qty,  productimage,productname, id,currentprice}) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = React.useState(qty)
    const price = currentprice * quantity

const DeleteCard = () =>{ 
    dispatch(removeFromCart(id))
}
  
    useEffect(() => {
     
        console.log(currentprice)
    
     
    }, [price, currentprice])


    const incrishQuantity = () =>{ 
        const quantit = quantity + 1
        setQuantity(quantit)
        dispatch(addToCart(id , quantit))
        console.log(quantity)
        
  }
  const discrishQuantity = () =>{ 
    const quantit = quantity - 1
    if(quantity > 1){
        setQuantity(quantit)
        dispatch(addToCart(id , quantit))

    }
}

  return (
       
           
                    <Flex  w={'full'} justifyContent={'space-between'} alignItems={'center'} bg={'#1a2734'} px={4}>
                    <Flex>
                        <VStack alignItems={'center'} spacing={0}>
                            <Text onClick={incrishQuantity} color={'#ddd'} cursor={'pointer'}>^</Text>
                            <Box w={'30px'}>
                
                            <input  value={ quantity
                } w={5} readOnly style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', outline:'none', color:'#ddd', fontSize:'18px', fontWeight:500, paddingLeft:'10px', marginLeft:'auto', background:'transparent'}}/>
                            </Box>
                            <Text onClick={discrishQuantity}   color={'#ddd'} cursor={'pointer'}>v</Text>
                        </VStack>
                    </Flex>
                
                    <Flex>
                        <Flex gap={2} alignItems={'center'}>
                            <Box w={12} h={12} bg={'#fffff'}>
                            {
                             productimage &&   productimage.map((img, index)=>{
                                    return(
                                    index === 0 && (
                                  
                                       <Image key={index} w={'full'} h={'full'} src={img?.url} alt='asdsad' />  
                                 
                                    )
                                    )
                                  }
                                )
                                
                                }
                              
                            </Box>
                
                            <VStack alignItems={'start'} spacing={0}>
                                <Box>
                                    <Text fontSize={14} fontWeight={500} color={'#ddd'}>
                                        {
                                           productname?.slice(0, 18)+'..'
                                        }
                                    </Text>
                                </Box>
                                <Box>
                                    <Text fontSize={11} fontWeight={500} color={'#ddd'}>
                                        1kg
                                    </Text>
                                </Box>
                
                                <Box>
                                    <Text fontSize={16} color={'red.500'} fontWeight={500} >
                                    ৳ {price}
                                    </Text>
                                </Box>
                            </VStack>
                        </Flex>
                    </Flex>
                
                    <Flex h={'full'}>
                        <VStack h={'full'} onClick={DeleteCard} justifyContent={'center'} alignItems={'center'}>
                            <SmallCloseIcon color={'white'} cursor={'pointer'} w={4} h={5} m={'auto'} />
                        </VStack>
                    </Flex>
                
                    
                   </Flex>
                
                
              
         
                
            
        

  )
}

export default CardBody
