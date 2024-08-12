import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import ReactStarts from "react-rating-stars-component";
import { Link } from 'react-router-dom';


export const SearchProductRight = ({product}) => {
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
    <Flex _hover={{shadow:{base:'xl', md:'2xl'}}} bg={'white'} w={{base:'100%', sm:'100%',md:'24.5%', lg:'24.5%'}}   className='cardshop' borderRadius={'0.4rem'} overflow={'hidden'}>
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

                   <VStack gap={0} alignItems={'start'} w={'full'} px={3}>
                   <Box>
                       <Text fontSize={'sm'} fontWeight={500}>Pure and Natural Dried Fried Peanut </Text>
                   </Box>

                       <VStack w={'full'} alignItems={'start'} spacing={0} gap={0}>
                           <Box w={'full'}>
                           <Flex gap={2} alignItems={'center'} w={'full'}>
                             <Box>  <Text fontSize={17} fontWeight={500} color={'orange.500'}>
                               ৳ 175
                               </Text></Box>

                                   <Flex  gap={2}>
                                   <Text fontSize={'12px'} fontWeight={500} color={'gray.500'} textDecoration={'line-through'}> ৳ 200</Text>

                                   <Text fontSize={'12'}fontWeight={500} color={'gray.700'} > -40%</Text>
                                   
                                   </Flex>
                           </Flex>
                           </Box>

                
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
                           <Button cursor={'none'} w={'full'} h={'2rem'} borderRadius={0} colorScheme={'#00c4cc'} bg={'#00c4cc'}>Add to cart</Button>
                       </Flex>
               </VStack>
           </Flex>
</>
  )
}
