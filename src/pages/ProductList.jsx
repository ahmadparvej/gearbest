import React from 'react'
import { useSelector } from 'react-redux';
import { Card } from './../components/Card';
import { Grid, Stack, HStack, Text } from '@chakra-ui/react';
import { Products } from './Products';

export const ProductList = () => {
    const {list} = useSelector(state=>state.getProductsReducer)
  return (
    <Stack display="flex" direction="row">
        <Products list={list}/>
    </Stack>
  )
}
