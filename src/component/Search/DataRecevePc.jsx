import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProductPC } from '../../actions/ProductAction'
import { LoadingCard } from './LoadingCard'
import { SearchProductCard } from './SearchProductCard'

export const DataRecevePc = () => {
     const dispatch = useDispatch()
    const {categoryroductpc, pagecountproduct:pagecountproductpc, resultpage:resultpagepc, loading:loadingpc} = useSelector((state)=>state.CategoryProductPc)
    const [pageNumebr , setPageNumber] = useState(1)
    useEffect( () =>{
      window.innerWidth > 425 && (
        dispatch(getCategoryProductPC(pageNumebr))
      )
    
    },[dispatch ,pageNumebr])
 
 
    const [maxPageNumberLimit, setMaxPageNumberLimit] = React.useState(
        window.innerWidth < 600 ? 3 : 5
    );
    const [minPageNumberLimit, setMinPageNumberLimit] = React.useState(1);

   let page = [];

   for(let i = 1; i < pagecountproductpc; i++ ) {
    page.push(i)
   }

   useEffect(() =>{

   },[ ])

   const lodingdata = [
    {},{},{},{},{},{},{},{}
   ]

 const  handleClickResultNumber = (number) =>{
    window.scrollTo(0, 0)
    setPageNumber(number)
 
     if(number > 2){
        const d = number - 2;
        setMinPageNumberLimit(d);
        const e = number + 2;
        setMaxPageNumberLimit(e)
     }
   }
    const renderPageNumbers = page?.map((number)=> {
   if(number <= maxPageNumberLimit && number >= minPageNumberLimit) {

     return (
        <li onClick={()=>handleClickResultNumber(number)} style={{fontSize:'19px',cursor:'pointer', listStyle:'none',padding:'0.2rem 1.3rem', background:'#1A202C', fontWeight:500 }} key={number} id={number}  >{number}</li>
     )
   } else {
    return null;
} 
   



    })
  return (
     <>
       {
                  window.innerWidth > 426 &&(
                  <Box w={'full'} >
                   <Flex w={'full'}  py={1}  justifyContent={'space-between'} flexWrap={'wrap'}>

                   
                    {
           
                        loadingpc && loadingpc ? (
                            lodingdata && lodingdata?.map((el , index) =>{
                                return(
                                    <LoadingCard key={index}/>
    
                                )     
                            })      
                       ):(
                        categoryroductpc && categoryroductpc?.map((product, index)=>{
                            return(
                                <SearchProductCard key={index} product={product} />
                            )
                        }) 
                       )
                   }
                        
     
                  </Flex>

          <Box color={'#fff'} pb={'10rem'} display={'flex'} pt={5}  justifyContent={'center'} alignItems={'center'} w={'100%'} h={'auto'} bg={'gray.800'} >
          <Flex justifyContent={'start'} alignItems={'center'} w={'100%'} h={'auto'} bg={'gray.800'} >
            <Flex  justifyContent={'start'} alignItems={'center'} minW={'10%'} maxW={'100%'} pr={2} h={'2.5rem'} bg={'gray.900'} gap={2} >
       
                <Box  cursor={'pointer'} w={'2rem'} h={'full'} bg={'#22543D'} color={'whiteAlpha.700'} display={'flex'} justifyContent={'center'} alignItems={'center'} fontSize={'1.5rem'} >{'<'}</Box>
              {  renderPageNumbers}
                    <Box>...</Box>

                    <li  style={{fontSize:'19px',cursor:'pointer', listStyle:'none',padding:'0.2rem 1.3rem', background:'#1A202C', fontWeight:500 }}>{pagecountproductpc}</li>
                    
                    <Box  cursor={'pointer'} w={'2rem'} h={'full'} bg={'#22543D'} color={'whiteAlpha.700'} display={'flex'} justifyContent={'center'} alignItems={'center'} fontSize={'1.5rem'} >{'>'}</Box>
                </Flex>
            </Flex>
        </Box>

                  </Box>

                  )
              }

     </>
  )
}
