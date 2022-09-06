import React,{useEffect} from 'react'
import { Card } from './../components/Card';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Stack, Heading} from '@chakra-ui/react';
import { getProducts } from './../store/products/action';

export const RecommendedProductsList = () => {
    const {data} = useSelector((state)=>state.getProductsReducer)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getProducts("womans_clothing","lehngas"))
    },[])
  return (
    <Stack>
        <Heading as="h1" size="md">RECOMMENDED FOR YOU</Heading>
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>{data.map((product)=>{
              return <Card product={product} key={product.id}/>
            })}</Grid>
    </Stack>
  )
}
