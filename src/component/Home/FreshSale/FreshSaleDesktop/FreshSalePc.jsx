import { Box, Container, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductFlashSalePcPage } from '../../../../actions/ProductAction'
import TopDeals from './TopDials/TopDeals'
import FreshSaleCardPc from './freashSaleCard'

const FreshSalePc = () => {
    const dispatch = useDispatch()
    const {FlashSaleProducts,loading,error, resultpage,pagecount} = useSelector(state => state.FlashSalePcPage)
    
    React.useEffect(() => {   
        dispatch(getProductFlashSalePcPage())
  
      }, [dispatch])
    const [data, setData] = React.useState([])
    
  
    React.useEffect(() => {

        console.log(resultpage)
        console.log(pagecount)
        const handlescroll = () => { 
            // User has scrolled to the bottom
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {

                if ( data.length  < pagecount * resultpage) {
                    dispatch(getProductFlashSalePcPage())
                    setData((predata)=>[...predata,...FlashSaleProducts ] )
                }          
            }
        }

        window.addEventListener('scroll', handlescroll);

        return () => {
            window.removeEventListener('scroll', handlescroll);
          }
     }, [FlashSaleProducts, dispatch, data,pagecount, resultpage])
  return (
    <>
    <Box mt={'-8px'}>
    <Flex>
        <Box w={'full'}>
        <Image src={'https://raw.githubusercontent.com/mdazharul869/all-img/main/Fr%20(1).png'} alt="Fresh Sale Header" />
        </Box>
            </Flex>
    </Box>
       <VStack w={'full'} alignItems={'start'}>
           <Container w={'full'} maxW={'container.xl'}>
           <Flex className='headerflash'>
                Header
            </Flex>
           </Container>

            <Flex w={'full'} className='bodyflash'>
                <Container w={'full'} maxW={'container.xl'}>
                    <VStack alignItems={'start'}>

                        <Box w={'full'} className='headerflash'>
                            <TopDeals />
                        </Box>

                        <Flex className='tittle'>
                            <Box>
                                <Text fontSize={'2xl'} fontWeight={'bold'}>Fresh Sale</Text>
                            </Box>
                        </Flex>

                        <Flex w={'full'}  className='bodyflash'>
                        <Flex w={'full'}   py={1}  gap={0.5} flexWrap={'wrap'}>
                            { 
                                data && data.map((product,index)=> {
                                    return (
                                        <FreshSaleCardPc key={index} product={product} />
                                    )
                                })
                            }
                          
                             
    
                
                            </Flex>
                        </Flex>

                    </VStack>
                </Container>
            </Flex>
       </VStack>
    </>
  )
}

export default FreshSalePc
