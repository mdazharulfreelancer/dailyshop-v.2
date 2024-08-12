import { Box, Container, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const promotion = [ 
        {
            img :"https://img.alicdn.com/imgextra/i4/O1CN01Tp04IC1x3IWhZt8RK_!!6000000006387-2-tps-72-72.png",
            title : "Free Shipping"
        },
        {
            img :"https://img.alicdn.com/imgextra/i4/O1CN01Tp04IC1x3IWhZt8RK_!!6000000006387-2-tps-72-72.png",
            title : "Best Dials"
        },
        {
            img :"https://img.alicdn.com/imgextra/i4/O1CN01Tp04IC1x3IWhZt8RK_!!6000000006387-2-tps-72-72.png",
            title : "Free Shipping"
        }
    ]
    const categori = [ 
        {
            img :"https://img.alicdn.com/imgextra/i4/O1CN01Tp04IC1x3IWhZt8RK_!!6000000006387-2-tps-72-72.png",
            title : "t-shirt"
        },
        {
            img :"https://img.alicdn.com/imgextra/i4/O1CN01Tp04IC1x3IWhZt8RK_!!6000000006387-2-tps-72-72.png",
            title : "Table"
        },
        {
            img :"https://img.alicdn.com/imgextra/i4/O1CN01Tp04IC1x3IWhZt8RK_!!6000000006387-2-tps-72-72.png",
            title : "Phone"
        }
    ]

    const Color = [ 
        {
            bg :"red",
            title : "red"
        },
        {
            img :"green",
            title : "green"
        },
        {
          bg :"blue",
            title : "blue"
        }
    ]
  return (
    <>
        <Flex  >
            <Container maxW={'container.sm'}>
                <VStack py={2} spacing={2} gap={2} alignItems={'start'}>
                    <Flex>
                        <Text fontSize={21} fontWeight={600} color={'gray.500'}>Filters</Text>
                    </Flex>

                    <VStack alignItems={'start'}  mt={5}>
                        <Box borderBottom={'1px solid'} borderColor={'gray.300'} >
                            <Text fontSize={18} fontWeight={600} color={'gray.500'}>Promotion & Services</Text>
                        </Box>

                        <VStack display={'flex'} flexWrap={'wrap'} alignItems={'start'}>

                            {
                                promotion && promotion.map((item, i) => (
                                    <Flex as={Link} key={i} border={'1px solid'} borderColor={'gray.300'} _hover={{borderColor:'red'}} px={2}py={1} borderRadius={5} alignItems={'center'} justifyContent={'center'} gap={1}>
                                        <Image w={6} src={item.img} />

                                        <Box>
                                            <Text fontSize={14} fontWeight={500} color={'gray.800'}>{item.title}</Text>
                                        </Box>
                                    </Flex>
                                ))
                            }
     
                        </VStack>
                    </VStack>
                    
                    {/* Sub Categories */}
                    <VStack alignItems={'start'}  mt={5}>
                        <Box borderBottom={'1px solid'} borderColor={'gray.300'} >
                            <Text fontSize={18} fontWeight={600} color={'gray.500'}>Sub Categoris</Text>
                        </Box>

                        <VStack w={'full'} display={'flex'} flexWrap={'wrap'} alignItems={'start'}>

                            {
                                categori && categori.map((item, i) => (
                                    <Flex flexWrap={'wrap'} as={Link} key={i} border={'1px solid'} borderColor={'gray.300'}  px={2}py={1} borderRadius={5} alignItems={'center'} justifyContent={'center'} gap={1}>
                                        <Box w={4} h={4} border={'1px solid'} borderColor={'gray.500'} borderRadius={'50%'}></Box>

                                        <Box>
                                            <Text fontSize={14} fontWeight={500} color={'gray.800'}>{item.title}</Text>
                                        </Box>
                                    </Flex>
                                ))
                            }
     
                        </VStack>
                    </VStack>


                    {/* Color */}
                    <VStack alignItems={'start'} w={'full'}  mt={5}>
                        <Box w={'full'} borderBottom={'1px solid'} borderColor={'gray.300'} >
                            <Text w={'full'} fontSize={18} fontWeight={600} color={'gray.500'}>Color</Text>
                        </Box>

                        <VStack w={'full'} display={'flex'} flexWrap={'wrap'} alignItems={'start'}>

                            {
                                Color && Color.map((item, i) => (
                                    <Flex  as={Link} key={i} border={'1px solid'} borderColor={'gray.300'}  px={2}py={1} borderRadius={5} alignItems={'center'} justifyContent={'center'} gap={1}>
                                        <Box w={4} h={4} borderColor={'gray.500'} bg={item.bg} ></Box>

                                        <Box>
                                            <Text fontSize={14} fontWeight={500} color={'gray.800'}>{item.title}</Text>
                                        </Box>
                                    </Flex>
                                ))
                            }
     
                        </VStack>
                    </VStack>

                </VStack>
            </Container>
        </Flex>
    </>
  )
}

export default Sidebar
