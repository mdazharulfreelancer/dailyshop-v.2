import { Box, Container, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import CategoryCard from './CategoryCard'



const Categories = () => {
  const category = [
    {
      name : 'Cable',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP9N73w4Tj7lPkzEMckovuM9bibsMc1BrQxw&s'
    }
    ,
    {
      name : 'Mini Fan',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGt3OeuKoAurTIvcDZKkRxLQ10Irsbe1dPzg&s'
    }
    ,
    {
      name : 'Kitcen',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAu8cnyHFPPrXek8jYoNxzzxR5SdZmAb3AA&s'
    }
    ,
    {
      name : 'Wall Plated',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7h32d3dTamQdqIUj93WJB1GYZXVpZb7hmXA&s'
    },
    {
      name : 'Fan',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ_BVePiLnIikrnj8-snB0SwVHgnkxBWYbgA&s'
    }
    ,
    {
      name : 'Man Cloth',
      image : 'https://img.drz.lazcdn.com/g/kf/S63a851da34a64acaaff047414d8fa84fN.jpg_80x80q80.jpg_.webp'
    },
    {
      name : 'Phone',
      image : 'https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-13-Midnight-frontimage'
    },

    {
      name : 'Phone',
      image : 'https://img.drz.lazcdn.com/static/bd/p/5cb105927479efc2ac28d67d381776c5.jpg_80x80q80.jpg_.webp'
    },
    {
      name : 'Falme Cloth',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToOY7wpvkimnYnNJ4oMmP6HGBiNItTeKQ_g&s'
    }
    ,
    {
      name : 'Cloth',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwlQxnLZY7nIRMA009xy8cLjZHA9aRuXjPw&s'
    }
    ,
    {
      name : 'Router',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1nJXoR4J9q1VfQtR1ei0Ar3i-SAXl0hq8g&s'
    }
    ,
    {
      name : 'Computer',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGltL7mh2s7iC4IuPP6v7Da6hgBRhYxdS3Q&s'
    }
    ,
    {
      name : 'Cable',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP9N73w4Tj7lPkzEMckovuM9bibsMc1BrQxw&s'
    }
    ,
    {
      name : 'Vagetable',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ZUJLWEUWA8p2HhaMfXYfB4uU4M9_L3uKmA&s'
    }
    ,
    {
      name : 'Potatos',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEbpicNfSCYpy0b6zkgo11J2tW9S2vNkWSg&s'
    }
    ,
    {
      name : 'Sandle',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMJHymsCgFVgUwv7yzogfLIHRRBLPUV8_Hg&s'
    }
    ,
    {
      name : 'Cable',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP9N73w4Tj7lPkzEMckovuM9bibsMc1BrQxw&s'
    }
    ,
    {
      name : 'Cable',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP9N73w4Tj7lPkzEMckovuM9bibsMc1BrQxw&s'
    }
    ,
    {
      name : 'Buttary Fan',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQuy496ziC_0B8THA3SCJrQGhMYldyVsZug&s'
    }
    ,
    {
      name : 'Rice',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cz0F2G965i6gqFbj26nJblA7Gd4rBtmcg&s'
    }
    
 
  ]
  return (
    <>
           <Container  maxW={"container.xl"} px={{base:'0.1rem'}} borderRadius={'10px'} bg={"#fff"}>
            <Box px={{base:'0.7rem'}}>
             <Flex w={"full"} justifyContent={'space-between'} alignItems={'center'} mb={4} py={4}>
                <Text fontSize={{base:'', md:22}} fontWeight={500} color={'gray.600'}>Categories</Text>

                <Text as={Link} to={'/all-category'} fontSize={'sm'} fontWeight={500} color={'blue.600'}  >
                 Shop More 
                </Text>
            </Flex>
            <Flex w={"full"} className='categoriesScroll'  scrollBehavior={'smooth'} overflowX={'scroll'}>
                <Grid  templateColumns='repeat(10, 1fr)'>
                  {
                    category && category.map((el, index)=>{
                     return (
                      <CategoryCard item = {el} key={index} />
                     )
                    })
                  }
           
         

            </Grid>
            </Flex>
            </Box>
        </Container>
    </>
  )
}

export default Categories
