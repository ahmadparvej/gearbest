import React from 'react'
import { Card } from './../components/Card';
import { Grid, Stack, Text } from '@chakra-ui/react';

export const Products = ({list}) => {
    
  return (
      <>
      <Stack w="20%"><Text>Filters :</Text></Stack>
      <Grid w="80%" templateColumns="repeat(3,1fr)" gap={5}>{list.map((product)=>{
          return <Card product={product}/>
      })}</Grid>
      </>
  )
}
