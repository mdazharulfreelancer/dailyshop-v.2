import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import ReactStarts from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const JustForYouCard = ({product}) => {
    // React.useEffect(() => {
    //     // Select all div elements within the component
    //     const divElements = document.querySelectorAll('div');
    //     const pElements = document.querySelectorAll('p');
    //     const imgElements = document.querySelectorAll('img');
    //     const aElements = document.querySelectorAll('a');
    //     // Iterate through each div element and set a custom attribute
    //     divElements.forEach((div, index) => {
    //       div.setAttribute('data-reactId', `.21jv590slsxl-y-2xta.b.2.0.0.${product?._id}.0.0.0.0.0.0.${index}`);
    
    
    //       div.setAttribute('data-react-checksum', `.15ajhar3ul.b.2.0.0.${index}.0.0.0.0.0.${index}`);
    //     });
    
    //             // Iterate through each div element and set a custom attribute
    //    pElements.forEach((p, index) => {
    //                 p.setAttribute('data-reactId', `.41jp590slpxl-y-2xta.b.2.0.0.${index}.0.0.0.p.0.0.${index}`);
          
    //                 p.setAttribute('data-react-checksum', `.15ajhar3ul.b.2.0.0.${index}.0.0.0.p.0.${index}`);
    //               });
    
    //          imgElements.forEach((img, index) => {
    //             img.setAttribute('data-reactId', `.41img590slpxl-y-2xta.b.2.0.0.${index}.0.0.0.p.0.0.${index}`);
          
    //             img.setAttribute('data-react-checksum', `.15ajhar3ul.b.2.0.0.${index}.0.0.0.p.0.${index}`);
    //       });
    
    //       aElements.forEach((a, index) => {
    //         a.setAttribute('data-reactId', `.41a590slpxl-y-2xta.b.2.0.0.${product?.productname}.0.0.0.p.0.0.${index}`);
      
    //         a.setAttribute('data-react-checksum', `.15ajhar3ul.b.2.0.0.${index}.0.0.0.p.0.${index}`);
    //   });
    //   }, []);
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
             <Flex _hover={{shadow:{base:'xl', md:'2xl'}}} bg={'white'} w={{base:'100%', sm:'32.5%',md:'24.5%', lg:'16.5%'}} className='cardshop' >
                        <VStack spacing={3}  as={Link} to={`/ditals-product/${product._id}/${product.productname}`}   pb={3} overflow={'hidden'} borderRadius={2} alignItems={'start'}>
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
                         

                            <VStack gap={'0.5px'} alignItems={'start'} w={'full'} px={3}>
                            <Box>
                                <Text fontSize={'sm'} className='fontstyle' fontWeight={500} color={'gray.700'}>{product.productname} </Text>
                            </Box>

                                <VStack alignItems={'start'} spacing={0} gap={0}>
                                    <Box>
                                    <Text fontSize={17} fontWeight={500} color={'orange.500'}>
                                    ৳ {product.currentprice}
                                    </Text>
                                </Box>

                                <Flex w={'full'} gap={2}>
                                    <Text fontSize={'12'} color={'gray.500'} textDecoration={'line-through'} fontWeight={500}> ৳ {product?.regularprice}</Text>

                                    <Text fontSize={'12'}fontWeight={500} color={'gray.700'} > {Math.floor(((product?.regularprice - product?.currentprice)/product?.regularprice)*100)}%</Text>
                                    
                                </Flex>
                                <Box>
                                <div className='productRatingsHomeCard'>
                                    <ReactStarts {...options} />
                                    <span className="customA">(113)</span>
                                </div>
                                </Box>
                                </VStack>
                            </VStack>
                        </VStack>
                    </Flex>
        </>
  )
}

export default JustForYouCard




