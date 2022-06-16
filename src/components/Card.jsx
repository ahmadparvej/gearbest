import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Icon
  } from '@chakra-ui/react';
import {BsCart} from "react-icons/bs"
import { useDispatch } from 'react-redux';
import { addToCart } from './../store/cart/action';
  export const Card=({product})=> {
    const dispatch = useDispatch()
    const handleAddToCart = (item)=>{
      dispatch(addToCart(item))
    }
    return (
      <Center py={12} _hover={{
        transform: 'translateY(-2px)',
      }}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={product.image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading fontSize={'md'} fontFamily={'body'} fontWeight={500}>
              {product.name}
            </Heading>
            <Stack w="100%" direction={'row'} align={'center'} justifyContent="space-around">
              <Text fontWeight={800} fontSize={'xl'}>
                ${product.price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                ${product.strikedOfprice}
              </Text>
              <Box _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
              color:"green"
            }}><Icon as={BsCart} fontSize="xl" onClick={()=>handleAddToCart(product)}/></Box>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }