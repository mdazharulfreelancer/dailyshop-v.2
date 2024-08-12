import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import { FcCurrencyExchange, FcOk, FcPaid, FcPlus, FcPositiveDynamic, FcShipped } from "react-icons/fc";
import CategoryMobailCard from './CategoriMobailCard';
import CategoryCardNewPc from './CategoryCardNewPc';
const HomeFastCategory = () => {
  const card = [
    {
      nameTop : 'New',
      nameBottom : 'Product',
      img : 'https://res.cloudinary.com/daxvmjaff/image/upload/v1705175012/free_deleveri_6_rqizeu.png',
      link : '/new-product-today-all'
    },
    {
      nameTop : 'Everyday',
      nameBottom : 'LowPrice',
      img : 'https://res.cloudinary.com/daxvmjaff/image/upload/v1705175336/2_cpfdwo.png',
      link : '/everyday-low-price-all'
    },
    {
      nameTop : 'Wholesale',
      nameBottom : 'Price',
      img : 'https://res.cloudinary.com/daxvmjaff/image/upload/v1705175668/Every_Low_Price_1_vtitsl.png',
      link : '/wholesale-price-all'
    },
    {
      nameTop : 'Free',
      nameBottom : 'Delivery',
      img : 'https://res.cloudinary.com/daxvmjaff/image/upload/v1705174700/free_deleveri_5_zsavlh.png',
      link : '/free-delivery-all'
    },
    {
      nameTop : 'Top',
      nameBottom : 'Sale',
      img : 'https://res.cloudinary.com/daxvmjaff/image/upload/v1705175668/Every_Low_Price_1_vtitsl.png',
      link : '/top-sale-all'
    }
  ]

  const pcCard = [ 
    {
    nameTop : 'Safe Payment Rule',
    nameBottom : '',
    img : <FcOk /> ,
    link : '/new-product-today-all'
   },
    {
      nameTop : 'New Product Shop',
      nameBottom : '',
      img :<FcPlus /> ,
      link : '/new-product-today-all'
    },
    {
      nameTop : 'Daily LowPrice',
      nameBottom : '',
      img : <FcCurrencyExchange />,
      link : '/everyday-low-price-all'
    },
    {
      nameTop : 'Wholesale Product',
      nameBottom : 'Price',
      img : <FcPaid />,
      link : '/wholesale-price-all'
    },
    {
      nameTop : 'Free Delivary',
      nameBottom : '',
      img : <FcShipped />,
      link : '/free-delivery'
    },
    {
      nameTop : 'Top Sale Product',
      nameBottom : '',
      img : <FcPositiveDynamic />,
      link : '/top-sale-all'
    },


  ]
  return (
    <>
        <Container   maxW={"container.xl"} px={{base : '0.3rem'}}>
          {
             window.innerWidth > 425 && (
              <Flex className='categoriesScroll' w={"full"} scrollBehavior={'smooth'} overflowX={'scroll'} gap={0}>

              {
                pcCard && pcCard.map((item,index) => {
                  return (
                    <CategoryCardNewPc item= {item} key={index} index= {index}/>
                  )
                })
              }
       
            

          </Flex>
             )
  
          }
          {
            window.innerWidth < 425 && ( 
              <Flex className='categoriesScroll' w={"full"} scrollBehavior={'smooth'} justifyContent={'space-between'} overflowX={'scroll'}>

{
                card && card.map((item,index) => {
                  return (
                    <CategoryMobailCard key={index} item = {item}/>
                  )
                })
}
             
              </Flex>


            )
          }
        
        </Container>
    </>
  )
}

export default HomeFastCategory
