import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import CategoryCards from './CategoryCards'

const AllGategori = () => {
  return (
    <>
        <Container   maxW={"container.xl"} >
            <Flex flexWrap={'wrap'} gap={2} className='' w={"full"} >
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />


            </Flex>
        </Container>
    </>
  )
}

export default AllGategori
