/* eslint-disable no-unused-vars */
import { Box, Button, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FaFacebookMessenger } from "react-icons/fa6"
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import CartIcon from '../../component/Cart/CartIcon'
import CartModel from '../../component/Cart/CartModel'
import FooterMobail from './Footer.jsx/FooterMobail'
import Header from './Header/Header'

const Pagelayout = ({children}) => {

  
  // React.useEffect(() => {
  //   // Select all div elements within the component
  //   const divElements = document.querySelectorAll('div');
  //   const pElements = document.querySelectorAll('p');
  //   const imgElements = document.querySelectorAll('img');
  //   const aElements = document.querySelectorAll('a');
  //   // Iterate through each div element and set a custom attribute
  //   divElements.forEach((div, index) => {
  //     div.setAttribute('data-reactId', `.21jv590slsxl-y-2xta.b.2.0.0.${index}.0.0.0.0.0.0.${index}`);


  //     div.setAttribute('data-react-checksum', `.15ajhar3ul.b.2.0.0.${index}.0.0.0.0.0.${index}`);

  //     div.setAttribute('react-qualifier', `.42.1a.ck.yml.0.2.4.01.1${index + 1}.2.0.4.0.1.${index + 100}`)

  //     div.setAttribute('styles', `xb57i2ifg x1q594okio x5lxg6scss x78zum5.1 xdt5ytfhi x6ikm8rgss x1ja2u2zio x1pq812kcss x1rohswgoe xfk6m8.12 x1yqm8sice xjx87ckcss x1l7klhgesc x1iyjqo2.2 xs83m0k.023 x2lwn1joce xx8ngbgecss xwo3gffgf x1oyok0egg x1odjw0fio x1e4zzelkl x1n2onr6ed xq1qtftfk1.2 `)
  //   });



  //           // Iterate through each div element and set a custom attribute
  //  pElements.forEach((p, index) => {
  //               p.setAttribute('data-reactId', `.41jp590slpxl-y-2xta.b.2.0.0.${index}.0.0.0.p.0.0.${index}`);
      
  //               p.setAttribute('data-react-checksum', `.15ajhar3ul.b.2.0.0.${index}.0.0.0.p.0.${index}`);
  //             });

  //        imgElements.forEach((img, index) => {
  //           img.setAttribute('data-reactId', `.41img590slpxl-y-2xta.b.2.0.0.${index}.0.0.0.p.0.0.${index}`);
      
  //           img.setAttribute('data-react-checksum', `.15ajhar3ul.b.2.0.0.${index}.0.0.0.p.0.${index}`);
  //     });

  //     aElements.forEach((a, index) => {
  //       a.setAttribute('data-reactId', `.41a590slpxl-y-2xta.b.2.0.0.${index}.0.0.0.p.0.0.${index}`);
  
  //       a.setAttribute('data-react-checksum', `.15ajhar3ul.b.2.0.0.${index}.0.0.0.p.0.${index}`);
  // });
  // }, []);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const {cartItems} = useSelector(state => state.cartItem)
  const [open, setOpen] = React.useState(false)
  const moddelOpen = () =>{
    onOpen()
    setOpen(true)
   
  }
  const [total, setTotal] = React.useState(0)
    
  useEffect(() => { 
      let price = []
      cartItems.map(item => {
          price.push(item?.currentprice * item?.qty)
      })

     return setTotal(price.reduce((a, b) => a + b, 0))
  }, [cartItems])

    const {pathname} = useLocation()
    //const { receverid } = useParams()


  return (
    <>
        <VStack pos={'relative'} alignItems={"start"}>
          
            {
              pathname !== '/chat'  && <Header /> 
            }
          {
            window.innerWidth > 764 && ( 
              <>
               <Box  onClick={()=>moddelOpen()} cursor={'pointer'} zIndex={999} pos={'fixed'} top={'45vh'} right={0}>
                <CartIcon total={total} cartItems={cartItems} />
               </Box>

               <Box zIndex={99999} w={'full'}>
               <CartModel open={open} setOpen={setOpen} total={total} cartItems={cartItems}  isOpen={isOpen} onClose={onClose}/>
               </Box>


               <Box  cursor={'pointer'} zIndex={999} pos={'fixed'} bottom={6}right={12} >
               <Button as={Link}  rightIcon={<FaFacebookMessenger color='purple' />}className='buttonMesseagePc'  colorScheme='pink' variant='solid' >
                      Live Chat
                    </Button>
               </Box>
              </>
            )
          }

          <Box w={"full"} className='pagelayout'>
           {children}
           </Box>

           {
            window.innerWidth < 426 && (
              <>
                 <Box zIndex={999999} w={'full'}>
               <CartModel  cartItems={cartItems}total ={total} isOpen={isOpen} onClose={onClose}/>
               </Box>
               <Box h={'6vh'}>
              <Box pos={'fixed'} bottom={0} left={0} w={"full"} zIndex={9}>
              {
               
              pathname !== '/chat'  && pathname !== '/chat/message/:recverid'  ?<FooterMobail isOpen={onOpen} /> : '' 
                   }
              
              </Box>
              </Box>
              </>
            )
           }
        </VStack>
    </>
  )
}

export default Pagelayout
