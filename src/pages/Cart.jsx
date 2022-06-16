import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { Stack,VStack, HStack, Text, Button, Heading } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const {cart, sum} = useSelector(state=>state.cartReducer)
  const navigate = useNavigate()
  const handlePay = () =>{
    navigate("/checkout")
  }
  return (
    <HStack gap="2rem" justify="space-around">
      <Stack>{cart.map((item)=>{
        return <HStack boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" p={5} justify="space-around">
          <Image src={item.image} w="100px"/>
          <Text>{item.name}</Text>
          <Text>$ {item.price}</Text>
          <Button>Delete</Button>
        </HStack>
      })}</Stack>
      <Stack gap="2rem">
        <Heading as="h1" size="xl">Total Price - ${sum}</Heading>
        <Button  onClick={handlePay}>Proceed to Pay {sum}</Button>
      </Stack>
    </HStack>
  )
}
