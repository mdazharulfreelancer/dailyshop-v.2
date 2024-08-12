import { StarIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import loadingimg from '../../../assets/E-box_Logo-removebg-preview.png'

const JustForYouPhoneRightCard = ({product ,loading}) => {
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
                   <Flex _hover={{shadow:{base:'xl', md:'2xl'}}} bg={'white'} w={{base:'100%', sm:'49.5%',md:'24.5%', lg:'16.5%'}}overflow={'hidden'}borderRadius={5} className='cardshop'>
                        <VStack spacing={3}  as={Link} to={`/ditals-product/${product._id}/${product.productname}`}   pb={3} overflow={'hidden'} borderRadius={2} alignItems={'start'}>
               
                        {
                            product?.productimage && product?.productimage.map((image, index)=>{
                                return(
                                    index === 0 && (
                                        <Box key={index} w={'full'} h={'172px'}>
                                            {
                                                loading && ( 
                                                    <>
                                                    <Flex w={'full'} h={'full'} justify={'center'} alignItems={'center'} bg={'#f7f6f6'} >
                                                        <Image w={'full'} h={'full'} src={loadingimg} alt='loadingimage'/>
                                                    </Flex>
                                                    </>
                                                )
                                            }
                                         <Image w={'full'} h={'100%'} src={image.url} alt={product.productname} /> 
                                    </Box>
                                    )
                               
                                )
                             })
                        }

                            <VStack spacing={1} alignItems={'start'} w={'full'} px={3}>
                            <Box>
                                <Text fontSize={'sm'}className='fontstyle'  fontWeight={'sm'}>{product.productname} </Text>
                            </Box>

                            <Flex w={'full'} gap={2}>
                                <Box>
                                    <Flex gap={1}>
                                        <StarIcon color={'yellow.500'} w={3}h={3}/>
                                    <Text fontSize={11} fontWeight={500} color={'gray.500'} > 3/2 (144) </Text>
                                    </Flex>
                                </Box>
                                 

                                    <Text fontSize={11}fontWeight={500} color={'gray.500'} > . 741 sold</Text>
                                    
                            </Flex>

                            {
                                product?.freedalivary === 'yes' &&(
                                    <Flex  w={'full'} gap={1}  >

                                    <Box fontSize={10} pos={'relative'} border={'1px solid'}borderColor={'blue.500'} px={2}py={0} color={'blue.500'}display={product?.freedalivary === 'yes' ?'block':'none'} overflow={'hidden'} borderRadius={2} > <Text>{product?.freedalivary === 'yes' ? 'Free Delivery' : ''}</Text> </Box>
    
                                        <Box fontSize={10}display={product?.freedalivary === 'yes' ?'block':'none'} pos={'relative'} border={'1px solid'}borderColor={'red.700'} px={2}py={0} color={'red.500'} textShadow={'md'} overflow={'hidden'} borderRadius={2} > <Text>1.2x coins</Text> </Box>
                                        
                                    </Flex>
                                )
                            }
                                
                            

                                <VStack alignItems={'start'} spacing={0} gap={0}>
                                <Flex w={'full'} gap={2} alignItems={'center'}>
                                    <Box>
                                    <Text fontSize={16} fontWeight={500} color={'orange.500'}>
                                    ৳ {product.currentprice}
                                    </Text>
                                </Box>

                               
                                    <Text fontSize={13} color={'gray.500'} textDecoration={'line-through'}> ৳ {product?.regularprice}</Text>                         
                                </Flex>
                                </VStack>
                            </VStack>
                        </VStack>
         </Flex>
        </>
  )
}

export default JustForYouPhoneRightCard
