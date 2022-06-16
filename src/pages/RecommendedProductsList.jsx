import React,{useEffect} from 'react'
import { Card } from './../components/Card';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Stack, Heading, Box, Text } from '@chakra-ui/react';
import { getProducts } from './../store/products/action';

export const RecommendedProductsList = () => {
    const {data} = useSelector((state)=>state.getProductsReducer)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getProducts("mens_fashion"))
    },[])
  return (
    <Stack>
        <Heading as="h1" size="md">RECOMMENDED FOR YOU</Heading>
        <Grid>
          {Object.entries(data).map(([key,value])=>{
              return <Stack>
                <Box>{Object.entries(value).map(([key,val])=>{
                    return <Grid templateColumns="repeat(4, 1fr)" gap="1rem">{val.map((product)=>{
                        return <Card product={product}/>
                    })}</Grid>
                  })}</Box>
              </Stack>
            })}
          </Grid>
    </Stack>
  )
}
