import React,{useState} from 'react'
import { Card } from './../components/Card';
import { Grid, Stack, Text, Heading, Tag, Flex } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

export const Products = ({list}) => {
  const [items, setItems] = useState(list)
  const [type, setType] = useState("inc");

  const handlePriceTags = (prc)=>{
    const newItems = items.filter((item)=>item.price>=prc)
    console.log(newItems);
    setItems(newItems)
  }
  return (
      <>
      <Stack w="15%" gap={5}>
        <Heading as="h1" size="md">Filters :</Heading>
        <Stack>
          <Text fontSize={20}  color="grey" >SORT BY: Price</Text>
          <Tag p={2} fontWeight="500" onClick={()=>setType("inc")}>LOW - HIGH</Tag>
          <Tag p={2} fontWeight="500" onClick={()=>setType("dec")}>HIGH - LOW</Tag>
          <Flex wrap="wrap" gap={2}>
            <Tag cursor="pointer" onClick={()=>handlePriceTags(100)}>$100</Tag>
            <Tag cursor="pointer" onClick={()=>handlePriceTags(200)}>$200</Tag>
            <Tag cursor="pointer" onClick={()=>handlePriceTags(300)}>$300</Tag>
            <Tag cursor="pointer" onClick={()=>handlePriceTags(400)}>$400</Tag>
            <Tag cursor="pointer" onClick={()=>handlePriceTags(500)}>$500</Tag>
            <Tag cursor="pointer" onClick={()=>handlePriceTags(600)}>$600</Tag>
            <Tag cursor="pointer" onClick={()=>handlePriceTags(700)}>$700</Tag>
            <Tag cursor="pointer" onClick={()=>handlePriceTags(1500)}>$1500</Tag>
          </Flex>
        </Stack>
        <Stack>
          <Text fontSize={20} color="grey" >SORT BY: Rating</Text>
          <Button size="sm" fontWeight="500" onClick={()=>setType("inc")}>LOW - HIGH</Button>
          <Button size="sm" fontWeight="500" onClick={()=>setType("dec")}>HIGH - LOW</Button>
        </Stack>
      </Stack>
      <Grid w="80%" templateColumns="repeat(3,1fr)" gap={5}>{items.sort((a,b)=>{
        if(type==="inc"){
          return a.price-b.price;
        }
        if(type==="dec"){
          return b.price-a.price;
        }
      }).map((product)=>{
          return <Card product={product}/>
      })}</Grid>
      </>
  )
}
