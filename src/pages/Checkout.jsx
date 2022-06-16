import React from "react";
import { checkout } from "../store/cart/action.js";

import { Box, Image, Heading, Text, Stack, Input, Select, Button, VStack, HStack} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux';
import {
    FormControl,
  } from '@chakra-ui/react'

export const Checkout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleCheckout = ()=>{
        dispatch(checkout())
        navigate("/successful")
    }
  return (
        <VStack bg="#f2f2f2">
          <FormControl action="" m="2rem">
            <Stack w="50%" m="auto" gap="1rem" bg="white" p={5} borderRadius="5px">
            <Box>
                <Heading as="h2" size="xl">CheckOut</Heading>
                <Heading as="h2" size="md">Payment Information</Heading>
            </Box>
           <Box>
           <Text>Cardholder Name</Text>
            <Input type="text" name="name" required />
           </Box>
           <Box>
           <Text>Card Number</Text>
            <Input
              type="number"
              name="card_number"
              id="card_number"
              required
            />
           </Box>
           <Box>
           <Text>Card Type</Text>
            <Select  class="inputbox" name="card_type" id="card_type" required>
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </Select>
           </Box>
            <Box>
              <HStack>
              <Text>Expiry</Text>
              <Input
                type="date"
                name="exp_date"
                id="exp_date"
                required
              />
              <Text class="expcvv_text2">CVV</Text>
              <Input
                type="password"
                name="cvv"
                id="cvv"
                required
              />
              </HStack>
            </Box>
            <Text></Text>
            <Button type="submit" onClick={handleCheckout}>
              CheckOut
            </Button>
          </Stack>
          </FormControl>
        </VStack>
  );
};
