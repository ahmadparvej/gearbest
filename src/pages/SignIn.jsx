import {
    InputGroup,
    HStack,
    InputRightElement,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { signIn, login } from './../store/auth/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const SignIn=()=> {
      const [showPassword, setShowPassword] = useState(false);
      const [email, setEmail] = useState("ahmadparvej58@gmail.com")
      const [firstName, setFirstName] = useState("Parvej")
      const [lastName, setLastName] = useState("Ahmad")
      const [password, setPassword] = useState("1234")

      const navigate = useNavigate()
      const dispatch = useDispatch()
      
      const handleSignUp = ()=>{
        dispatch(signIn({email,password,name:firstName+" "+lastName}))
        setTimeout(() => {
          navigate("/login")
        }, 1000);
      }
       
    return (
    <Flex
        minH={'100vh'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={2} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'3xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" value={firstName} onChange={({target})=>setFirstName(target.value)} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" value={lastName} onChange={({target})=>setLastName(target.value)} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={({target})=>setEmail(target.value)}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} value={password} onChange={({target})=>setPassword(target.value)}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={handleSignUp}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to="/login" color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
}