import { Box, Flex, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProductPhone } from '../../actions/ProductAction'
import { DataRecevePc } from './DataRecevePc'
import { SearchProductLeft } from './SearchProductLeft'
import { SearchProductRight } from './SearchProductRight'
 const SearchPage = () => {
  const dispatch = useDispatch()

  //pcc---------------------------------
      const {categoryroducts, pagecountproduct, resultpage, loading:loadingpc} = useSelector((state)=>state.categoryprodcut)
      
  const  [page , setPage] = useState(2)
      const [ datapc , setdatapc] = useState([])
      useEffect(() =>{
         window.innerWidth < 425 && (
          dispatch(getCategoryProductPhone(1))
         )
      },[dispatch])
  
      useEffect(()=>{
          setdatapc(categoryroducts)
      },[categoryroducts])
    useEffect(()=>{
     
    },[])
  
      useEffect(()=>{
          const handleDataRecevePc = async() =>{
              if(window.innerHeight + document.documentElement.scrollTop + 1>=document.documentElement.scrollHeight) {
                setPage(page + 1)
                await  dispatch(getCategoryProductPhone(page))
                setdatapc((pre) =>[ ...datapc ,...pre])
              }
          }
          const pagelength = pagecountproduct * resultpage
          const datalenth = datapc.length
           if(!loadingpc) {
            if(datalenth < pagelength){
              window.innerWidth < 426 && (
                window.addEventListener('scroll' , handleDataRecevePc)
              )
            }
           
          }
   
  
          return(() =>{
          window.removeEventListener('scroll' , handleDataRecevePc)
  
          })
      },[dispatch, loadingpc, datapc , page , pagecountproduct , resultpage])

  
  return (
          <Box px={{base:0, md:2}} w={'full'}>
              <VStack alignItems={'start'}>
                 <Flex>HEader</Flex>
                {
                  <DataRecevePc />
                }
                
              
              {
                window.innerWidth < 430 && (
                  <Flex w={'full'} gap={'4px'}p={0} m={0}>
                  <Flex  h={'100%'}  py={1} w={'49.6%'}  gap={2} flexWrap={'wrap'}>
                    {
                      datapc && datapc?.map((product, index)=>{
                        return(
                          index % 2 === 0 && (
                            <SearchProductLeft key={index} product={product} />
                          )
                        )
                      })
                    }
                   
                 
                  </Flex>
                  <Flex   h={'100%'} w={'49.6%'}   py={1}  gap={2} flexWrap={'wrap'}>
                  {
                      datapc && datapc?.map((product, index)=>{
                        return(
                          index % 2 !== 0 && (
                            <SearchProductRight key={index} product={product} />
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

      )
}
    
export default SearchPage

