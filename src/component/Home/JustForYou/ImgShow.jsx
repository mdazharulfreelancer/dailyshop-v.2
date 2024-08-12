import { Box, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const ImgShow = ({index , image, product}) => {
    const [indeximg, setimageindex]= useState(0)
    useEffect(()=>{
        let randomIndex = ''
      const random =  Math.floor(Math.random(index) * index )

      randomIndex =+ random
   
      setimageindex(random)


    },[index])
  return (
    index === indeximg && (
        <Box key={index} w={'full'} h={'172px'}>
        <Image w={'full'} h={'100%'}  alt={product?.productname} src={image?.url} />
      
    </Box>
    )
  )
}

export default ImgShow
