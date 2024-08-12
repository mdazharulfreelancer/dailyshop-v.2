/* eslint-disable no-unused-vars */

import { Box, VStack } from '@chakra-ui/react'
import Categories from '../../component/Home/Categories/Categories'
import HomeFastCategory from '../../component/Home/FastCategory/HomeFastCategory'
import FrashSale from '../../component/Home/FreshSale/FrashSale'
import HomeSlider from '../../component/Home/HomeSlider/HomeSlider'
import JustForYou from '../../component/Home/JustForYou/JustForYou'

const Home = () => {

  return (
    <>
      <VStack alignItems={"start"} w={"full"}>
          {
            window.innerWidth > 768 && (
              <>
              <Box w={"full"}>
            <HomeSlider />
          </Box>
              </>
            )
            
          }
          <Box w={"full"}>
            <HomeFastCategory />
          </Box>
          
          <Box w={"full"}>
            <FrashSale />
          </Box>

          {/* <Box w={"full"}>
            <TopRankingHome />
          </Box> */}

          <Box w={"full"}>
            <Categories />
          </Box>

          <Box w={"full"}>
            <JustForYou />
          </Box>
      </VStack>
      
     
    </>
  )
}

export default Home
