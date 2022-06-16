import React,{useEffect, useState} from 'react'
import { HStack, Box, Heading } from '@chakra-ui/react';
import { VStack, Text, Grid } from '@chakra-ui/react';
import { getProducts } from './../store/products/action';
import { useDispatch, useSelector } from "react-redux";
import { Stack } from '@chakra-ui/react';
import Carousel from './Carousel';
import {getProductListItems} from "../store/products/action.js"
import { Link } from "react-router-dom";

export const Category = () => {
  const {data} = useSelector((state)=>state.getProductsReducer)
  const [toggle, setToggle] = useState(false)
  const [catArr, setCatArr] = useState({
    cell_phone_and_accessories:"Cell Phone & Accessories",
    mens_fashion:"Men's Fashion",
    womens_fashion:"Woman's Fashion",
    home_kitchen:"Home & Kitchen",
    health_and_personalcare:"Health & Personal Care",
    computers_tablets_and_Office:"Computers, tablets & Office",
    watches_and_jewelry:"Watches % Jewelry",
    moter_and_car_electronics:"Moter & Car Electronics",
    home_and_garder:"Home & Garden",
    outdoors_and_fitness_and_sports:"Outdoors, Fitness & Sports",
    appliances:"Appliances",
    gearbest_promotion:"Gearbest Promotion"
  })
  const dispatch = useDispatch()
  const handleCatClick = (key)=>{
    dispatch(getProducts(key))
    setToggle(!toggle)
  }
  const productListing = (val)=>{
    dispatch(getProductListItems(val))
  }
  return (
    <Box h={500} display="flex" justifyContent="space-between">
      <Stack w="20%" bg="#f5fbff">
        <Heading as="h3" size="sm" bg="black" color="white" p={2} align="center">Category</Heading>
        {Object.entries(catArr).map(([key,value])=>{
          return <Text key={key} px={3} cursor="pointer" onClick={()=>handleCatClick(key)}>{value}</Text>
        })}
      </Stack>
      <Stack w="80%">
        <Stack display="flex" h="40px" direction="row" bg="#ffda00" align="center" justifyContent="space-around"> 
          <Heading as="h3" size="sm" color="white" >SUPER DEALS</Heading>
          <Heading as="h3" size="sm" color="white" >APP ONLY</Heading>
          <Heading as="h3" size="sm" color="white" >NEW ARRIVAL</Heading>
        </Stack>
        {toggle?<Stack p={2}>
          <Grid w="60%" templateColumns='repeat(2, 1fr)' gap={6}>
          {Object.entries(data).map(([key,value])=>{
              return <Stack>
                <Heading as="h4" size="sm">{key}</Heading>
                <Stack direction="column">{Object.entries(value).map(([key,val])=>{
                    return <Link to="/product_list" cursor="pointer" onClick={()=>productListing(val)}>{key}</Link>
                  })}</Stack>
              </Stack>
            })}
          </Grid>
        </Stack>:<Carousel/>}
      </Stack>
    </Box>
  )
}
