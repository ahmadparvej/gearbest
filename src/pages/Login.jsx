import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { login } from "../store/auth/action.js";
import { useDispatch } from 'react-redux';

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

export const Login = () => {
    const [email, setEmail] = useState("ahmadparvej58@gmail.com")
    const [password, setPassword] = useState("1234")

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleLogin = ()=>{
        dispatch(login({email,password}))
        navigate("/")
    }
    
  return (
    <Flex
    minH={'50vh'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={2} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'3xl'}>Sign in to your account</Heading>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={({target})=>setEmail(target.value)}/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={({target})=>setPassword(target.value)}/>
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
            </Stack>
            <Button
              onClick = {handleLogin}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Sign in
            </Button>
          </Stack>
          <Stack pt={6}>
                <Text align={'center'}>
                  Not Register Yet ? <Link to="/signin"><Text color="blue">Register</Text></Link>
                </Text>
              </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  )
}
