import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import ReactStarts from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const CategoriProductCard = ({product , loading}) => {
    const options = {
        edit:false,
        size:window.innerWidth < 600 ? 14 : 15,
        color:"rgba(20,20,20,0.1)",
        activeColor:"#bfae16",
        value:5,
        isHalf :true
      }
  return (
        <>
             <Flex _hover={{shadow:{base:'xl', md:'2xl'}}} bg={'white'} w={{base:'49%', sm:'32.5%',md:'24.5%', lg:'24.5%'}}   className='cardshop'>
                        <VStack   overflow={'hidden'} borderRadius={2} alignItems={'start'}>
                        <Box    as={Link} to={'/ditals-product/asdsad'}   >
                        {
                            product?.productimage && product?.productimage.map((image, index)=>{
                                return(
                                    index === 0 && (
                                        <Box key={index} w={'full'} h={'175px'}>
                                        <Image w={'full'} h={'100%'} src={image.url} alt={product?.productname}/>
                                    </Box>
                                    )
                               
                                )
                             })
                        }

                            <VStack alignItems={'start'} w={'full'} px={3}>
                            <Box>
                                <Text h={'45px'} fontSize={'sm'}className='fontstyle'  fontWeight={500}>{product?.productname}</Text>
                            </Box>

                                <VStack alignItems={'start'} spacing={0} gap={0}>
                                    <Box>
                                    <Text fontSize={17} fontWeight={500} color={'orange.500'}>
                                    ৳ 175
                                    </Text>
                                </Box>

                                <Flex w={'full'} gap={2}>
                                    <Text fontSize={'12px'} fontWeight={500} color={'gray.500'} textDecoration={'line-through'}> ৳ {product?.currentprice}</Text>

                                    <Text fontSize={'12'}fontWeight={500} color={'gray.700'} > -40%</Text>
                                    
                                </Flex>
                                <Box>
                                <div className='productRatingsHomeCard'>
                                    <ReactStarts {...options} />
                                    <span className="customA">(113)</span>
                                </div>
                                </Box>
                                </VStack>

                            </VStack>
                            </Box>
                                        {/* button */}
                                                            <Flex w={'full'}>
                                    <Button w={'full'} h={'2rem'} borderRadius={0} colorScheme={'#00c4cc'} bg={'#00c4cc'}>Add to cart</Button>
                                </Flex>
                        </VStack>
                    </Flex>
        </>
  )
}

export default CategoriProductCard
