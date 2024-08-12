import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NewProductCard = ({product, index}) => {
    const [isHovering, setIsHovering] = useState(false)
  return (
        <>
             <Flex   bg={'white'}  w={{base:'48.6%', sm:'32.5%',md:'24.5%', lg:'16.5%'}}   className='cardshop'>
                        <VStack     as={Link} to={`/ditals-product/${product._id}/${product?.productname}`}   pb={3} overflow={'hidden'} borderRadius={2} alignItems={'start'}>
                            <Box onMouseOver={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)} pos={'relative'} w={'full'} h={{base:'172px',sm:'205px'}}>

                            {
                            product?.productimage && product?.productimage.map((image, index)=>{
                                return(
                                    index === 0 && (
                                      
                                     
                                <Image key={index} zIndex={2} w={'full'} h={'full'} _hover={{transform:'scale(1.02)', backdropFilter:'contrast(40%)', background:'gray.500'}} transition={'0.5s'} src={image.url} />
                                  
                                    )
                               
                                )
                             })
                        }
                         


                            {
                                isHovering && (
                                    <Box pos={'absolute'} top={0} left={0} w={'full'} h={'full'} bg={'rgba(0, 0, 0, 0.151)'}>
                                    </Box>
                                )
                            }

                            <Box pos={'absolute'} top={'-7px'} right={'-7px'}  zIndex={0} display={'flex'} w={'57px'}  px={2}borderTopLeftRadius={16} borderBottomLeftRadius ={16} >
                                <Image src='https://res.cloudinary.com/daxvmjaff/image/upload/v1705178239/Every-Low-Price-1--unscreen_tr6bjd.gif' alt='image' />
                                {/* <Text fontSize={'sm'} fontWeight={500} color={'white'}>20%</Text> */}
                            </Box>

                            <Box pos={'absolute'} bottom={'-1px'} left={'-18px'}  zIndex={0} display={'flex'} w={'80px'}  px={2}borderTopLeftRadius={16} borderBottomLeftRadius ={16} >
                                <Image  src='https://res.cloudinary.com/daxvmjaff/image/upload/v1705221016/free_wgazca.png' alt='image' />
                                {/* <Text fontSize={'sm'} fontWeight={500} color={'white'}>20%</Text> */}
                            </Box>
                      
                            </Box>

                            <VStack alignItems={'start'} w={'full'} px={3}>
                            <Box>
                                <Text fontSize={'sm'}className='fontstyle'  fontWeight={'sm'}>Pure and Natural Dried Fried Peanut </Text>
                            </Box>

                                <VStack w={'full'} alignItems={'start'} spacing={0} gap={0}>
                                    <Flex w={'full'} gap={2} alignItems={'center'}>
                                    <Box>
                                    <Text fontSize={18} color={'orange.500'}>
                                    ৳ 1753
                                    </Text>
                                   </Box>


                                             <Box display={'flex'}   px={2}borderTopLeftRadius={16} borderBottomLeftRadius ={16} bg={'orange.500'} >
                             
                                <Text fontSize={'sm'} fontWeight={500} color={'white'}>20%</Text> 
                            </Box>
                                    </Flex>
                            
                                <Flex w={'full'} gap={2} >
                                    <Text fontSize={'sm'} color={'gray.500'} textDecoration={'line-through'}> ৳ 200</Text>

                              
                                    
                                </Flex>

                                <Flex w={'full'} justifyContent={'center'} alignItems={'center'}>
                                    <Button w={'full'}  bg={'blue.500'} color={'whiteAlpha.800'} _hover={{bg:'blue.500'}} variant={'outline'} size={'sm'} h={7}>Shop now</Button>
                                </Flex>
                                </VStack>
                            </VStack>
                        </VStack>
                    </Flex>
        </>
  )
}

export default NewProductCard


