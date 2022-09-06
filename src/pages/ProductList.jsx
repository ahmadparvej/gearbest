import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Stack, Text} from '@chakra-ui/react';
import { Products } from './Products';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getProductsByCategory } from './../store/products/action';

export const ProductList = () => {
    const {list,loading} = useSelector(state=>state.getProductsReducer)
    const params = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getProductsByCategory(params.category,params.type))
    },[])
    if(loading){
      return <Text>Loading...</Text>
    }
    if(list<=0){
      return <Text>Items Not Found</Text>
    }
    return (
      <Stack display="flex" direction="row">
          <Products list={list}/>
      </Stack>
    )
}
