import { Box, Flex, Image, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllNewLowPricePhone } from '../../../../../../actions/ProductAction'
import { Loader } from '../../../../../Loader/Loader'
import pageNumber from '../../../../JustForYou/pageNumber'
import LowPricephoneLeftCard from './LowPricephoneLeftCard'

export const DataRecevePhone = () => {
    const dispatch = useDispatch()
    const {everylowproduct, pagecountproduct ,resultpage , loading:loadingprodcut } = useSelector(state=>state.lowpriceproductphone)
  
    let RanNum = Math.ceil(Math.random() * 4)
  
     const [data, setdata] = useState([])
    useEffect(()=>{
    
  {  window.innerWidth < 425 && (
      dispatch(getAllNewLowPricePhone(RanNum))
    )   
  }  
    },[dispatch ])

    useEffect(()=>{
        setdata(everylowproduct)
    },[everylowproduct])
    const [lastFourRandomNumbers , setLastFourRandomNumbers] = useState([RanNum,3])
    const [randomNumber, setRandomNumber] = useState(3);  
    //function
    const getUniqueRandomNumber = (numbers) => { 
      //console.log(numbers)
  //    console.log(numbers)
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
              if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setsuccesphone(false)
                  getUniqueRandomNumber(pageNumber(pagecountproduct))
                //  console.log(randomNumber)
                   await  dispatch(getAllNewLowPricePhone(randomNumber)) 
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
  
    },[dispatch,data ,randomNumber,loadingprodcut ,pagecountproduct])
  return (
    <VStack alignItems={'start'}>
    <Box cursor={{base:'none', md:'pointer'}}  as={Link} w={'full'}>
        <Image  src='https://res.cloudinary.com/daxvmjaff/image/upload/v1705217821/evryday_afyvkj.png'/>
    </Box>

    <Flex w={'full'} gap={2} py={1} flexWrap={'wrap'}  >

       <Flex w={'48.5%'} h={'100%'}  py={1}  gap={{base:'6px',sm:0.5}} flexWrap={'wrap'}>
          {
        data &&  data?.map((product, index)=>{
              return(
                index % 2 === 0 && (
                  <LowPricephoneLeftCard key={index} product={product} index={index} />
                )
              )
            })
          }
       </Flex>

    
       <Flex w={'48.5%'} h={'100%'}  py={1}  gap={{base:'6px',sm:0.5}} flexWrap={'wrap'}>
          {
            data &&  data?.map((product, index)=>{
              return(
                 index % 2 !== 0 && (
                  <LowPricephoneLeftCard key={index} product={product} index={index} />
                 )
              )
            })
          }
       </Flex>                
    
       <Loader data ={data} resultpage ={resultpage} pagecountproduct={pagecountproduct} />
       
    </Flex>


   </VStack>
  )
}
