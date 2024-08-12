import { Box, Container, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHomeJustForYouPhoneLeft } from '../../../actions/ProductAction'
import { Loader } from '../../Loader/Loader'
import { DeceveDataPC } from './DeceveDataPC'
import JustForYouPhoneLeftCard from './JustForYouPhoneLeft'
import JustForYouPhoneRightCard from './JustForYouPhoneRightCard'
import pageNumber from './pageNumber'
const JustForYou = () => {
 
  //my code phone left data receive payload /backend
  const dispatch = useDispatch()

  const {HomeForYouProPhoneleft, pagecountproduct ,resultpage , loading:loadingprodcut } = useSelector(state=>state.HomeJustForYouProductsLeft)

  let RanNum = Math.ceil(Math.random() * 4)
  
  const [lastFourRandomNumbers , setLastFourRandomNumbers] = useState([RanNum,5])
  //console.log(lastFourRandomNumbers)
  const [randomNumber, setRandomNumber] = useState(5);  
  const [data, setdata] = useState([])
  useEffect(()=>{
      window.innerWidth < 425 && (
        dispatch(getHomeJustForYouPhoneLeft(RanNum))
    )   
  },[dispatch ])

  useEffect(()=>{
    setdata(HomeForYouProPhoneleft)
  },[HomeForYouProPhoneleft])

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
  const ButtonRef = useRef()
const [successphone , setsuccesphone] = useState(true)
//phone --------------------------------------------------
  useEffect(()=>{
    const handileClickData = async() =>{
            if(window.innerHeight + document.documentElement.scrollTop + 1 >=document.documentElement.scrollHeight) {
              setsuccesphone(false)
                getUniqueRandomNumber(pageNumber(pagecountproduct))
              //  console.log(randomNumber)
                  await dispatch(getHomeJustForYouPhoneLeft(randomNumber)) 
                setdata((predata)=>[...data,...predata] )
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

  },[dispatch,data ,randomNumber,loadingprodcut ,pagecountproduct ])
//phone -------------------------------------------



const loading = useRef()
const justFor = useRef()

  useEffect(()=>{
  //  console.log(HomeForYouProductPC)
  },[  ])


  return (
     <>
         <Container  px={{base:'0.3rem',sm:'1rem',md:'1rem',lg:'1rem'}}   maxW={'container.xl'}>

              <Box py={3}>
                <Text px={ 2} cursor={'pointer'} fontSize={'xl'}  ref={justFor} fontWeight={800}>Just For You  </Text>
                </Box>
              {
                window.innerWidth > 426 && (
             <DeceveDataPC />
   
            )
            }
            {
                window.innerWidth < 425 && (
                    <>
                    <Flex w={'full'} gap={'5px'}p={0} m={0} scrollBehavior={'smooth'}>
                        <Flex scrollBehavior={'smooth'} w={'49.8%'} h={'100%'}  py={1}  gap={2} flexWrap={'wrap'}>
                        {
                            data &&  data?.map((product, index)=>{
                                return(
                                  index % 2 !== 0 && (
                                    <JustForYouPhoneLeftCard key={index} loading={''} product={product} />
                                  )
                                )
                            })
                            
                        }

                    
                       
                        </Flex>
                        <Flex w={'49.8%'}  h={'100%'}   py={1}  gap={2} flexWrap={'wrap'}>
                        
                        {
                           data &&  data?.map((product, index)=>{
                                return(
                                  index % 2  === 0 && (
                                    <JustForYouPhoneRightCard loading={loadingprodcut} key={index} product={product} />
                                  )
                                )
                            })
                            
                        }
                        </Flex>
                       
                    </Flex>

                      <Loader data={data} resultpage={resultpage} pagecountproduct={pagecountproduct} />
                    
                    </>
                    
                )
            }
            </Container>
     </>
  )
}

export default JustForYou
