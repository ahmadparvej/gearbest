import React from "react";
import { Profile } from "../pages/Profile";

import {
  Stack,
  HStack,
  Box,
  Button,
  Input,
  Tag
} from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Portal
} from '@chakra-ui/react'

import { Icon } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
import { FaRegUser } from 'react-icons/fa'
import { BsHeart ,BsCart} from 'react-icons/bs'
import { FcGoogle} from 'react-icons/fc'
import { Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
export const Navbar = () => {

  const { token } = useSelector(state=>state.authReducer)
  const { cart } = useSelector((state)=>state.cartReducer)
  const navigate  = useNavigate()
  
  return (
    <Stack>
      <HStack direction="column" justify="space-around" py={4}>
        <Stack w="18%" onClick={()=>navigate("/")}>
          <Image
            src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png"
            alt="Dan Abramov"
          />
        </Stack>
        <HStack w="40%" h={8} gap={0} border="2px solid #ffda00" borderRadius="50px">
            <Input type="text" p="10px 25px" placeholder="type here..." border="none" variant='unstyled'/>
            <Button h={8} border="none" borderRadius="0 50px 50px 0" variant='with-shadow' outline="none"><Icon as={RiSearchLine}/></Button>
        </HStack>
        <HStack w="30%" justify="space-around">
          <Box cursor="pointer" ><Icon as={BsHeart}/>Favorite</Box>
          <Link to="/cart"><Box><Icon as={BsCart}/>Cart<Tag bg="#ffda00" borderRadius="50px">{cart.length}</Tag></Box></Link>
          <Popover >
          <PopoverTrigger>
            {token?<Box cursor="pointer"><Icon as={FaRegUser}/>Profile</Box>:<Box cursor="pointer"><Icon as={FaRegUser}/>SignUp</Box>}
          </PopoverTrigger>
          <Portal>
            {!token?<PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Welcome to Gearbest</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody >
                <Link to="/signin"><Button w="100%" colorScheme='yellow' bg="#ffda00">Sign In</Button></Link>
                <Button w="100%" bg="white" >Connect via <Icon mx={2} as={FcGoogle}/></Button>
              </PopoverBody>
            </PopoverContent>:<PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Profile</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody >
                <Profile/>
              </PopoverBody>
            </PopoverContent>}
          </Portal>
        </Popover>
        </HStack>
      </HStack>
    </Stack>
  );
};
