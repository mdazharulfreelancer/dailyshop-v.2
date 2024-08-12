import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import './Loader.scss'

export const Loader = ({data, pagecountproduct, resultpage}) => {
  return (
   <>

{
        data.length  < (pagecountproduct - 4) * resultpage && (
            <Flex w={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
            <Box w={'full'}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
       
            <div className="containerLoader">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
            <div className="circle circle-5"></div>
            </div>
            </Box>
        </Flex>
        )
    }
     
   </>
  )
}
