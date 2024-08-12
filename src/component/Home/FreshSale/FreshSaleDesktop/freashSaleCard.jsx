import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const FreshSaleCardPc = ({product}) => {
    React.useEffect(() => {
        // Select all div elements within the component
        const divElements = document.querySelectorAll('div');
        const pElements = document.querySelectorAll('p');
        const imgElements = document.querySelectorAll('img');
        const aElements = document.querySelectorAll('a');
        // Iterate through each div element and set a custom attribute
        divElements.forEach((div, index) => {
          div.setAttribute('data-reactId', `.21jv590slsxl-y-2xta.b.2.0.0.${product?._id}.0.0.0.0.0.0.${index}`);
    
    
          div.setAttribute('data-react-checksum', `.15ajhar3ul.b.2.0.0.${index}.0.0.0.0.0.${index}`);
        });
    
                // Iterate through each div element and set a custom attribute
       pElements.forEach((p, index) => {
                    p.setAttribute('data-reactId', `.41jp590slpxl-y-2xta.b.2.0.0.${index}.0.0.0.p.0.0.${index}`);
          
                    p.setAttribute('data-react-checksum', `.15ajhar3ul.b.2.0.0.${index}.0.0.0.p.0.${index}`);
                  });
    
             imgElements.forEach((img, index) => {
                img.setAttribute('data-reactId', `.41img590slpxl-y-2xta.b.2.0.0.${index}.0.0.0.p.0.0.${index}`);
          
                img.setAttribute('data-react-checksum', `.15ajhar3ul.b.2.0.0.${index}.0.0.0.p.0.${index}`);
          });
    
          aElements.forEach((a, index) => {
            a.setAttribute('data-reactId', `.41a590slpxl-y-2xta.b.2.0.0.${product?.productname}.0.0.0.p.0.0.${index}`);
      
            a.setAttribute('data-react-checksum', `.15ajhar3ul.b.2.0.0.${index}.0.0.0.p.0.${index}`);
      });
      }, []);
  return (
        <>
             <Flex _hover={{shadow:{base:'xl', md:'2xl'}}} bg={'white'} w={{base:'49.5%', sm:'32.5%',md:'24.5%', lg:'16.5%'}}   className='cardshop'>
                        <VStack  as={Link} to={'/ditals-product/asdsad'}   pb={3} overflow={'hidden'} borderRadius={2} alignItems={'start'}>
                    {

                            product?.productimage && product?.productimage.map((image, index)=>{
                                return(
                                    index === 0 && (
                                        <Box key={index} w={'full'} h={'180px'}>
                                        <Image w={'full'} h={'100%'} src={image.url} alt={product.productname}/>
                                    </Box>
                                    )
                            
                                )
                            })
                    }

                            <VStack alignItems={'start'} w={'full'} px={3}>
                            <Box>
                                <Text fontSize={'sm'} className='fontstyle'  fontWeight={500} color={'gray.700'}>{product?.productname} </Text>
                            </Box>

                                <VStack alignItems={'start'} spacing={0} gap={0}>
                                    <Box>
                                    <Text fontSize={18} color={'orange.500'}>
                                    ৳ {product?.currentprice?.length > 5 ? product?.currentprice?.slice(0,5) : product.currentprice}
                                    </Text>
                                </Box>

                                <Flex w={'full'} gap={2}>
                                    <Text fontSize={11} color={'gray.500'} textDecoration={'line-through'}> ৳ {product?.regularprice?.length > 5 ? product?.regularprice?.slice(0,5) : product.regularprice}</Text>

                                    <Text bg={'blue.600'} px={2}  fontSize={11} color={'white'} borderRadius={5} > {Math.floor(((product?.regularprice - product?.currentprice)/product?.regularprice)*100)}%</Text>
                                    
                                </Flex>

                                <Flex pt={1} w={'full'}>
                                    <VStack w={'full'} alignItems={'start'} spacing={0} gap={0}>
                                        <Box pos={'relative'} borderRadius={10} w={'120px'} h={2} bg={'gray.300'}>
                                            <Box pos={'absolute'} top={0} left={0} borderRadius={10} w={'60px'} h={2} bg={'blue.600'}></Box>
                                        </Box>

                                        <Box>
                                            <Text fontSize={9} fontWeight={500}>49 sold out</Text>
                                        </Box>
                                    </VStack>
                                </Flex>
                                </VStack>
                            </VStack>
                        </VStack>
                    </Flex>
        </>
  )
}

export default FreshSaleCardPc
