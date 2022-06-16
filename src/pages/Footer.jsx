import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { MdQrCode2 } from 'react-icons/md';
import { HStack, Icon } from '@chakra-ui/react';

export const Footer=()=> {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <Heading as="h1" size="sm">Company</Heading>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Heading as="h1" size="sm">Support</Heading>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Heading as="h1" size="sm">Legal</Heading>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Heading as="h1" size="sm">Install App</Heading>
            <Icon as={MdQrCode2} fontSize="5rem"/>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 Gearbest.com . All rights reserved</Text>
          <Stack direction={'row'} spacing={6} >
            <HStack gap="2rem">
            {/* The default icon size is 1em (16px) */}
            <Icon as={FaTwitter} />
            {/* Use the `boxSize` prop to change the icon size */}
            <Icon as={FaYoutube} w={6} h={6} />
            {/* Use the `color` prop to change the icon color */}
            <Icon as={FaInstagram} w={8} h={8} color='red.500' />
            </HStack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}