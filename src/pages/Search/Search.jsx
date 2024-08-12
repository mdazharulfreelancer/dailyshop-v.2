import { Container, Flex } from '@chakra-ui/react'
import SearchPage from '../../component/Search/SearchPage'
import Sidebar from '../../component/Search/Sidebar'

 const Search = () => {
  return (
    <>
        <Container maxW={{base:'container.sm', md:'container.xl'}} px={{base:0}}  mt='10'>
        <Flex px={{base:1, md:3}} w={'full'}>
                {
                    window.innerWidth > 1024 &&   <Flex bg={'white'} w={'250px'} h={'100%'} flex={1} >
                    <Sidebar />
                </Flex>
                }
            <Flex flex={4} w={'full'} >
                <SearchPage />
            </Flex>
        </Flex>
        </Container>
</>
  )
}

export default Search
