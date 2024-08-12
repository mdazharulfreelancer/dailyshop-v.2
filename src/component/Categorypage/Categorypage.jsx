import { Box, Button, Flex, VStack } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProductPC, getCategoryProductPhone } from '../../actions/ProductAction'
import pageNumber from '../Home/JustForYou/pageNumber'
import CategoriProductCard from './CategoriproductCard'
import CategoriProductCardLeft from './CategoriProductCardLeft'
import CategoriProductCardRight from './CategoriProductCardRight'


const Categorypage = () => {
   const dispatch = useDispatch()
   const {categoryroducts , loading, pagecountproduct,resultpage} = useSelector((state => state.categoryprodcut))
   const {categoryroductpc, pagecountproduct:pagecountproductpc, resultpage:resultpagepc, loading:loadingpc} = useSelector((state)=>state.CategoryProductPc)

//rando, number for defalt pages
   let RanNum = Math.ceil(Math.random() * 5)
   
   const [data , sedata ] = useState([])
   const [lastFourRandomNumbers , setLastFourRandomNumbers] = useState([RanNum,5])
   const [randomNumber, setRandomNumber] = useState(5);  
//phone------phone
    useEffect(()=>{
     window.innerWidth < 425 && (
      dispatch(getCategoryProductPhone(RanNum))
     )
    },[dispatch ])

    useEffect(()=>{
      sedata(categoryroducts)
    },[categoryroducts])

//console.log(lastFourRandomNumbers)
     //function
  const getUniqueRandomNumber = (numbers) => { 
       // console.log(numbers)
     //   console.log(numbers)
        if(lastFourRandomNumbers.length === numbers.length ){
            return null
        }
        let newRandomNumber;
        do {
          newRandomNumber = Math.floor(Math.random() * numbers.length );
        } while (lastFourRandomNumbers.includes(newRandomNumber) || newRandomNumber === 0 || newRandomNumber === 1 || newRandomNumber === 5 ) ;
         setRandomNumber(newRandomNumber )   
     
         setLastFourRandomNumbers((prev) => {
          const newLastFour = [...prev, newRandomNumber];
          return newLastFour;
        })
    
    }

    useEffect(()=>{
     
    const handlescoll = async() =>{
      if(window.innerHeight + document.documentElement.scrollTop + 1>=document.documentElement.scrollHeight) {
        getUniqueRandomNumber(pageNumber(pagecountproduct))
         await dispatch(getCategoryProductPhone(randomNumber))
         sedata((pre) =>[...pre, ...data])
      }
    }

   const pageLength = (pagecountproduct - 4) * resultpage
   const dataLength = data.length
   if(!loading){
    if(dataLength < pageLength){
      window.innerWidth < 425 && (
        window.addEventListener('scroll', handlescoll)   
      )
    }
   }
    return(() =>{
      window.removeEventListener('scroll', handlescoll)
    }) 
  },[dispatch ,data, loading,randomNumber, pagecountproduct ])

  //end phone-----------------------------------


//pc-----------------compouter----------------------
const [datapc ,setdatapc] = useState([])
useEffect(()=>{
  window.innerWidth > 426 && (
     dispatch(getCategoryProductPC(RanNum))
 )
},[dispatch ])
  
useEffect(()=>{
   setdatapc(categoryroductpc)
},[categoryroductpc])
 const Buttonref = useRef()


 const [lastFourRandomNumberspc , setLastFourRandomNumberspc] = useState([RanNum,5])
//console.log(lastFourRandomNumberspc)
const [randomNumberpc, setRandomNumberpc] = useState(5);  
  //function
  const getUniqueRandomNumberpc = (numbers) => { 
    console.log(numbers)
    console.log(lastFourRandomNumberspc)
    if(lastFourRandomNumberspc.length === numbers.length ){
        return null
    }
    let newRandomNumber;
    do {
      newRandomNumber = Math.floor(Math.random() * numbers.length );
    } while (lastFourRandomNumberspc.includes(newRandomNumber) || newRandomNumber === 0 || newRandomNumber === 1 || newRandomNumber === 5 ) ;
    setRandomNumberpc(newRandomNumber )   
 
     setLastFourRandomNumberspc((prev) => {
      const newLastFour = [...prev, newRandomNumber];
      return newLastFour;
    })

}
  useEffect(()=>{
    const handileClickDatapc =async () =>{
 
        getUniqueRandomNumberpc(pageNumber(pagecountproductpc))
       window.innerWidth > 425 && (
          await  dispatch(getCategoryProductPC(randomNumberpc))
       )
       setdatapc((pre)=>[...pre,...datapc])
      
    }
   
    const pageLength = (pagecountproductpc - 4) * resultpagepc
    const dataLength = datapc.length

    if(!loadingpc){
      if(dataLength < pageLength)  {
      Buttonref.current && Buttonref.current.addEventListener('click', handileClickDatapc)
    }
  }
    
    return(() =>{
      Buttonref.current && Buttonref.current.removeEventListener('click' ,handileClickDatapc)
    })
  },[dispatch,datapc,resultpagepc,randomNumberpc,pagecountproductpc,loadingpc])

 //function
//pc------------------------------------------
  return (
    <>
      <Box px={{base:0, md:5}} >
          <VStack alignItems={'start'}>
             <Flex>HEader {data?.length}</Flex>
             {
              window.innerWidth > 425 &&(
              
              <Box minH={'102vh'}>

               <Flex w={'full'}  py={1}  gap={0.5} flexWrap={'wrap-reverse'}  >
      
                  {
                    datapc && datapc?.map((product, index) => {
                        return(
                          <CategoriProductCard key={index} product={product} />
                        )
                    })
                  }

         

              </Flex>

                  <Box py={3} w={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        {/* loadmore button */}
                    
                       {
                         !loadingpc && !loadingpc ? (
                         <Button   ref={Buttonref}  w={'400px'} colorScheme="pink" variant="outline">
                            Load More
                        </Button>
                         ) :(
                            <Button  isLoading ref={Buttonref}  w={'400px'} colorScheme="pink" variant="outline">
                            Load More
                        </Button>
                         )
                       
                        }
                       
                    </Box>
              
             </Box>
         
              )
          }
          {
            window.innerWidth < 430 && (
              <Flex w={'full'} gap={'4px'}p={0} m={0}>
              <Flex  h={'100%'}  py={1} w={'49.6%'}  gap={2} flexWrap={'wrap-reverse'}>
             
              {
       
                  data &&  data?.map((product, index) =>{
                    return(
                      index % 2 === 0 && (
                        <CategoriProductCardLeft key={index} loading ={loading} product={product}/>
                      )
                    )
                  })    
              }
           
              </Flex>
              <Flex   h={'100%'} w={'49.6%'}   py={1}  gap={2} flexWrap={'wrap-reverse'}>
           {
             data &&  data?.map((product, index)=>{
              return( 
                 index % 2 !== 0  && (
                  <CategoriProductCardRight key={index} product={product}/>
                 )
              )
            })

          }
          
           
          
   

       

              
           
              </Flex>
             
          </Flex>
            )
          }
          </VStack>
      </Box>
    </>
  )
}

export default Categorypage
