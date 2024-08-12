import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHomeJustForYouProductPc } from '../../../actions/ProductAction'
import JustForYouCard from './JustForYouCard'
import pageNumber from './pageNumber'

export const DeceveDataPC = () => {
    const dispatch = useDispatch()

    const {HomeForYouProductPC, pagecountproduct:pagecountproductpc ,resultpage:resultpagepc , loading:loadingprodcutpc ,defatPage:defatPagepc } = useSelector(state=>state.HomeJustForYouProductsPc)
    let RanNum = Math.ceil(Math.random() * 4)
    //pc start clean code

const ButtonRefpc = useRef()
//console.log(RanNum)

  const [lastFourRandomNumbers , setLastFourRandomNumbers] = useState([RanNum,5])
  //console.log(lastFourRandomNumbers)
  const [randomNumber, setRandomNumber] = useState(5);  
  const [data, setdata] = useState([])
  useEffect(()=>{
      window.innerWidth > 425 && (
        dispatch(getHomeJustForYouProductPc(RanNum))
    )   
  },[dispatch ])

  useEffect(()=>{
    setdata(HomeForYouProductPC)
  },[HomeForYouProductPC])

  //function
  const getUniqueRandomNumber = (numbers) => { 
//    console.log(numbers)
 //   console.log(numbers)
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
//phone --------------------------------------------------
  useEffect(()=>{
    const handileClickData = async() =>{
   
              setsuccesphone(false)
                getUniqueRandomNumber(pageNumber(pagecountproductpc))
              //  console.log(randomNumber)
                  await dispatch(getHomeJustForYouProductPc(randomNumber)) 
                setdata((predata)=>[...data,...predata] )
                setsuccesphone(true)
                      
    }     
   const pageLength = (pagecountproductpc - 4) * resultpagepc
   const dataLength = data.length

    if( !loadingprodcutpc && successphone) {
        if(dataLength < pageLength)  {
          window.innerWidth > 425  && (
              ButtonRefpc.current && ButtonRefpc.current.addEventListener('click', handileClickData)
          )     
        }  
     }


    return () => { 
        ButtonRefpc.current && ButtonRefpc.current.removeEventListener('click', handileClickData); 
   }

  },[dispatch,data ,randomNumber,loadingprodcutpc ,pagecountproductpc ])
//phone -------------------------------------------
//pc------------------------------------------
//pc------------------------------------------
  return (
<>

        
                    <>
                  
                 {
             
                    <Flex w={'full'}   py={1}  gap={0.5} flexWrap={'wrap'}>
               
                    <>
                          {
                         data && data?.map((product, index)=>{
                            return(
                                <JustForYouCard key={index} product={product} />
                            )
                        })
                        
                    }
                    </>
                    </Flex>
                   
     }           
          
        
                    <Box py={3} w={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        {/* loadmore button */}
                    
                       {
                         !loadingprodcutpc && !loadingprodcutpc ? (
                         <Button   ref={ButtonRefpc}  w={'400px'} colorScheme="pink" variant="outline">
                            Load More
                        </Button>
                         ) :(
                            <Button  isLoading ref={ButtonRefpc}  w={'400px'} colorScheme="pink" variant="outline">
                            Load More
                        </Button>
                         )
                       
                        }
                       
                    </Box>


                    </>

              
</>
  )
}
