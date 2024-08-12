import { Container, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductFlashSalePc } from '../../../actions/ProductAction'
import FashsaleMobailLeft from './FashsaleMobailLeft'
import FrashSaleCard from './FrashSaleCard'
import FreashSaleLeftOneCard from './Freshsalephone/FreashSaleLeftOneCard'
const FrashSaleBody = () => {
    const dispatch = useDispatch()
    const {FlashSaleProducts,loading,error} = useSelector(state => state.FlashSalePc)
    
    React.useEffect(() => {
        const resultpage = 16
        window.innerWidth > 764 && dispatch(getProductFlashSalePc(resultpage))
    }, [dispatch])
  return (
   <>
    {
        window.innerWidth > 764 ? (
        
        <>
            <Container   maxW={'container.xl'}>
                <Flex className='frashcardScroollbar' py={1}  gap={0.5} scrollBehavior={'smooth'} overflowX={'scroll'}>
                    {
                        FlashSaleProducts && FlashSaleProducts.map((product,index)=> {
                            return (
                                <FrashSaleCard key={index} product={product} />
                            )
                        })
                    }
                  
           

                </Flex>
            </Container>
        </>) : (
        
        <>
            <Container py={4}  maxW={'container.xl'}>
                <Flex bg={'white'} px={1} py={4}>

                    {
                        <FreashSaleLeftOneCard />
                    }
           

                 <Flex flex={1}>
                    <VStack spacing={5} alignItems={'start'}>
                    <FashsaleMobailLeft />
              
                    </VStack>
               
               </Flex>
            
                </Flex>
            </Container>
        </>)
    }
   </>
  )
}

export default FrashSaleBody
