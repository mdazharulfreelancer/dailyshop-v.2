import { StarIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const FreshSaleCategorycard = ({product}) => {
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
    const [isHovering, setIsHovering] = React.useState(true);


  return (
    <>
                    <Flex w={'100%'} as={Link} to={`/ditals-product/${product._id}/${product?.productname}`} gap={2} bg={'white'}px={2} py={2}>
      {    product?.productimage && product?.productimage.map((image,     index)=>{
                                return(
                                    index === 0 && (
                                        <Box  position={'relative'} borderRadius={4} overflow={'hidden'} key={index} w={'30%'}h={24} pl={1} >
                                        <Image backdropFilter={'contrast(40%)'} bg={'gray.500'} w={'full'} h={'full'}  src={image.url} alt={product.productname} />

                                        {
                                isHovering && (
                                    <Box pos={'absolute'} top={0} left={0} w={'full'}  h={'full'} bg={'rgba(27, 27, 27, 0.151)'}>
                                    </Box>
                                )
                            }
                                    </Box>
                                    )
                               
                                )
                             })}
                <Flex w={'70%'}>
                    <VStack w={'100%'} alignItems={'start'}>
                        <Box>
                            <Text fontSize={'14px'}fontWeight={500} className='fontstyle' >{product?.productname}</Text>
                        </Box>
                        <VStack gap={0} alignItems={'start'}>
                            
                        <Flex gap={2}>
                        <Box>
                            <Text color={'orange.600'}>৳ {product?.currentprice?.length > 5 ? product?.currentprice?.slice(0,5) : product.currentprice}</Text>
                        </Box>  
                        <Box>
                            <Text  color={'gray.500'} textDecoration={'line-through'}>৳ {product?.regularprice?.length > 5 ? product?.regularprice?.slice(0,5) : product.regularprice}</Text>
                        </Box>  
                        </Flex>  

                            <Flex gap={1}>

                            <Flex py={0} bg={'yellow.500'} px={3} borderRadius={10} alignItems={'center'} gap={1}>
                            <Box w={2}>
                                <StarIcon color={'white'} w={2} h={2} />
                            </Box>
                            <Box>
                                <Text fontWeight={500}  fontSize={10} color={'white'}>4/5</Text>
                            </Box>
                        </Flex>  

                        <Flex>


                        <Flex py={0} bg={'yellow.500'} px={3} borderRadius={10} w={'100px'} alignItems={'center'} gap={1}>
                      
    
                            <Box>
                                <Text fontWeight={500}  fontSize={10} color={'white'}>19 sold</Text>
                            </Box>
                        </Flex>  


                        </Flex>
                            </Flex>
                        </VStack>    
                    </VStack>
                </Flex>
            </Flex>
    </>
  )
}

export default FreshSaleCategorycard
