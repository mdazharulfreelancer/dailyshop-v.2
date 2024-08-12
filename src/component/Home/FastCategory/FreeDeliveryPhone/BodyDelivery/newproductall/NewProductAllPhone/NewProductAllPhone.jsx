import { Box, Container, Flex, Image, Link, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFreeDalivaryPhone } from '../../../../../../../actions/ProductAction'
import { Loader } from '../../../../../../Loader/Loader'
import pageNumber from '../../../../../JustForYou/pageNumber'
import NewProductLeftCard from './NewProductCardPhoneLeft'

const NewProductAllPhone = () =>  {
  
  const dispatch = useDispatch()
  const {freeproducts, pagecountproduct ,resultpage , loading:loadingprodcut } = useSelector(state=>state.freedalivariPhone)

  let RanNum = Math.ceil(Math.random() * 4)


  const [lastFourRandomNumbers , setLastFourRandomNumbers] = useState([RanNum,5])
  const [randomNumber, setRandomNumber] = useState(5);  

   const [data, setdata] = useState([])
  useEffect(()=>{
{  window.innerWidth < 425 && (
    dispatch(getFreeDalivaryPhone(RanNum))
  )   
}
  },[dispatch ])

  useEffect(()=>{
   setdata(freeproducts)
  },[freeproducts])

    //function
    const getUniqueRandomNumber = (numbers) => { 
      console.log(numbers)
      console.log(numbers)
      if(lastFourRandomNumbers.length === numbers.length ){
          return null
      }
      let newRandomNumber;
      do {
        newRandomNumber = Math.floor(Math.random() * numbers.length );
      } while (lastFourRandomNumbers.includes(newRandomNumber) || newRandomNumber === 0 || newRandomNumber === 1 && newRandomNumber === 5 ) ;
       setRandomNumber(newRandomNumber )   
   
       setLastFourRandomNumbers((prev) => {
        const newLastFour = [...prev, newRandomNumber];
        return newLastFour;
      })
  
  }
  
const [successphone , setsuccesphone] = useState(true)
  useEffect(()=>{
    const handileClickData = async() =>{
            if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
              setsuccesphone(false)
              getUniqueRandomNumber(pageNumber(pagecountproduct))
                await dispatch(getFreeDalivaryPhone(randomNumber)) 
                setdata((predata)=>[...data,...predata ] )
                setsuccesphone(true)
            }            
    }     
   const pageLength = (pagecountproduct - 4) * resultpage
   const dataLength = data.length
   if( !loadingprodcut && successphone) {
      if(dataLength < pageLength)  {
        window.innerWidth < 425  && (
            window.addEventListener('scroll', handileClickData)
        )     
      }  
   }

    return () => { 
       window.removeEventListener('scroll', handileClickData); 
   }

  },[dispatch,data, randomNumber,loadingprodcut ,pagecountproduct])


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
  
                    
        
                         <Loader data={data} pagecountproduct={pagecountproduct} resultpage={resultpage} />
               
                      </VStack>
                  </Container>
  
  
          
          </>
    )
  }
  

export default NewProductAllPhone
