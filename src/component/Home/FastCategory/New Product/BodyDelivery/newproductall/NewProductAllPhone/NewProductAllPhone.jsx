import { Box, Container, Flex, Image, Link, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNewProductPhone } from '../../../../../../../actions/ProductAction'
import { Loader } from '../../../../../../Loader/Loader'
import NewProductLeftCard from './NewProductCardPhoneLeft'

const NewProductAllPhone = () =>  {
 
  const dispatch = useDispatch()
  const {newproducts, pagecountproduct ,resultpage , loading:loadingprodcut } = useSelector(state=>state.newproductphone)

  const [lastFourRandomNumbers , setLastFourRandomNumbers] = useState([1,5])
  const [randomNumber, setRandomNumber] = useState(2);  
   const [data, setdata] = useState([])
  useEffect(()=>{
{  window.innerWidth < 425 && (
    dispatch(getNewProductPhone())
  )   
}
  },[dispatch ])

  useEffect(()=>{
    setdata(newproducts)
  },[newproducts])

  useEffect(()=>{
    const handileClickData = async() =>{
            if(window.innerHeight + document.documentElement.scrollTop + 1 >=document.documentElement.scrollHeight) {
                setRandomNumber(randomNumber + 1)
               await dispatch(getNewProductPhone(randomNumber)) 
                setdata((predata)=>[...data,...predata  ] )
            }            
    }     
   const pageLength = (pagecountproduct - 2) * resultpage
   const dataLength = data.length
   if( !loadingprodcut) {
      if(dataLength < pageLength)  {
        window.innerWidth < 425  && (
            window.addEventListener('scroll', handileClickData)
        )     
      }  
   }

    return () => { 
       window.removeEventListener('scroll', handileClickData); 
   }

  },[dispatch,data ,randomNumber,loadingprodcut ,pagecountproduct])


    return (
          <>
                  <Container maxW={'container.xl'} p={{base:'4px', sm:'1rem'}}>
                       <VStack alignItems={'start'}>
                          <Box cursor={{base:'none', md:'pointer'}}  as={Link} w={'full'}>
                              <Image  src='https://res.cloudinary.com/daxvmjaff/image/upload/v1705217546/New_Product_h63hm2.png'/>
                          </Box>
  
                        <Flex w={'full'} gap={2} py={1} flexWrap={'wrap'}>

                        <Flex w={'48.5%'} h={'100%'}  py={1}  gap={{base:'6px',sm:0.5}} flexWrap={'wrap'}>
                      {
                         data &&  data?.map((product, index)=>{
                              return(
                                index % 2 === 0 && (
                                  <NewProductLeftCard key={index}index={index} product={product} />
                                )
                               
                                  
                              )
                          })
                      }
                    
                  
             
         
                      </Flex>

                      <Flex w={'48.5%'} h={'100%'} py={1}  gap={{base:'6px',sm:0.5}} flexWrap={'wrap'}>
                      {
                           data &&  data?.map((product, index)=>{
                              return(  
                                  index % 2 !== 0 && (
                                    <NewProductLeftCard key={index}index={index} product={product} />
                                  )             
                                  
                              )
                          })
                      }
         
                      </Flex>
                        </Flex>
                    <Loader data={data} resultpage={resultpage} pagecountproduct={pagecountproduct} /> 
                         
                      </VStack>
                  </Container>
  
  
          
          </>
    )
  }
  

export default NewProductAllPhone
