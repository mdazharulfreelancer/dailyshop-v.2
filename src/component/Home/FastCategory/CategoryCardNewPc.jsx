import { Box, Flex, Link, Text } from "@chakra-ui/react";


const CategoryCardNewPc =  ({item, index}) =>{
  return(
    <>
        <Link href={`${item?.link}`} className="fastCategoryLink" { ...index === 0 ? {borderLeft : '1px '} :''} { ...index === 5 ? {borderRight : '2px '} :''} pos={'relative'} border={'1px solid #a3afc5'} _hover={{textDecoration : 'none'}}  borderRight={'0px'} borderLeft={'0px'} bg={'#dddddd'} px={'16px'} py={'10px'} minW={'210px'}>
            
            <Flex width={'full'} justifyContent={'center'} alignItems={'center'} gap={2}>
                <Box className="icon-fast-category">{item?.img} </Box>
                <Text fontWeight={500} fontSize={'15px'}>{item?.nameTop}</Text>
            </Flex>
        </Link>
    </>
  )
}
export default  CategoryCardNewPc