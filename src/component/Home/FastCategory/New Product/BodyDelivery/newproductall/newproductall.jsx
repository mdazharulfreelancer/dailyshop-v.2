import { Box, Container, Flex, Image, Link, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getNewProductPC } from '../../../../../../actions/ProductAction'
import MiddleImage from '../../Image/MiddleImage'
import NewProductCard from './newproductcard'

const NewProductAll = ({}) => {
 
  const dispatch = useDispatch()
  const {newproducts, loading, pagecountproduct : pagecountproductpc, resultpage} = useSelector((state)=>state.NewProductsPc)


  useEffect(()=>{
   window.innerWidth > 426 && (
       dispatch(getNewProductPC(1))

  )
},[dispatch ])

//console.log(RanNum)
//console.log(lastFourRandomNumberspc)
const [randomNumberpc, setRandomNumberpc] = useState(2);  
const [datapc, setdatapc] = useState([])
  //function
//pc------------------------------------------
const [succsesspc, setSuccessPc] = useState(true)
useEffect(()=>{
    const handileClickDatpc = async() =>{
      
      if (window.innerHeight + document.documentElement.scrollTop + 1 >=        document.documentElement.scrollHeight){
        setSuccessPc(false)
              //  console.log(randomNumber)
              await  dispatch(getNewProductPC(randomNumberpc))
                setRandomNumberpc(randomNumberpc + 1) 
                setdatapc((predata)=>[...predata, ...newproducts ] )
                setSuccessPc(true)
      }     
    }     
      const pageLength = (pagecountproductpc - 2) * resultpage
      const dataLength = datapc.length
 

    if( !loading && succsesspc) {
        if(dataLength < pageLength)  {
          
            window.innerWidth > 426  && (
              window.addEventListener('scroll', handileClickDatpc)  
             )   
          
       
        }  
     }

    
    return () => { 
        window.removeEventListener('load' ,handileClickDatpc)
        window.removeEventListener('scroll', handileClickDatpc)  ; 
   }

  },[dispatch,newproducts,datapc ,randomNumberpc,loading,pagecountproductpc ,resultpage])
//pc------------------------------------------


  return (
        <>
                <Container maxW={'container.xl'} p={{base:'4px', sm:'1rem'}}>
                     <VStack alignItems={'start'}>
                        <Box  cursor={{base:'none', md:'pointer'}}  as={Link} w={'full'}>
                            <Image  src='https://res.cloudinary.com/daxvmjaff/image/upload/v1705217546/New_Product_h63hm2.png'/>
                        </Box>

                   <Flex w={'full'}  py={1}  gap={{base:'6px',sm:0.5}} flexWrap={'wrap'}>
                    {
                       datapc && datapc?.map((product, index)=>{
                            return(
                               <NewProductCard key={index}index={index} product={product} />
                                
                            )
                        })
                    }
                  
                
           
       
                    </Flex>

                    <Box>
                      <MiddleImage />
                    </Box>
                    </VStack>
                </Container>


        
        </>
  )
}

export default NewProductAll
