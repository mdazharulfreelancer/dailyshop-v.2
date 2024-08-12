import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import TopDeals from './TopDials/TopDeals'
import NewProductAllPhone from './newproductall/NewProductAllPhone/NewProductAllPhone'
import NewProductAll from './newproductall/newproductall'

const Body = () => {

  const [keys, setKeys] = React.useState(0)

  //764 ago inner width----------------------------------------------
  return (
    <>
        <VStack alignItems={'start'}>
            <Box w={'full'}>
                <TopDeals />
            </Box>
            {
                window.innerWidth > 426 && (
                    <Box w={'full'} >
                        <NewProductAll  />
                    </Box>
                )
            }

          {
                window.innerWidth < 426 && (
                    <Box w={'full'} >
                        <NewProductAllPhone  />
                    </Box>
                )
            }

          

        </VStack>
    </>
  )
}

export default Body
